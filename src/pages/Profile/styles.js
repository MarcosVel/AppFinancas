import styled from 'styled-components/native';
import { COLORS } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${ COLORS.blackSeven };
  align-items: center;
`;

export const Nome = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-top: 35px;
  margin-bottom: 25px;
  color: ${ COLORS.white };
`;

export const NewLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${ COLORS.green };
  width: 90%;
  height: 45px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  color: ${ COLORS.white };
  font-weight: bold;
`;

export const Logout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${ COLORS.red };
  width: 90%;
  height: 45px;
  border-radius: 8px;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  color: ${ COLORS.white };
  font-weight: bold;
`;
