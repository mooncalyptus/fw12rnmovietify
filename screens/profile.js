import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
    Button,
    Input,
    FormControl,
    Text,
    Image,
    ScrollView,
    Box,
    Stack,
    Divider,
    Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import http from '../src/helpers/http';
import {useSelector} from 'react-redux';
import Navbar from './navbar';
import Footer from '../src/components/footer';

const Profile = ({navigation}) => {
    const [show, setShow] = React.useState(false);
    const [profile, setProfile] = React.useState(false);
    const token = useSelector(state => state.auth.token);

    // const fetchProfile = async () =>{
    //     try{
    //         const response = await http().get('/profile')
    //     }
    // }
    return (
        <ScrollView>
            <Navbar />
            <Stack
                backgroundColor="white"
                direction="row"
                space={10}
                justifyContent="center"
                alignItems="center"
                py="5">
                <Stack>
                    <Text>Details Account</Text>
                    <Divider my="2" backgroundColor="#97DECE" />
                </Stack>
                <Stack>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderHistory')}>
                        <Text>Order History</Text>
                    </TouchableOpacity>
                    <Divider my="2" backgroundColor="white" />
                </Stack>
            </Stack>
            {/* Konten */}
            <Box backgroundColor="#F5F6F8" px="20px">
                <Box
                    backgroundColor="white"
                    mt="32px"
                    py="10"
                    borderRadius="md">
                    <Stack space={4}>
                        <Stack alignItems="flex-start" pl="10">
                            <Text fontSize="18">Info</Text>
                        </Stack>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            space={3}>
                            <Stack>
                                <Image
                                    source={require('../src/images/profile.png')}
                                    style={{width: 140, height: 140}}
                                    alt="profile"
                                />
                            </Stack>
                            <Stack>
                                <Text>Jonas El Rodriguez</Text>
                            </Stack>
                            <Stack>
                                <Text>Moviegoers</Text>
                            </Stack>
                            <Stack>
                                <Button>Logout</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
                <Box mt="32px" mb="16px">
                    <Text fontSize="18px">Account Settings</Text>
                </Box>
                <Box backgroundColor="white" py="10" px="10" borderRadius="md">
                    <Stack>
                        <Stack>
                            <Text>Details Information</Text>
                        </Stack>
                        <Stack>
                            <Divider my="2" />
                        </Stack>
                        <Stack>
                            <FormControl>
                                <Stack space={3}>
                                    <FormControl.Label>
                                        Full Name
                                    </FormControl.Label>
                                    <Input
                                        variant="outline"
                                        placeholder="Full Name"
                                    />
                                    <FormControl.Label>Email</FormControl.Label>
                                    <Input
                                        variant="outline"
                                        placeholder="Email"
                                    />
                                    <FormControl.Label>
                                        Phone Number
                                    </FormControl.Label>
                                    <Input
                                        variant="outline"
                                        placeholder="Phone Number"
                                    />
                                </Stack>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Box>
                <Stack justifyContent="center" alignItems="center" my="15">
                    <Button>Update Changes</Button>
                </Stack>
                <Box backgroundColor="white" py="10" px="10" borderRadius="md">
                    <Stack>
                        <Stack>
                            <Text>Account and Privacy</Text>
                        </Stack>
                        <Stack>
                            <Divider my="2" />
                        </Stack>
                        <Stack>
                            <FormControl>
                                <Stack space={3}>
                                    <FormControl.Label>
                                        New Password
                                    </FormControl.Label>
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
                                                        show ? 'eye' : 'eye-off'
                                                    }
                                                    size={20}
                                                    mr="2"
                                                    style={styles.iconPassword}
                                                    color="muted.400"
                                                />
                                            </Pressable>
                                        }
                                        placeholder="Input your Password"
                                    />
                                    <FormControl.Label>
                                        Confirm
                                    </FormControl.Label>
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
                                                        show ? 'eye' : 'eye-off'
                                                    }
                                                    size={20}
                                                    mr="2"
                                                    style={styles.iconPassword}
                                                    color="muted.400"
                                                />
                                            </Pressable>
                                        }
                                        placeholder="Input your Password"
                                    />
                                </Stack>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Box>
                <Stack justifyContent="center" alignItems="center" my="18">
                    <Button>Update Changes</Button>
                </Stack>
            </Box>
            {/* Konten end */}
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    iconPassword: {
        paddingRight: 5,
    },
});
export default Profile;
