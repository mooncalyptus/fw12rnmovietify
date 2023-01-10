import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input, FormControl, Stack, Pressable, Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

const SchemaValidation = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email address is Required'),
});

const ForgotPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../src/images/logo.png')}
                style={{width: 100, height: 40}}
            />
            <Text style={styles.desc}>Forgot Password</Text>
            <Text style={styles.desc}>
                we'll send a link to your email shortly
            </Text>
            <View style={styles.desc}>
                <Formik
                    initialValues={{email: ''}}
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
                                <FormControl.Label>Email</FormControl.Label>
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
                                    {errors.email && (
                                        <View style={styles.fourthComponent}>
                                            <FormControl.HelperText>
                                                {errors.email}
                                            </FormControl.HelperText>
                                        </View>
                                    )}
                                </View>
                                <View style={styles.buttonComponent}>
                                    <Button
                                        style={{width: '90%'}}
                                        onPress={() =>
                                            navigation.navigate('SetPassword')
                                        }>
                                        Submit
                                    </Button>
                                </View>
                            </Stack>
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
        marginTop: 5,
    },
    buttonComponent: {
        marginTop: 15,
    },
});

export default ForgotPassword;
