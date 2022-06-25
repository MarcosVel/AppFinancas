import styled from "styled-components";
import { COLORS } from "../../../styles";

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback``;

export const Background = styled.View`
  flex: 1;
  background-color: ${COLORS.black};
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 40px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${COLORS.placeholder}`,
})`
  background: ${COLORS.blackSeven};
  width: 90%;
  font-size: 17px;
  color: ${COLORS.white};
  margin-bottom: 15px;
  padding: 10px 15px;
  border-radius: 8px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.green};
  width: 90%;
  height: 45px;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: ${COLORS.white};
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  color: ${COLORS.white};
  font-size: 16px;
`;
