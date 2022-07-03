import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TouchableOpacity } from "react-native";
import { Container, Header } from "./styles";

function DatePicker({ date, onClose, onChangeDate }) {
  const [dateNow, setDateNow] = useState(new Date(date));

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
        value={dateNow}
        mode="date"
        display="default"
        onChange={(event, date) => {
          const currentDate = date || dateNow;

          setDateNow(currentDate);
          onChangeDate(currentDate);
        }}
        style={{ backgroundColor: "white" }}
      />
    </Container>
  );
}

export default DatePicker;
