import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
      <Text>{ user?.nome }</Text>
    </View>
  )
}

