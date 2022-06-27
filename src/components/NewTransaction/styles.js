import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Inputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputValue = styled.TextInput.attrs({
  placeholderTextColor: `${COLORS.placeholder}`,
})`
  height: 54px;
  width: 48%;
  font-size: 22px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${COLORS.blackFive};
  color: ${COLORS.white};
  margin-bottom: 12px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${COLORS.green};
  margin-bottom: 16px;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  color: ${COLORS.white};
`;
