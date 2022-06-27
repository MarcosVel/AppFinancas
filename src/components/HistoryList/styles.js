import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Container = styled.View`
  padding: 16px 16px 8px;
  background-color: ${COLORS.blackFive};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Transaction = styled.View`
  flex-direction: row;
`;

export const Type = styled.View`
  flex-direction: row;
  padding: 8px;
  background-color: ${props =>
    props.type === "despesa" ? COLORS.red : COLORS.green};
  border-radius: 8px;
  align-items: center;
`;

export const TypeText = styled.Text`
  color: ${COLORS.white};
  font-size: 16px;
  margin-left: 8px;
`;

export const Value = styled.Text`
  color: ${COLORS.white};
  font-size: 22px;
  font-weight: bold;
`;
