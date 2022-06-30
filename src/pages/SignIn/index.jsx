import { useNavigation } from "@react-navigation/native";
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
  Link,
  LinkText,
  Logo,
  PasswordInput,
  SubmitButton,
  SubmitText,
  TouchableWithoutFeedback,
} from "./styles";
import { Feather } from "@expo/vector-icons";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingReq } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  function handleLogin() {
    signIn(email, password);
  }

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

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
