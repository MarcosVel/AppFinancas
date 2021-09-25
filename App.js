import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
