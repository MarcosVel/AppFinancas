import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, Text, TouchableOpacity } from "react-native";
import { Container, Header } from "./styles";

function DatePicker({ date, onClose, onChangeDate }) {
  return (
    <Container>
      {Platform.OS === "ios" && (
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, date) => {
          const currentDate = date;

          onChangeDate(currentDate);
        }}
        style={{ backgroundColor: "white" }}
      />
    </Container>
  );
}

export default DatePicker;
