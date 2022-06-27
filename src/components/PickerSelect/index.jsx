import { PickerView, SelectPicker } from "./styles";

const PickerSelect = ({ onChange, type }) => {
  return (
    <PickerView>
      <SelectPicker
        dropdownIconColor="#fff"
        dropdownIconRippleColor="#606060" // background color of dropdown down icon on click
        selectedValue={type}
        onValueChange={valor => onChange(valor)}
      >
        <SelectPicker.Item label="Despesa" value="despesa" />
        <SelectPicker.Item label="Receita" value="receita" />
      </SelectPicker>
    </PickerView>
  );
};

export default PickerSelect;
