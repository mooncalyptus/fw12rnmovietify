import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Login from './login';
import Home from './home';
import Register from './register';
import ForgotPassword from './forgotPassword';
import SetPassword from './setPassword';
import ViewAll from './viewAll';
import MovieDetails from './movieDetails';
import OrderPage from './orderPage';
import PaymentPage from './paymentPage';
import Profile from './profile';
import OrderHistory from './orderHistory';
import TicketResult from './ticketResult';
import Navbar from './navbar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Main = () => {
    const token = useSelector(state => state.auth.token);
    return (
        <>
            <NativeBaseProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        {!token && (
                            <>
                                <Stack.Screen
                                    name="Login"
                                    component={Login}
                                    options={{title: 'Sign In'}}
                                />
                                <Stack.Screen
                                    name="Register"
                                    component={Register}
                                    options={{title: 'Sign Up'}}
                                />
                                <Stack.Screen
                                    name="SetPassword"
                                    component={SetPassword}
                                    options={{title: 'Reset Password'}}
                                />
                            </>
                        )}
                        {token && (
                            <>
                                <Stack.Screen name="Home" component={Home} />
                                <Stack.Screen
                                    name="Profile"
                                    component={Profile}
                                    options={{title: 'Details Account'}}
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
                            </>
                        )}
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPassword}
                            options={{title: 'Forgot Password'}}
                        />
                        <Stack.Screen
                            name="Navbar"
                            component={Navbar}
                            options={{headerShown: false}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </>
    );
};

export default Main;
