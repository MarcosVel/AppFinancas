import { useContext } from "react";
import { Button, Text } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { Container, Name, Saldo, Title } from "./styles";

export default function Home() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <Container>
      <Name>{user?.nome}</Name>
      <Saldo>R$ 123,00</Saldo>
      <Title>Últimas movimentações</Title>
      <Button title="Deslogar" onPress={() => signOut()} />
    </Container>
  );
}
