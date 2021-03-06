import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Empty = styled.Text`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  margin-top: 64px;
  color: ${COLORS.white};
`;

export const Container = styled.View`
  flex: 1;
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

export const Area = styled.View`
  /* margin-top: 8px; */
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.Text`
  color: ${COLORS.green};
  margin-bottom: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 80,
    flexDirection: "column-reverse",
  },
})``;
