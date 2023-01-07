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
        <Text style={styles.descForms}>Fill your additional details</Text>
        <View style={styles.descForms}>
          <FormControl isRequired>
            <Stack>
              <View>
                <FormControl.Label>First Name</FormControl.Label>
              </View>
              <View style={styles.inputComponent}>
                <Input
                  w={{
                    base: '90%',
                    md: '25%',
                  }}
                  placeholder="Input your First Name"
                />
              </View>
              <View style={styles.inputComponent}>
                <FormControl.Label>Last Name</FormControl.Label>
              </View>
              <View style={styles.inputComponent}>
                <Input
                  w={{
                    base: '90%',
                    md: '25%',
                  }}
                  placeholder="Input your Last Name"
                />
              </View>
              <View style={styles.inputComponent}>
                <FormControl.Label>Phone Number</FormControl.Label>
              </View>
              <View style={styles.inputComponent}>
                <Input
                  w={{
                    base: '90%',
                    md: '25%',
                  }}
                  placeholder="Input your Phone Number"
                />
              </View>
              <View style={styles.inputComponent}>
                <FormControl.Label>Email</FormControl.Label>
              </View>
              <View style={styles.inputComponent}>
                <Input
                  w={{
                    base: '90%',
                    md: '25%',
                  }}
                  placeholder="Input your Email"
                />
              </View>
              <View style={styles.inputComponent}>
                <FormControl.Label>Password</FormControl.Label>
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
                        // style={styles.iconPassword}
                        color="muted.400"
                      />
                    </Pressable>
                  }
                  placeholder="Input your Password"
                />
              </View>
              <View style={styles.inputComponent}>
                <FormControl.HelperText>
                  Must be atleast 8 characters.
                </FormControl.HelperText>
              </View>
              <View style={styles.inputComponent}>
                <Button style={{width: '90%'}}>Sign Up</Button>
              </View>
              <View style={styles.textSignIn}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text>Already have account ? Sign In</Text>
                </TouchableOpacity>
              </View>
            </Stack>
          </FormControl>
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
  },
  descForms: {
    marginLeft: 7,
    marginTop: 5,
  },
  inputComponent: {
    marginTop: 5,
  },
  textSignIn: {
    marginHorizontal: 40,
    marginTop: 15,
    marginBottom: 20,
  },
});

export default Register;
