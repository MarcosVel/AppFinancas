import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Keyboard, ToastAndroid, TouchableWithoutFeedback } from "react-native";
import HistoryList from "../../components/HistoryList";
import Loading from "../../components/Loading";
import NewTransaction from "../../components/NewTransaction";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import { Container, Empty, Header, List, Name, Saldo, Title } from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [loading, setLoading] = useState(true);

  const uid = user?.uid;

  useEffect(() => {
    async function loadList() {
      try {
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
            setLoading(false);
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
      } catch (e) {
        ToastAndroid.show("Erro ao carregar transações", ToastAndroid.SHORT);
        console.log(e);
      }
    }

    loadList();
  }, []);

  const HandleEmpty = () => {
    return <Empty>"Boas memórias não tem preço!"</Empty>;
  };

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

      {loading ? (
        <Loading />
      ) : (
        <List
          data={history}
          ListEmptyComponent={HandleEmpty}
          keyExtrator={item => item.key}
          renderItem={({ item }) => <HistoryList data={item} />}
        />
      )}
    </Container>
  );
}
