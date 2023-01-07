import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Login from './screens/login';
import Home from './screens/home'
import Register from './screens/register';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: 'Sign In'}}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} options={{title: 'Sign Up'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};

export default App;
