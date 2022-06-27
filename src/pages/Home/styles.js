import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Container = styled.View`
  background-color: ${COLORS.blackSeven};
  padding: 0 16px;
`;

export const Header = styled.KeyboardAvoidingView``;

export const Name = styled.Text`
  font-size: 18px;
  color: ${COLORS.white};
`;

export const Saldo = styled.Text`
  color: ${COLORS.white};
  font-size: 32px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  color: ${COLORS.green};
  margin-bottom: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 80 },
})``;
