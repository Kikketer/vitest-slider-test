import * as RadixSlider from "@radix-ui/react-slider";
import "./styles.css";
import { FC } from "react";

export const Slider: FC<{
  value: number[];
  setValue: (T: number[]) => void;
}> = ({ value, setValue }) => {
  return (
    <RadixSlider.Root
      className="SliderRoot"
      defaultValue={[51]}
      max={100}
      step={1}
      value={value}
      onValueChange={(value) => setValue(value)}
    >
      <RadixSlider.Track className="SliderTrack">
        <RadixSlider.Range className="SliderRange" />
      </RadixSlider.Track>
      <RadixSlider.Thumb className="SliderThumb" aria-label="Volume" />
    </RadixSlider.Root>
  );
};
