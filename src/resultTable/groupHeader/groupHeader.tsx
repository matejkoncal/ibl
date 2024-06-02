import { TableCell, TableRow } from "@mui/material";

type GroupHeaderProps = {
  children?: string;
};

export const GroupHeader = ({ children }: GroupHeaderProps) => {
  return (
    <TableRow selected key={children + "header"}>
      <TableCell>{children}</TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};
