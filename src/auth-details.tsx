import React from 'react';
import {useAuth} from './context/auth';
import {Text, View} from 'react-native';

export const AuthDetails = () => {
  const {userId} = useAuth();

  return (
    <View>
      <Text>AuthDetails: {userId}</Text>
    </View>
  );
};
