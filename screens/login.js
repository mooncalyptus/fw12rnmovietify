import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input, FormControl, Stack, Pressable, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.content}>
      <Image
        source={require('../src/images/logo.png')}
        style={{width: 100, height: 40}}
      />
      <Text style={styles.textFirst}>Sign In</Text>
      <Text style={styles.textDesc}>
        Sign in with your data that you entered during your registration
      </Text>
      <View style={styles.forms}>
        <FormControl isRequired>
          <Stack>
            <FormControl.Label>Email</FormControl.Label>
            <View style={styles.firstComponent}>
              <Input
                w={{
                  base: '90%',
                  md: '25%',
                }}
                placeholder="Input your Email"
              />
            </View>
            <View style={styles.secondComponent}>
              <FormControl.Label>Password</FormControl.Label>
            </View>
            <View style={styles.thirdComponent}>
              <Input
                w={{
                  base: '90%',
                  md: '25%',
                }}
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      name={show ? 'visibility' : 'visibility-off'}
                      size={25}
                      mr="2"
                      style={styles.iconPassword}
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Input your Password"
              />
            </View>
            <View style={styles.fourthComponent}>
              <FormControl.HelperText>
                Must be atleast 8 characters.
              </FormControl.HelperText>
            </View>
            <View style={styles.fifthComponent}>
              <Button
                style={{width: '90%'}}
                onPress={() => navigation.navigate('Home')}>
                Submit
              </Button>
            </View>
          </Stack>
        </FormControl>
        <Text style={styles.textForgot}>Forgot your password? Reset now</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
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
