import { render, fireEvent } from "@testing-library/react";
import App from "./App.tsx";

describe("<App>", () => {
  it("sets a value when the slider is slid", async () => {
    const { getByRole, getByTestId } = render(<App />);

    const slider = getByRole("slider");
    expect(slider).toBeInTheDocument();

    // Simulate drag
    fireEvent.pointerDown(slider, { clientX: 0, clientY: 0 });
    fireEvent.pointerMove(slider, { clientX: 57, clientY: 0 });
    fireEvent.pointerUp(slider);

    const value = getByTestId("val");
    expect(value).toHaveTextContent("53");
  });
});
