import React from 'react';
import {View} from 'react-native';
import {useAuth} from './context/auth';
import {PaymentProvider} from './context/payment';
import {PaymentOptions} from './payment-options';

export const PaymentForm = () => {
  const {userId} = useAuth();

  if (userId === undefined) {
    return <View />;
  }

  return (
    <PaymentProvider>
      <PaymentOptions />
    </PaymentProvider>
  );
};
