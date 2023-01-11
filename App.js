import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Login from './screens/login';
import Home from './screens/home';
import Register from './screens/register';
import ForgotPassword from './screens/forgotPassword';
import SetPassword from './screens/setPassword';
import ViewAll from './screens/viewAll';
import MovieDetails from './screens/movieDetails';
import OrderPage from './screens/orderPage';
import PaymentPage from './screens/paymentPage';
import Profile from './screens/profile';
import OrderHistory from './screens/orderHistory';
import TicketResult from './screens/ticketResult';
import Navbar from './screens/navbar';
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
                        <Stack.Screen
                            name="Register"
                            component={Register}
                            options={{title: 'Sign Up'}}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPassword}
                            options={{title: 'Forgot Password'}}
                        />
                        <Stack.Screen
                            name="SetPassword"
                            component={SetPassword}
                            options={{title: 'Reset Password'}}
                        />
                        <Stack.Screen
                            name="ViewAll"
                            component={ViewAll}
                            options={{title: 'View All Movies'}}
                        />
                        <Stack.Screen
                            name="MovieDetails"
                            component={MovieDetails}
                            options={{title: 'Movie Details'}}
                        />
                        <Stack.Screen
                            name="OrderPage"
                            component={OrderPage}
                            options={{title: 'Order Page'}}
                        />
                        <Stack.Screen
                            name="PaymentPage"
                            component={PaymentPage}
                            options={{title: 'Payment Page'}}
                        />
                        <Stack.Screen
                            name="OrderHistory"
                            component={OrderHistory}
                            options={{title: 'Order History'}}
                        />
                        <Stack.Screen
                            name="TicketResult"
                            component={TicketResult}
                            options={{title: 'Ticket Result'}}
                        />
                        <Stack.Screen
                            name="Navbar"
                            component={Navbar}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Profile"
                            component={Profile}
                            options={{title: 'Details Account'}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </>
    );
};

export default App;
