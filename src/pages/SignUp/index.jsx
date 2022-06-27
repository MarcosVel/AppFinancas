import { useContext, useState } from "react";
import { ActivityIndicator, Keyboard, Platform } from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
  TouchableWithoutFeedback,
} from "../SignIn/styles";

export default function SignUp() {
  const { signUp, loadingReq } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
          <AreaInput>
            <Input
              placeholder="Nome"
              autoCorrect={false}
              value={nome}
              onChangeText={text => setNome(text)}
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none" // não começar com maiúscula
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </AreaInput>

          <AreaInput>
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </AreaInput>

          <SubmitButton onPress={handleSignUp}>
            {loadingReq ? (
              <ActivityIndicator size={24} color="#fff" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )}
          </SubmitButton>
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}
