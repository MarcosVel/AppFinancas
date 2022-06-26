import { useContext, useState } from "react";
import HistoryList from "../../components/HistoryList";
import { AuthContext } from "../../contexts/auth";
import { Container, List, Name, Saldo, Title } from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([
    { key: 1, type: "receita", value: 1200 },
    { key: 2, type: "receita", value: 5500 },
    { key: 3, type: "receita", value: 150 },
    { key: 4, type: "despesa", value: 53.26 },
    { key: 5, type: "receita", value: 150 },
    { key: 6, type: "despesa", value: 53.26 },
    { key: 7, type: "receita", value: 150 },
    { key: 8, type: "despesa", value: 53.26 },
    { key: 9, type: "receita", value: 150 },
    { key: 10, type: "despesa", value: 53.26 },
  ]);

  return (
    <Container>
      <Name>{user?.nome}</Name>
      <Saldo>€ 123,00</Saldo>
      <Title>Últimas movimentações</Title>

      <List
        data={history}
        keyExtrator={item => item.key}
        renderItem={({ item }) => <HistoryList data={item} />}
      />
    </Container>
  );
}
