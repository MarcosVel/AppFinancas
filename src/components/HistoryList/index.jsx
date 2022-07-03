import { Feather } from "@expo/vector-icons";
import { format } from "date-fns";
import { Container, Time, Transaction, Type, TypeText, Value } from "./styles";

const HistoryList = ({ data, deleteItem }) => {
  return (
    <Container activeOpacity={0.5} onLongPress={() => deleteItem(data)}>
      <Transaction>
        <Type type={data.tipo}>
          <Feather
            name={data.tipo === "despesa" ? "arrow-down" : "arrow-up"}
            size={20}
            color="white"
          />
          <TypeText>{data.tipo}</TypeText>
        </Type>
        <Time>
          {data.date} - {data.hour}
        </Time>
      </Transaction>
      <Value>€ {data.valor}</Value>
    </Container>
  );
};

export default HistoryList;
