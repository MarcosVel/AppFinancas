import { ActivityIndicator } from "react-native";
import { COLORS } from "../../../styles";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={COLORS.green} />
    </Container>
  );
};

export default Loading;
