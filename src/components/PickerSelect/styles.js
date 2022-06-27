import { Picker } from "@react-native-picker/picker";
import styled from "styled-components";
import { COLORS } from "../../../styles";

export const PickerView = styled.View`
  background-color: ${COLORS.blackFive};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 0 8px;
  width: 48%;
`;

export const SelectPicker = styled(Picker)`
  color: ${COLORS.white};
`;
