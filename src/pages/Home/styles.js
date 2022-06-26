import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Container = styled.View`
  flex: 1;
  background-color: ${ COLORS.blackSeven };
  padding: 0 16px 24px;
`;

export const Name = styled.Text`
  font-size: 18px;
  color: ${COLORS.white};
`;

export const Saldo = styled.Text`
  margin-top: 8px;
  font-size: 32px;
  color: ${COLORS.white};
  font-weight: bold;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  color: ${COLORS.green};
  margin-bottom: 12px;
`;
