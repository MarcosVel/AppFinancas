import React, { useContext } from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { AuthContext } from '../contexts/auth';
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../../styles';

function Routes() {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
        <ActivityIndicator size="large" color={ COLORS.green } />
      </View>
    )
  }

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}

export default Routes;