import { Feather } from "@expo/vector-icons";
import { Container, Transaction, Type, TypeText, Value } from "./styles";

const HistoryList = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Transaction>
        <Type type={data.type}>
          <Feather
            name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
            size={20}
            color="white"
          />
          <TypeText>Receita</TypeText>
        </Type>
      </Transaction>
      <Value>€ {data.value}</Value>
    </Container>
  );
};

export default HistoryList;
