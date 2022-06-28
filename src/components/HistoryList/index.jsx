import { Feather } from "@expo/vector-icons";
import { Container, Transaction, Type, TypeText, Value } from "./styles";

const HistoryList = ({ data }) => {
  return (
    <Container>
      <Transaction>
        <Type type={data.tipo}>
          <Feather
            name={data.tipo === "despesa" ? "arrow-down" : "arrow-up"}
            size={20}
            color="white"
          />
          <TypeText>{data.tipo}</TypeText>
        </Type>
      </Transaction>
      <Value>€ {data.valor}</Value>
    </Container>
  );
};

export default HistoryList;
