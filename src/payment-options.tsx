import {usePayment} from './context/payment';
import {View, Text} from 'react-native';
import React from 'react';

export const PaymentOptions = () => {
  const {products} = usePayment();

  return (
    <View>
      <Text>PaymentOptions</Text>
    </View>
  );
};
