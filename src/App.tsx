import { Box, CssBaseline, Stack } from "@mui/material";
import "./App.css";
import { ResultTable } from "./resultTable/resultTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputForm } from "./inputForm/inputForm";
import { useEffect } from "react";
import { useOpmet } from "./opmet/useOpmet";

function App() {
  const [loadOpmet, tableContent, loading, error] = useOpmet();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <Box padding="30px" justifyContent="center">
      <CssBaseline />
      <Stack width="100%" alignItems="center" spacing={2}>
        <InputForm loading={loading} onCreateBriefingClick={loadOpmet} />
        <ResultTable tableSource={tableContent} />
      </Stack>
      <ToastContainer />
    </Box>
  );
}

export default App;
