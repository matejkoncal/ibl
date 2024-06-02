import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import "@testing-library/jest-dom";
import * as opmet from "./opmet/opmet";

describe("App", () => {
  it("should render", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should have disabled button when no location is set", () => {
    render(<App />);
    expect(screen.getByRole("button")).toHaveProperty("disabled", true);
  });

  it("should have disabled button when no message type is set but location is set", async () => {
    render(<App />);
    const airportsInput = screen.getByLabelText("Airports");
    await userEvent.type(airportsInput, "LZIB");
    expect(screen.getByRole("button")).toHaveProperty("disabled", true);
  });

  it("should have enabled button when location and message type is set", async () => {
    render(<App />);
    const airportsInput = screen.getByLabelText("Airports");
    await userEvent.type(airportsInput, "LZIB");
    const metarCheckbox = screen.getByLabelText("METAR");
    await userEvent.click(metarCheckbox);
    expect(screen.getByRole("button")).toHaveProperty("disabled", false);
  });

  it("should call query function when button is clicked", async () => {
    const querySpy = jest.spyOn(opmet, "query");

    render(<App />);
    const airportsInput = screen.getByLabelText("Airports");
    await userEvent.type(airportsInput, "LZIB");
    const metarCheckbox = screen.getByLabelText("METAR");
    await userEvent.click(metarCheckbox);
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(querySpy).toHaveBeenCalled();
  });

  it("should show error toast when query function throws error", async () => {
    jest.spyOn(opmet, "query").mockRejectedValue(new Error("Network error"));

    render(<App />);
    const airportsInput = screen.getByLabelText("Airports");
    await userEvent.type(airportsInput, "LZIB");
    const metarCheckbox = screen.getByLabelText("METAR");
    await userEvent.click(metarCheckbox);
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(await screen.findByText("Network error")).toBeInTheDocument();
  });
});
