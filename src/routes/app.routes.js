import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../../styles';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={ {
        drawerStyle: {
          backgroundColor: `${ COLORS.black }`,
        },
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: `${ COLORS.white }`,
        drawerActiveBackgroundColor: `${ COLORS.green }`,
        drawerInactiveTintColor: `${ COLORS.placeholder }`,
        drawerInactiveBackgroundColor: `${ COLORS.black }`,
        drawerItemStyle: {
          marginVertical: 5
        }
      } }
    >
      <AppDrawer.Screen name='Home' component={ Home }
      // options={ { headerShown: false } } 
      />
      <AppDrawer.Screen name='Registrar' component={ New }
      // options={ { headerShown: false } } 
      />
      <AppDrawer.Screen name='Perfil' component={ Profile }
      options={ { headerShown: false } } 
      />
    </AppDrawer.Navigator>
  )
}

export default AppRoutes;