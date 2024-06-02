import { Box, Button, CssBaseline, Stack, TextField } from "@mui/material";
import "./App.css";
import { MessageTypeSelector, MessageTypeState } from "./messageTypeSelector/messageTypeSelector";
import { useState } from "react";
import { ResultTable } from "./resultTable/resultTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WeatherReport, query } from "./opmet";

function App() {
  const [airports, setAirports] = useState("");
  const [countries, setCountries] = useState("");
  const [messageTypes, setMessageTypes] = useState<MessageTypeState>({ metar: false, sigmet: false, taf: false });
  const [tableContent, setTableContent] = useState<Record<string, WeatherReport[]>>({});

  const haveSomeLocation = airports || countries;
  const haveSomeMessageType = messageTypes.metar || messageTypes.sigmet || messageTypes.taf;

  const canQuery = haveSomeLocation && haveSomeMessageType;

  return (
    <Box padding="30px" justifyContent="center">
      <CssBaseline />
      <Stack width="100%" alignItems="center" spacing={2}>
        <Stack spacing={2} width="100%" maxWidth="sm">
          <MessageTypeSelector onChange={setMessageTypes} />
          <TextField value={airports} onChange={e => setAirports(e.target.value.toUpperCase())} label="Airports" placeholder="LZIB LKPR EGLL" />
          <TextField value={countries} onChange={e => setCountries(e.target.value.toUpperCase())} label="Countries" placeholder="SQ CZ" />
          <Button
            onClick={async () => {
              try {
                const result = await query(airports, countries, messageTypes);
                setTableContent(result);
              } catch (error) {
                toast.error((error as Error).message);
              }
            }}
            disabled={!canQuery}
            variant="contained"
          >
            Create Briefing
          </Button>
        </Stack>
        <ResultTable tableSource={tableContent} />
      </Stack>
      <ToastContainer />
    </Box>
  );
}

export default App;
