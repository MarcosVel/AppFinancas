import { useContext, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import HistoryList from "../../components/HistoryList";
import NewTransaction from "../../components/NewTransaction";
import { AuthContext } from "../../contexts/auth";
import { Container, Header, List, Name, Saldo, Title } from "./styles";

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

  const FlatList_Header = () => {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Header>
          <Name>{user?.nome}</Name>
          <Saldo>€ 123,00</Saldo>

          <NewTransaction />

          <Title>Últimas movimentações</Title>
        </Header>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Container>
      <List
        data={history}
        keyExtrator={item => item.key}
        ListHeaderComponent={FlatList_Header}
        renderItem={({ item }) => <HistoryList data={item} />}
      />
    </Container>
  );
}
