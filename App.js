import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Login from './src/components/login';

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <Login />
      </NativeBaseProvider>
    </>
  );
};

export default App;
