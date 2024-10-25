import { useState } from "react";
import { Slider } from "./Slider.tsx";

function App() {
  const [value, setValue] = useState([53]);

  return (
    <div>
      <h1>Slider Test</h1>

      <Slider value={value} setValue={setValue} />

      <pre data-testid="val">{value[0]}</pre>
    </div>
  );
}

export default App;
