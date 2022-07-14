import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../../styles";
import CustomDrawer from "../components/CustomDrawer";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: `${COLORS.white}`,
        headerStyle: {
          backgroundColor: `${COLORS.blackSeven}`,
        },
        drawerStyle: {
          backgroundColor: `${COLORS.black}`,
        },
        drawerLabelStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
        drawerActiveTintColor: `${COLORS.white}`,
        drawerActiveBackgroundColor: `${COLORS.green}`,
        drawerInactiveTintColor: `${COLORS.placeholder}`,
        drawerInactiveBackgroundColor: `${COLORS.black}`,
        drawerItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
        }}
      />
      <AppDrawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerTitle: "",
        }}
      />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
