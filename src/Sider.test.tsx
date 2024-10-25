import { render, fireEvent } from "@testing-library/react";
import { Slider } from "./Slider.tsx";

describe("<Slider>", () => {
  it("calls the setValue when slid", async () => {
    const setValueMock = vi.fn();
    const { getByRole } = render(
      <Slider value={[22]} setValue={setValueMock} />,
    );

    const slider = getByRole("slider");
    expect(slider).toBeInTheDocument();

    // Simulate drag
    fireEvent.pointerDown(slider, { clientX: 0, clientY: 0 });
    fireEvent.pointerMove(slider, { clientX: 57, clientY: 0 });
    fireEvent.pointerUp(slider);

    expect(setValueMock).toHaveBeenCalledWith([57]);
  });
});
