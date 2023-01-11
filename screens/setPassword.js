import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Input, FormControl, Text, Pressable, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);
const SchemaValidation = Yup.object().shape({
    password: Yup.string()
        .password()
        .required('Enter password')
        .min(8, 'Min length 8 characters')
        .minLowercase(1, 'Min lowercase 1')
        .minUppercase(1, 'Min uppercase 1')
        .minSymbols(1, 'Min symbol 1')
        .minNumbers(1, 'Min number 1'),
    passwordConfirmation: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match',
    ),
});
const SetPassword = ({navigation}) => {
    const [show, setShow] = React.useState(false);
    return (
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
                    initialValues={{password: '', passwordConfirmation: ''}}
                    validationSchema={SchemaValidation}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        values,
                    }) => (
                        <FormControl isInvalid>
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
                                        'passwordConfirmation',
                                    )}
                                    onBlur={handleBlur('passwordConfirmation')}
                                    placeholder="Confirm your New Password"
                                />
                            </View>
                            {errors.passwordConfirmation && (
                                <View style={styles.fourthComponent}>
                                    <FormControl.HelperText>
                                        {errors.passwordConfirmation}
                                    </FormControl.HelperText>
                                </View>
                            )}
                            <View style={styles.buttonComponent}>
                                <Button
                                    style={{width: '90%'}}
                                    onPress={() =>
                                        navigation.navigate('Login')
                                    }>
                                    Submit
                                </Button>
                            </View>
                        </FormControl>
                    )}
                </Formik>
            </View>
        </View>
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
