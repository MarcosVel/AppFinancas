import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { Image } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { Container, Name, Welcome } from "./styles";

const CustomDrawer = props => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 85, height: 85 }}
          resizeMode="contain"
        />
        <Welcome>Bem-vindo,</Welcome>
        <Name>{user?.nome}</Name>
      </Container>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label="Sair"
        inactiveBackgroundColor="#c62c36"
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
