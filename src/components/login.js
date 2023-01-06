import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Box, Input, FormControl, Stack} from 'native-base';

const Login = () => {
  return (
    <View>
      <Text style={styles.textMain}>Sign In</Text>
      <Text>
        Sign in with your data that you entered during your registration
      </Text>
      <Box>
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="" placeholder="password" />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  textMain: {
    color: 'red',
  },
});

export default Login;
