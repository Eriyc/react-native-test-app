import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {useAuth} from './context/auth';

export const AuthForm: FC = () => {
  const {userId, signIn, signOut} = useAuth();

  return (
    <View>
      {userId === undefined ? (
        <Button title="Sign In" onPress={signIn} />
      ) : (
        <Button title="Sign Out" onPress={signOut} />
      )}
    </View>
  );
};
