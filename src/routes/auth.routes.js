import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { COLORS } from '../../styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={ SignIn }
        options={ { headerShown: false } }
      />
      <AuthStack.Screen
        name="SignUp"
        component={ SignUp }
        options={ {
          headerStyle: {
            backgroundColor: `${ COLORS.black }`,
            borderBottomWidth: 1,
            borderBottomColor: `${ COLORS.green }`,
          },
          headerTintColor: `${ COLORS.white }`,
          headerBackTitleVisible: false, // aparece nome do componente anterior
          headerTitle: 'Voltar'
        } }
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;