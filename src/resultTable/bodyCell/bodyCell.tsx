import { TableCell } from "@mui/material";

type BodyCellProps = {
  children: string;
};

export const BodyCell = ({ children }: BodyCellProps) => {
  const coloredText = children.split(" ").map((word, index) => {
    if (word.startsWith("BKN") || word.startsWith("FEW") || word.startsWith("SCT")) {
      const value = parseInt(word.substring(3, 6));
      const color = getColor(value);
      return (
        <span key={index + word} style={{ color }}>
          {word + " "}
        </span>
      );
    } else {
      return word + " ";
    }
  });

  return <TableCell>{coloredText}</TableCell>;
};

function getColor(number: number): string {
  return number <= 30 ? "blue" : "red";
}
