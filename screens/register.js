import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {Input, FormControl, Stack, Pressable, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);
const phoneRegExpID = /^(^08)(\d{8,10})$/;
const SchemaValidation = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExpID, 'Invalid phone number')
        .required('Required'),
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
    const [show, setShow] = React.useState(false);
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
                        validationSchema={SchemaValidation}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            errors,
                            values,
                        }) => (
                            <FormControl isRequired>
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
                                                        // style={styles.iconPassword}
                                                        color="muted.400"
                                                    />
                                                </Pressable>
                                            }
                                            onChangeText={handleChange(
                                                'password',
                                            )}
                                            onBlur={handleBlur('password')}
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
                                        <Button style={{width: '90%'}}>
                                            Sign Up
                                        </Button>
                                    </View>
                                    <View style={styles.textSignIn}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate('Login')
                                            }>
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
