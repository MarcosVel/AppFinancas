import { format } from "date-fns";
import { useContext, useState } from "react";
import { Keyboard, ToastAndroid } from "react-native";
import PickerSelect from "../../components/PickerSelect";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../services/firebaseConnection";
import { AddButton, Inputs, InputValue, TextButton } from "./styles";

const NewTransaction = () => {
  const { user: usuario } = useContext(AuthContext);
  const [valor, setValor] = useState("");
  const [type, setType] = useState("despesa");

  async function handleSubmit() {
    Keyboard.dismiss();

    if (parseFloat(valor) === 0) {
      return ToastAndroid.show(
        "Insira um valor maior que 0",
        ToastAndroid.SHORT
      );
    }

    // isNaN check if its number
    if (isNaN(parseFloat(valor)) || type === null) {
      return ToastAndroid.show("Complete os campos", ToastAndroid.SHORT);
    }

    try {
      let uid = usuario.uid;

      let key = await firebase.database().ref("historico").child(uid).push()
        .key;
      await firebase
        .database()
        .ref("historico")
        .child(uid)
        .child(key)
        .set({
          tipo: type,
          valor: parseFloat(valor),
          date: format(new Date(), "dd/MM/yy"),
        });

      // Update saldo
      let user = firebase.database().ref("users").child(uid);
      await user.once("value").then(snapshot => {
        let saldo = parseFloat(snapshot.val().saldo);

        type === "despesa"
          ? (saldo -= parseFloat(valor))
          : (saldo += parseFloat(valor));

        user.child("saldo").set(saldo);
      });

      ToastAndroid.show(`${type} de € ${valor} adicionada`, ToastAndroid.SHORT);
      setValor("");
    } catch (err) {
      ToastAndroid.show("Ocorreu um erro ☹️", ToastAndroid.SHORT);
      console.log(err);
    }
  }

  return (
    <>
      <Inputs>
        <InputValue
          placeholder="€ 00.00"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => Keyboard.dismiss()}
          value={valor}
          onChangeText={text => setValor(text)}
        />

        <PickerSelect onChange={setType} type={type} />
      </Inputs>

      <AddButton onPress={handleSubmit}>
        <TextButton>Adicionar</TextButton>
      </AddButton>
    </>
  );
};

export default NewTransaction;
