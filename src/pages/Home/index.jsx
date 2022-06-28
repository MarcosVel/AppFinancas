import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import HistoryList from "../../components/HistoryList";
import NewTransaction from "../../components/NewTransaction";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import { Container, Header, List, Name, Saldo, Title } from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [saldo, setSaldo] = useState(0);

  const uid = user?.uid;

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref("users")
        .child(uid)
        .on("value", snapshot => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .orderByChild("date")
        .equalTo(format(new Date(), "dd/MM/yy"))
        .limitToLast(10)
        .on("value", snapshot => {
          setHistory([]);

          snapshot.forEach(childItem => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
            };

            setHistory(oldArray => [...oldArray, list]);
          });
        });
    }

    loadList();
  }, []);

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Header>
          <Name>{user?.nome}</Name>
          <Saldo>€ {saldo.toFixed(2)}</Saldo>

          <NewTransaction />

          <Title>Últimas movimentações</Title>
        </Header>
      </TouchableWithoutFeedback>
      <List
        data={history}
        keyExtrator={item => item.key}
        renderItem={({ item }) => <HistoryList data={item} />}
      />
    </Container>
  );
}
