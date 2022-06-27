import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import {
  Container,
  Logout,
  LogoutText,
  NewLink,
  NewText,
  Nome,
} from "./styles";

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Nome>{user?.nome}</Nome>

      <NewLink onPress={() => navigation.navigate("Registrar")}>
        <NewText>Registrar gastos</NewText>
      </NewLink>

      <Logout onPress={signOut}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}
