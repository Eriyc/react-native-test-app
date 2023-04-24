import React, {createContext, FC, PropsWithChildren, useContext} from 'react';
import {useSignedInUser} from './auth';
import {View} from 'react-native';

type PaymentContextData = {
  products: [];
};

interface PaymentContextMethods {
  fetchProducts: () => Promise<void>;
}

const PaymentContext = createContext(
  {} as PaymentContextData & PaymentContextMethods,
);

export const PaymentProvider: FC<PropsWithChildren> = ({children}) => {
  const userId = useSignedInUser();

  return (
    <View style={{backgroundColor: 'orange', padding: 8}}>{children}</View>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
