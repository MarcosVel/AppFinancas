import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';
import 'react-native-gesture-handler';

import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='transparent' barStyle='light-content' translucent />
      <Routes />
    </NavigationContainer>
  );
}
