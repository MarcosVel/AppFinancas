import { useState } from "react";
import { Keyboard } from "react-native";
import { AddButton, Inputs, InputValue, TextButton } from "./styles";
import PickerSelect from "../../components/PickerSelect";

const NewTransaction = () => {
  const [valor, setValor] = useState(0);
  const [type, setType] = useState("despesa");

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

      <AddButton>
        <TextButton>Adicionar</TextButton>
      </AddButton>
    </>
  );
};

export default NewTransaction;
