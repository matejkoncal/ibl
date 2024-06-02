import { Stack, TextField } from "@mui/material";
import { MessageTypeSelector, MessageTypeState } from "../messageTypeSelector/messageTypeSelector";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

type InputFormProps = {
  onCreateBriefingClick: (airports: string, countries: string, messageTypes: MessageTypeState) => void;
  loading?: boolean;
};

export const InputForm = ({ onCreateBriefingClick, loading }: InputFormProps) => {
  const [airports, setAirports] = useState("");
  const [countries, setCountries] = useState("");
  const [messageTypes, setMessageTypes] = useState<MessageTypeState>({ metar: false, sigmet: false, taf: false });

  const haveSomeLocation = airports || countries;
  const haveSomeMessageType = messageTypes.metar || messageTypes.sigmet || messageTypes.taf;

  const canQuery = haveSomeLocation && haveSomeMessageType;

  const onAirportsChange = (e: React.ChangeEvent<HTMLInputElement>) => setAirports(e.target.value.toUpperCase());
  const onCountriesChange = (e: React.ChangeEvent<HTMLInputElement>) => setCountries(e.target.value.toUpperCase());

  return (
    <Stack spacing={2} width="100%" maxWidth="sm">
      <MessageTypeSelector onChange={setMessageTypes} />
      <TextField value={airports} onChange={onAirportsChange} label="Airports" placeholder="LZIB LKPR EGLL" />
      <TextField value={countries} onChange={onCountriesChange} label="Countries" placeholder="SQ CZ" />
      <LoadingButton
        loading={loading}
        onClick={() => onCreateBriefingClick(airports, countries, messageTypes)}
        disabled={!canQuery}
        variant="contained"
      >
        Create Briefing
      </LoadingButton>
    </Stack>
  );
};
