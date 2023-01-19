import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
    Input,
    FormControl,
    Stack,
    Pressable,
    Button,
    ScrollView,
    Alert,
    HStack,
    VStack,
    IconButton,
    CloseIcon,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {useDispatch} from 'react-redux';
import {login as loginAction} from '../src/redux/reducers/auth';
import jwt_decode from 'jwt-decode';
import http from '../src/helpers/http';

YupPassword(Yup);
const loginSchemaValidation = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email address is Required'),
    password: Yup.string()
        .password()
        .required('Enter password')
        .min(8, 'Min length 8 characters')
        .minLowercase(1, 'Min lowercase 1')
        .minUppercase(1, 'Min uppercase 1')
        .minSymbols(1, 'Min symbol 1')
        .minNumbers(1, 'Min number 1'),
});

const Login = ({navigation}) => {
    const [show, setShow] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [alertError, setAlertError] = React.useState(false);
    const [alertSuccess, setAlertSuccess] = React.useState(false);
    const [click, setClick] = React.useState(true);
    const dispatch = useDispatch();
    const LoginProcess = async value => {
        try {
            const response = await http().post('/auth/login', value);
            const token = response?.data?.results?.token;
            const decode = jwt_decode(token);
            dispatch(loginAction({token}));
            setTimeout(() => {
                setAlertSuccess(true);
            }, 3000);
        } catch (error) {
            setErrorMessage(error?.response?.data?.message);
            setAlertError(true);
            console.log(error);
        }
    };
    return (
        <ScrollView>
            <View style={styles.content}>
                <Image
                    source={require('../src/images/logo.png')}
                    style={{width: 100, height: 40}}
                />
                <Text style={styles.textFirst}>Sign In</Text>
                <Text style={styles.textDesc}>
                    Sign in with your data that you entered during your
                    registration
                </Text>
                <View style={styles.forms}>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={loginSchemaValidation}
                        onSubmit={LoginProcess}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            errors,
                            values,
                        }) => (
                            <FormControl
                                isInvalid
                                onChange={() => setAlertError(false)}>
                                {alertError ? (
                                    <Alert maxW="400" status="error">
                                        <VStack
                                            space={1}
                                            flexShrink={1}
                                            w="100%">
                                            <HStack
                                                flexShrink={1}
                                                space={2}
                                                alignItems="center"
                                                justifyContent="space-between">
                                                <HStack
                                                    flexShrink={1}
                                                    space={2}
                                                    alignItems="center">
                                                    <Alert.Icon />
                                                    <Text
                                                        fontSize="md"
                                                        fontWeight="medium"
                                                        _dark={{
                                                            color: 'coolGray.800',
                                                        }}>
                                                        {errorMessage}
                                                    </Text>
                                                </HStack>
                                                <IconButton
                                                    variant="unstyled"
                                                    _focus={{
                                                        borderWidth: 0,
                                                    }}
                                                    icon={
                                                        <CloseIcon size="3" />
                                                    }
                                                    _icon={{
                                                        color: 'coolGray.600',
                                                    }}
                                                    onPress={() =>
                                                        setClick(false)
                                                    }
                                                />
                                            </HStack>
                                        </VStack>
                                    </Alert>
                                ) : (
                                    false
                                )}

                                {alertSuccess ? (
                                    <Alert w="100%" status="success">
                                        <VStack
                                            space={2}
                                            flexShrink={1}
                                            w="100%">
                                            <HStack
                                                flexShrink={1}
                                                space={1}
                                                alignItems="center"
                                                justifyContent="space-between">
                                                <HStack
                                                    space={2}
                                                    flexShrink={1}
                                                    alignItems="center">
                                                    <Alert.Icon />
                                                    <Text
                                                        fontSize="md"
                                                        fontWeight="medium"
                                                        _dark={{
                                                            color: 'coolGray.800',
                                                        }}>
                                                        Register Successfully
                                                    </Text>
                                                </HStack>
                                                <IconButton
                                                    variant="unstyled"
                                                    _focus={{
                                                        borderWidth: 0,
                                                    }}
                                                    icon={
                                                        <CloseIcon size="3" />
                                                    }
                                                    _icon={{
                                                        color: 'coolGray.600',
                                                    }}
                                                />
                                            </HStack>
                                        </VStack>
                                    </Alert>
                                ) : (
                                    false
                                )}
                                <Stack>
                                    <FormControl.Label>Email</FormControl.Label>
                                    <View style={styles.firstComponent}>
                                        <Input
                                            w={{
                                                base: '90%',
                                                md: '25%',
                                            }}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            placeholder="Input your Email"
                                        />
                                    </View>
                                    {errors.email && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.email}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                    <View style={styles.secondComponent}>
                                        <FormControl.Label>
                                            Password
                                        </FormControl.Label>
                                    </View>
                                    <View style={styles.thirdComponent}>
                                        <Input
                                            w={{
                                                base: '90%',
                                                md: '25%',
                                            }}
                                            type={show ? 'text' : 'password'}
                                            InputRightElement={
                                                <Pressable
                                                    onPress={() =>
                                                        setShow(!show)
                                                    }>
                                                    <Icon
                                                        name={
                                                            show
                                                                ? 'visibility'
                                                                : 'visibility-off'
                                                        }
                                                        size={25}
                                                        mr="2"
                                                        style={
                                                            styles.iconPassword
                                                        }
                                                        color="muted.400"
                                                    />
                                                </Pressable>
                                            }
                                            onChangeText={handleChange(
                                                'password',
                                            )}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            placeholder="Input your Password"
                                        />
                                    </View>
                                    {errors.password && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.password}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                    <View style={styles.fifthComponent}>
                                        <Button
                                            style={{width: '90%'}}
                                            onPress={handleSubmit}>
                                            Submit
                                        </Button>
                                    </View>
                                </Stack>
                            </FormControl>
                        )}
                    </Formik>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.textForgot}>
                            Forgot your password? Reset now
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textSignUp}>
                            Don’t have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    content: {
        marginLeft: 25,
        marginTop: 55,
    },
    iconPassword: {
        paddingRight: 5,
    },
    textFirst: {
        marginLeft: 5,
        fontSize: 26,
        fontWeight: 'bold',
    },
    textDesc: {
        marginTop: 12,
        marginLeft: 5,
    },
    forms: {
        marginTop: 22,
        marginLeft: 5,
    },
    firstComponent: {
        marginTop: 10,
    },
    secondComponent: {
        marginTop: 10,
    },
    thirdComponent: {
        marginTop: 10,
    },
    fourthComponent: {
        marginTop: 10,
    },
    fifthComponent: {
        marginTop: 10,
    },
    textForgot: {
        marginHorizontal: 35,
        marginTop: 10,
    },
    textSignUp: {
        marginHorizontal: 40,
        marginTop: 10,
    },
});

export default Login;
