import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    Input,
    FormControl,
    Stack,
    Pressable,
    Button,
    Alert,
    Text,
    HStack,
    IconButton,
    Box,
    VStack,
    CloseIcon,
    Collapse,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {useDispatch} from 'react-redux';
import {register as registerAction} from '../src/redux/reducers/auth';
import http from '../src/helpers/http';
import jwt_decode from 'jwt-decode';

YupPassword(Yup);
const SchemaValidation = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phoneNumber: Yup.string().required('Phone Number required'),
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

const Register = ({navigation}) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const [alertError, setAlertError] = React.useState(false);
    const [alertSuccess, setAlertSuccess] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [click, setClick] = React.useState(true);
    const dispatch = useDispatch();
    const RegisterProcess = async value => {
        try {
            const response = await http().post('/auth/register', value);
            console.log('success');
            setAlertSuccess(true);
            // setTimeout(() => {
            //     setAlertSuccess(true);
            // }, 3000);
            const token = response?.data?.results?.token;
            const decode = jwt_decode(token);
            dispatch(registerAction({token}));
        } catch (error) {
            setErrorMessage(error?.response?.data?.message);
            setAlertError(true);
            setTimeout(() => {
                setAlertError(false);
                setClick(true);
            }, 3000);
            console.log(error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../src/images/logo.png')}
                    style={{width: 100, height: 40}}
                />
                <Text style={styles.textFirst}>Sign Up</Text>
                <Text style={styles.descForms}>
                    Fill your additional details
                </Text>
                <View style={styles.descForms}>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: '',
                            password: '',
                        }}
                        validationSchema={SchemaValidation}
                        onSubmit={RegisterProcess}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            errors,
                            values,
                        }) => (
                            <FormControl
                                isRequired
                                onChange={() => setAlertError(false)}>
                                {alertSuccess ? (
                                    <Button>Success</Button>
                                ) : (
                                    false
                                )}
                                {alertError ? (
                                    <Collapse isOpen={click}>
                                        <Alert maxW="300" status="error">
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
                                                            {/* {errorMessage} */}
                                                            Email already
                                                            registered
                                                        </Text>
                                                    </HStack>
                                                </HStack>
                                            </VStack>
                                        </Alert>
                                    </Collapse>
                                ) : (
                                    false
                                )}

                                <Stack>
                                    <View>
                                        <FormControl.Label>
                                            First Name
                                        </FormControl.Label>
                                    </View>
                                    <View style={styles.inputComponent}>
                                        <Input
                                            w={{
                                                base: '90%',
                                                md: '25%',
                                            }}
                                            onChangeText={handleChange(
                                                'firstName',
                                            )}
                                            onBlur={handleBlur('firstName')}
                                            value={values.firstName}
                                            placeholder="Input your First Name"
                                        />
                                    </View>
                                    {errors.firstName && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.firstName}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                    <View style={styles.inputComponent}>
                                        <FormControl.Label>
                                            Last Name
                                        </FormControl.Label>
                                    </View>
                                    <View style={styles.inputComponent}>
                                        <Input
                                            w={{
                                                base: '90%',
                                                md: '25%',
                                            }}
                                            onChangeText={handleChange(
                                                'lastName',
                                            )}
                                            onBlur={handleBlur('lastName')}
                                            value={values.lastName}
                                            placeholder="Input your Last Name"
                                        />
                                    </View>
                                    {errors.lastName && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.lastName}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                    <View style={styles.inputComponent}>
                                        <FormControl.Label>
                                            Phone Number
                                        </FormControl.Label>
                                    </View>
                                    <View style={styles.inputComponent}>
                                        <Input
                                            w={{
                                                base: '90%',
                                                md: '25%',
                                            }}
                                            onChangeText={handleChange(
                                                'phoneNumber',
                                            )}
                                            onBlur={handleBlur('phoneNumber')}
                                            value={values.phoneNumber}
                                            placeholder="Input your Phone Number"
                                        />
                                    </View>
                                    {errors.phoneNumber && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.phoneNumber}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                    <View style={styles.inputComponent}>
                                        <FormControl.Label>
                                            Email
                                        </FormControl.Label>
                                    </View>
                                    <View style={styles.inputComponent}>
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
                                    <View style={styles.inputComponent}>
                                        <FormControl.Label>
                                            Password
                                        </FormControl.Label>
                                    </View>
                                    <View style={styles.inputComponent}>
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
                                    <View style={styles.inputComponent}>
                                        <Button
                                            style={{width: '90%'}}
                                            onPress={handleSubmit}>
                                            Sign Up
                                        </Button>
                                    </View>
                                    <View style={styles.textSignIn}>
                                        <TouchableOpacity>
                                            <Text>
                                                Already have account ?{' '}
                                                <Text style={styles.signIn}>
                                                    Sign In
                                                </Text>
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Stack>
                            </FormControl>
                        )}
                    </Formik>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginTop: 10,
        marginLeft: 20,
    },
    textFirst: {
        marginLeft: 7,
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10,
    },
    descForms: {
        marginLeft: 7,
        marginTop: 5,
    },
    inputComponent: {
        marginTop: 5,
    },
    textSignIn: {
        marginHorizontal: 50,
        marginTop: 15,
        marginBottom: 20,
    },
    signIn: {
        textDecorationStyle: 'underline',
        textDecorationStyleColor: 'red',
    },
});

export default Register;
