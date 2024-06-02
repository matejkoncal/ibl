import { fireEvent, render, screen } from "@testing-library/react";
import { MessageTypeSelector } from "./messageTypeSelector";

describe("MessageTypeSelector", () => {
  it("should render", () => {
    render(<MessageTypeSelector />);
    const messageTypeSelector = screen.getByTestId("messageTypeSelector");
    expect(messageTypeSelector).toBeTruthy();
  });

  it("should call the onChange prop when the input changes", () => {
    const onChange = jest.fn();
    render(<MessageTypeSelector onChange={onChange} />);
    const metarCheckbox = screen.getByTestId("metar-checkbox");
    fireEvent.click(metarCheckbox);
    expect(onChange).toHaveBeenCalledWith({ metar: true, sigmet: false, taf: false });
  });

  it("should call the onChange prop with the correct value when the input changes", () => {
    const onChange = jest.fn();
    render(<MessageTypeSelector onChange={onChange} />);
    const metarCheckbox = screen.getByTestId("metar-checkbox");
    const sigmerCheckbox = screen.getByTestId("sigmer-checkbox");
    const tafCheckbox = screen.getByTestId("taf-checkbox");
    fireEvent.click(metarCheckbox);
    fireEvent.click(sigmerCheckbox);
    fireEvent.click(tafCheckbox);
    expect(onChange).toHaveBeenCalledWith({ metar: true, sigmet: true, taf: true });
  });
});
