import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Input, FormControl, Stack, Pressable, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SetPassword = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/images/logo.png')}
        style={{width: 100, height: 40}}
      />
      <Text style={styles.desc}>Set Password</Text>
      <Text style={styles.desc}>Set your new password</Text>
      <View style={styles.desc}>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <View style={styles.inputComponent}>
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
              placeholder="Write your Password"
            />
          </View>
          <View style={styles.inputComponent}>
            <FormControl.Label>Confirm New Password</FormControl.Label>
          </View>
          <View style={styles.inputComponent}>
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
              placeholder="Write your New Password"
            />
          </View>
          <View style={styles.buttonComponent}>
            <Button
              style={{width: '90%'}}
              onPress={() => navigation.navigate('Login')}>
              Submit
            </Button>
          </View>
        </FormControl>
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
  iconPassword: {
    paddingRight: 5,
  },
});

export default SetPassword;
