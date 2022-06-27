import { useState } from "react";
import { Keyboard } from "react-native";
import { AddButton, InputValue, TextButton } from "./styles";

const NewTransaction = () => {
  const [valor, setValor] = useState(0);
  const [type, setType] = useState(null);

  return (
    <>
      <InputValue
        placeholder="€ 00.00"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => Keyboard.dismiss()}
        value={valor}
        onChangeText={text => setValor(text)}
      />

      <AddButton>
        <TextButton>Adicionar</TextButton>
      </AddButton>
    </>
  );
};

export default NewTransaction;
