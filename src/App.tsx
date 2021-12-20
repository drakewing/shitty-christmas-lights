import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Lights from "./Lights";

function App() {
  const [selectedColor, setSeletectedColor] = useState("#fff");
  const [changeBulb, setChangeBulb] = useState(false);

  const lightsProps = {
    selectedColor,
    changeBulb,
    onBulbChange: () => setChangeBulb(false),
  };

  return (
    <div className="App">
      <h1>Shitty Christmas Lights</h1>
      <Lights {...lightsProps} />
      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={(color) => setSeletectedColor(color.hex)}
      />
      <button onClick={() => setChangeBulb(true)}>Change light bulb</button>
    </div>
  );
}

export default App;
