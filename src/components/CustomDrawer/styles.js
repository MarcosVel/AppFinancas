import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const Welcome = styled.Text`
  font-size: 17px;
  margin-top: 8px;
  color: ${COLORS.placeholder};
`;

export const Name = styled.Text`
  font-size: 22px;
  color: ${COLORS.white};
  font-weight: bold;
  margin-bottom: 16px;
`;
