import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../contexts/auth";
import {
  AreaInput,
  Background,
  Container,
  Input,
  PasswordInput,
  SubmitButton,
  SubmitText,
  TouchableWithoutFeedback,
} from "../SignIn/styles";

export default function SignUp() {
  const { signUp, loadingReq } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

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

          <PasswordInput>
            <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={handleToggle}>
              {showPassword ? (
                <Feather name="eye" size={24} color="#606061" />
              ) : (
                <Feather name="eye-off" size={24} color="#606061" />
              )}
            </TouchableOpacity>
          </PasswordInput>

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
