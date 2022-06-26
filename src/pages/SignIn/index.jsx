import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { ActivityIndicator, Keyboard, Platform } from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
  AreaInput,
  Background,
  Container,
  Input,
  Link,
  LinkText,
  Logo,
  SubmitButton,
  SubmitText,
  TouchableWithoutFeedback,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingReq } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
          <Logo source={require("../../assets/Logo.png")} />

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

          <SubmitButton onPress={handleLogin}>
            {loadingReq ? (
              <ActivityIndicator size={24} color="#fff" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )}
          </SubmitButton>

          <Link onPress={() => navigation.navigate("SignUp")}>
            <LinkText>Criar uma conta</LinkText>
          </Link>
        </Container>
      </Background>
    </TouchableWithoutFeedback>
  );
}
