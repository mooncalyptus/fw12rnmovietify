import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
    Input,
    FormControl,
    Text,
    Pressable,
    Button,
    ScrollView,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import {useNavigation} from '@react-navigation/native';
import http from '../src/helpers/http';

YupPassword(Yup);
const SchemaValidation = Yup.object().shape({
    code: Yup.string().required('Reset Password Code is Required'),
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
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
    ),
});
const SetPassword = () => {
    const navigation = useNavigation();
    const [show, setShow] = React.useState(false);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [ErrorMessage, setErrorMessage] = React.useState('');

    const SendResetPassword = async values => {
        try {
            if (values.password === values.confirmPassword) {
                const response = await http().post(
                    '/auth/resetPassword',
                    values,
                );
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 3000);
                console.log(response);
                // setSuccessMessage(response?.data?.message);
            } else {
                // setErrorMessage("Confirm Password doesn't match");
                console.log("Confirm password doesn't match");
            }
        } catch (error) {
            console.log(error.response);
        }
    };
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={require('../src/images/logo.png')}
                    style={{width: 100, height: 40}}
                />
                <Text fontSize="26px" fontWeight="bold" pl="2">
                    Set Password
                </Text>
                <Text style={styles.desc}>Set your new password</Text>
                <View style={styles.desc}>
                    <Formik
                        initialValues={{
                            code: '',
                            email: '',
                            password: '',
                            confirmPassword: '',
                        }}
                        validationSchema={SchemaValidation}
                        onSubmit={SendResetPassword}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            errors,
                            values,
                        }) => (
                            <FormControl isInvalid>
                                <FormControl.Label>
                                    Reset Password Code
                                </FormControl.Label>
                                <View style={styles.inputComponent}>
                                    <Input
                                        w={{
                                            base: '90%',
                                            md: '25%',
                                        }}
                                        onChangeText={handleChange('code')}
                                        onBlur={handleBlur('code')}
                                        value={values.code}
                                        // onChange={event =>
                                        //     setEmail(event.target.values)
                                        // }
                                        placeholder="Input your Reset Password Code"
                                    />
                                    {errors.code && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.code}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                </View>
                                <FormControl.Label>Email</FormControl.Label>
                                <View style={styles.inputComponent}>
                                    <Input
                                        w={{
                                            base: '90%',
                                            md: '25%',
                                        }}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        // onChange={event =>
                                        //     setEmail(event.target.values)
                                        // }
                                        placeholder="Input your Email"
                                    />
                                    {errors.email && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.email}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                </View>
                                <FormControl.Label>Password</FormControl.Label>
                                <View style={styles.inputComponent}>
                                    <Input
                                        w={{
                                            base: '90%',
                                            md: '25%',
                                        }}
                                        type={show ? 'text' : 'password'}
                                        InputRightElement={
                                            <Pressable
                                                onPress={() => setShow(!show)}>
                                                <Icon
                                                    name={
                                                        show
                                                            ? 'visibility'
                                                            : 'visibility-off'
                                                    }
                                                    size={25}
                                                    mr="2"
                                                    style={styles.iconPassword}
                                                    color="muted.400"
                                                />
                                            </Pressable>
                                        }
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder="Write your Password"
                                    />
                                </View>
                                {errors.password && (
                                    <View style={styles.fourthComponent}>
                                        <FormControl.HelperText>
                                            {errors.password}
                                        </FormControl.HelperText>
                                    </View>
                                )}
                                <FormControl.Label>
                                    Confirm Password
                                </FormControl.Label>
                                <View style={styles.inputComponent}>
                                    <Input
                                        w={{
                                            base: '90%',
                                            md: '25%',
                                        }}
                                        type={show ? 'text' : 'password'}
                                        InputRightElement={
                                            <Pressable
                                                onPress={() => setShow(!show)}>
                                                <Icon
                                                    name={
                                                        show
                                                            ? 'visibility'
                                                            : 'visibility-off'
                                                    }
                                                    size={25}
                                                    mr="2"
                                                    style={styles.iconPassword}
                                                    color="muted.400"
                                                />
                                            </Pressable>
                                        }
                                        onChangeText={handleChange(
                                            'confirmPassword',
                                        )}
                                        onBlur={handleBlur('confirmPassword')}
                                        value={values.confirmPassword}
                                        placeholder="Confirm your New Password"
                                    />
                                </View>
                                {errors.confirmPassword && (
                                    <View style={styles.fourthComponent}>
                                        <FormControl.HelperText>
                                            {errors.confirmPassword}
                                        </FormControl.HelperText>
                                    </View>
                                )}
                                <View style={styles.buttonComponent}>
                                    <Button
                                        style={{width: '90%'}}
                                        onPress={handleSubmit}>
                                        Submit
                                    </Button>
                                </View>
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
        marginTop: 15,
        marginLeft: 10,
    },
    desc: {
        marginLeft: 7,
        marginTop: 5,
    },
    inputComponent: {
        marginTop: 10,
    },
    buttonComponent: {
        marginTop: 15,
    },
    iconPassword: {
        paddingRight: 5,
    },
});

export default SetPassword;
