import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {View} from 'react-native';

type AuthContextData = {
  userId: string | undefined;
};

interface AuthContextMethods {
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext({} as AuthContextData & AuthContextMethods);

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
  const [userId, setUserId] = useState<string | undefined>(undefined);

  const signIn = async () => {
    setUserId('123');
  };
  const signOut = () => {
    setUserId(undefined);
  };

  const value = {
    userId,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      <View style={{backgroundColor: 'red', padding: 8}}>{children}</View>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export const useSignedInUser = () => {
  const {userId} = useAuth();
  if (userId === undefined) {
    throw new Error(
      'useSignedInUser must be used within an authenticated scope',
    );
  }
  return userId;
};

export {AuthProvider};
