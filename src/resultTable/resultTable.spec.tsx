import { render, screen } from "@testing-library/react";
import { ResultTable } from "./resultTable";
import "@testing-library/jest-dom";
import { WeatherReport } from "../opmet";

describe("ResultTable", () => {
  it("should render", () => {
    render(<ResultTable tableSource={{}} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
  });

  it("should render table with provided data", () => {
    const tableSource = {
      LZIB: [
        {
          stationId: "LZIB",
          queryType: "METAR",
          reportTime: "2021-10-10T10:00:00Z",
          text: "METAR LZIB 101000Z 31010KT 9999 FEW030 BKN100 10/05 Q1023 NOSIG",
        },
      ],
    } as Record<string, WeatherReport[]>;
    render(<ResultTable tableSource={tableSource} />);
    expect(screen.getByText("METAR")).toBeInTheDocument();
  });

  it("should display date and time in correct format", () => {
    const tableSource = {
      LZIB: [
        {
          stationId: "LZIB",
          queryType: "METAR",
          reportTime: "2021-10-10T10:00:00Z",
          text: "METAR LZIB 101000Z 31010KT 9999 FEW030 BKN100 10/05 Q1023 NOSIG",
        },
      ],
    } as Record<string, WeatherReport[]>;
    render(<ResultTable tableSource={tableSource} />);
    expect(screen.getByText("10. 10. 2021, 12:00")).toBeInTheDocument();
  });

  it("should colorize BKN, FEW and SCT words", () => {
    const tableSource = {
      LZIB: [
        {
          stationId: "LZIB",
          queryType: "METAR",
          reportTime: "2021-10-10T10:00:00Z",
          text: "METAR LZIB 101000Z 31010KT 9999 FEW030 BKN100 10/05 Q1023 NOSIG",
        },
      ],
    } as Record<string, WeatherReport[]>;
    render(<ResultTable tableSource={tableSource} />);
    expect(screen.getByText("BKN100")).toHaveStyle("color: red");
    expect(screen.getByText("FEW030")).toHaveStyle("color: blue");
  });
});
