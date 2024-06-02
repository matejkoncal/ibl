import { TableCell } from "@mui/material";

type DateTimeCellProps = {
  date: Date;
  locales: Intl.LocalesArgument;
};

export const DateTimeCell = ({ date, locales }: DateTimeCellProps) => {
  const dateTimeFormater = new Intl.DateTimeFormat(locales, { timeStyle: "short", dateStyle: "medium" });

  return (
    <TableCell style={{ whiteSpace: "nowrap" }} align="center">
      {dateTimeFormater.format(date)}
    </TableCell>
  );
};
