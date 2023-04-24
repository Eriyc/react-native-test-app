import React, {FC} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

import {TEST_VALUE} from '@env';
import {AuthProvider} from './context/auth';
import {AuthForm} from './auth-form';
import {AuthDetails} from './auth-details';
import {PaymentForm} from './payment-form';

type Props = {};
const Component: FC<Props> = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text>Test App</Text>
        <Text>TEST_VALUE: {TEST_VALUE}</Text>
      </View>
      <AuthProvider>
        <AuthForm />
        <AuthDetails />
        <PaymentForm />
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default Component;
