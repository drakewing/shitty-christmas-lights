import { useState } from "react";
import ColorPicker from "./ColorPicker";
import Lights from "./Lights";
import "./index.css";

function App() {
  const [selectedColor, setSeletectedColor] = useState("#fff");
  const [changeBulb, setChangeBulb] = useState(false);

  const lightsProps = {
    selectedColor,
    changeBulb,
    onBulbChange: () => setChangeBulb(false),
  };

  return (
    <div className="App app">
      <Lights {...lightsProps} />
      <h1>Shitty Christmas Lights</h1>
      <ul className="listStyle">
        <li>1. Pick a light</li>
        <li>2. Pick a color</li>
        <li>3. Change the bulb</li>
      </ul>
      <div className="colorPicker">
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={(color) => setSeletectedColor(color.hex)}
        />
        <button onClick={() => setChangeBulb(true)}>Change light bulb</button>
      </div>
      <div>
        Made by <a href="https://twitter.com/mattdrake_">Matt</a>
      </div>
    </div>
  );
}

export default App;
