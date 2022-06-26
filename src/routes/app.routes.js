import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../../styles";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
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
