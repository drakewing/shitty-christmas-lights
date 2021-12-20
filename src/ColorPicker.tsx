import { SketchPicker, ColorChangeHandler } from "react-color";

interface ColorPickerProps {
  selectedColor: string;
  setSelectedColor: ColorChangeHandler;
}

function ColorPicker(props: ColorPickerProps) {
  return (
    <SketchPicker
      color={props.selectedColor}
      onChangeComplete={props.setSelectedColor}
    />
  );
}

export default ColorPicker;
