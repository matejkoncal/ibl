import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { useState } from "react";

export type MessageTypeState = {
  metar: boolean;
  sigmet: boolean;
  taf: boolean;
};

interface MessageTypeSelectorProps {
  onChange?: (value: MessageTypeState) => void;
}

export const MessageTypeSelector = ({ onChange }: MessageTypeSelectorProps) => {
  const [value, setValue] = useState<MessageTypeState>({ metar: false, sigmet: false, taf: false });

  return (
    <Stack direction="row" spacing={2} data-testid="messageTypeSelector">
      <FormControlLabel
        control={
          <Checkbox
            data-testid="metar-checkbox"
            checked={value.metar}
            onChange={e => {
              const newValue = { ...value, metar: e.target.checked };
              setValue(newValue);
              onChange?.(newValue);
            }}
          />
        }
        label="METAR"
      />
      <FormControlLabel
        control={
          <Checkbox
            data-testid="sigmer-checkbox"
            onChange={e => {
              const newValue = { ...value, sigmet: e.target.checked };
              setValue(newValue);
              onChange?.(newValue);
            }}
          />
        }
        label="SIGMET"
      />
      <FormControlLabel
        control={
          <Checkbox
            data-testid="taf-checkbox"
            onChange={e => {
              const newValue = { ...value, taf: e.target.checked };
              setValue(newValue);
              onChange?.(newValue);
            }}
          />
        }
        label="TAF"
      />
    </Stack>
  );
};
