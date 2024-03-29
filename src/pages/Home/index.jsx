import { MaterialIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import DatePicker from "../../components/DatePicker";
import HistoryList from "../../components/HistoryList";
import Loading from "../../components/Loading";
import NewTransaction from "../../components/NewTransaction";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import {
  Area,
  Container,
  Empty,
  Header,
  List,
  Name,
  Saldo,
  Title,
} from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [newDate, setNewDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const uid = user?.uid;

  useEffect(() => {
    function loadList() {
      try {
        firebase
          .database()
          .ref("users")
          .child(uid)
          .on("value", snapshot => {
            setSaldo(snapshot.val().saldo);
          });

        firebase
          .database()
          .ref("historico")
          .child(uid)
          .orderByChild("date")
          .equalTo(format(newDate, "dd/MM/yyyy"))
          // .limitToLast(10)
          .on("value", snapshot => {
            setLoading(false);
            setHistory([]);

            snapshot.forEach(childItem => {
              let list = {
                key: childItem.key,
                tipo: childItem.val().tipo,
                valor: childItem.val().valor,
                date: childItem.val().date,
                hour: childItem.val().hour,
              };

              setHistory(oldArray => [...oldArray, list]);
            });
          });
      } catch (e) {
        setLoading(false);
        ToastAndroid.show("Erro ao carregar transações", ToastAndroid.SHORT);
        console.log(e);
      }
    }

    loadList();
  }, [newDate]);

  const HandleEmpty = () => {
    return <Empty>"Boas memórias não tem preço!"</Empty>;
  };

  function handleDelete(data) {
    Alert.alert(
      "Atenção",
      `Deseja excluir a ${data.tipo} no valor de €${data.valor}`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => handleDeleteItem(data) },
      ]
    );
  }

  async function handleDeleteItem(data) {
    await firebase
      .database()
      .ref("historico")
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let saldoAtual = saldo;

        data.tipo === "despesa"
          ? (saldoAtual += parseFloat(data.valor))
          : (saldoAtual -= parseFloat(data.valor));

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .child("saldo")
          .set(saldoAtual);
      })
      .catch(err => {
        ToastAndroid.show("Erro ao atualizar saldo", ToastAndroid.SHORT);
        console.log(err);
      });
  }

  function handleShowPicker() {
    setShowPicker(true);
  }

  function onChangeDatePicker(date) {
    setShowPicker(Platform.OS === "ios");
    setNewDate(date);
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Header>
          <Name>{user?.nome}</Name>
          <Saldo>€ {saldo.toFixed(2)}</Saldo>

          <NewTransaction />

          <Area>
            <Title>Últimas movimentações</Title>
            <TouchableOpacity onPress={handleShowPicker}>
              <MaterialIcons name="date-range" size={24} color="white" />
            </TouchableOpacity>
          </Area>
        </Header>
      </TouchableWithoutFeedback>

      {loading ? (
        <Loading />
      ) : (
        <List
          data={history}
          ListEmptyComponent={HandleEmpty}
          keyExtrator={item => item.key}
          renderItem={({ item }) => (
            <HistoryList data={item} deleteItem={handleDelete} />
          )}
        />
      )}

      {showPicker && (
        <DatePicker
          date={newDate}
          onClose={() => setShowPicker(false)}
          onChangeDate={onChangeDatePicker}
        />
      )}
    </Container>
  );
}
