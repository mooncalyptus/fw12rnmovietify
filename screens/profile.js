import React, {useEffect} from 'react';
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
    View,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import http from '../src/helpers/http';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {logout as logoutAction} from '../src/redux/reducers/auth';

const profileSchemaValidation = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email address is Required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
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
const Profile = () => {
    const navigation = useNavigation();
    const [show, setShow] = React.useState(false);
    const [profile, setProfile] = React.useState({});
    const dispatch = useDispatch();
    const LogoutProcess = () => {
        dispatch(logoutAction());
    };
    const token = useSelector(state => state.auth.token);
    // console.log(profile)
    useEffect(() => {
        getProfile().then(data => {
            setProfile(data?.results);
        });
    }, []);
    const getProfile = async () => {
        const {data} = await http(token).get('/profile');
        return data;
    };
    // console.log(profile);

    const UpdateProfile = async value => {
        try {
            console.log(value);
            const update = await http(token).patch('/profile', value);
            return update;
            // console.log('success');
        } catch (error) {
            if (error) {
                throw error;
            }
        }
    };

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
                                {profile?.picture ? (
                                    <Image
                                        source={{uri: profile.picture}}
                                        // style={{width: 140, height: 140}}
                                        width="140"
                                        height="140"
                                        borderRadius="full"
                                        alt="profile"
                                    />
                                ) : (
                                    <Image
                                        source={require('../src/images/profile.png')}
                                        // style={{width: 140, height: 140}}
                                        width="140"
                                        height="140"
                                        borderRadius="full"
                                        alt="profile"
                                    />
                                )}
                            </Stack>
                            <Stack>
                                <Text>
                                    {profile.firstName} {profile.lastName}
                                </Text>
                            </Stack>
                            <Stack>
                                <Text>Moviegoers</Text>
                            </Stack>
                            <Stack>
                                <Button onPress={LogoutProcess}>Logout</Button>
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
                            <Formik
                                initialValues={{
                                    firstName: profile.firstName,
                                    lastName: profile.lastName,
                                    email: profile.email,
                                    phoneNumber: profile.phoneNumber,
                                    // password: '',
                                    // confirmPassword: '',
                                }}
                                validationSchema={profileSchemaValidation}
                                onSubmit={UpdateProfile}>
                                {({
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    errors,
                                    values,
                                }) => (
                                    <FormControl isInvalid>
                                        <Stack space={3}>
                                            <FormControl.Label>
                                                First Name
                                            </FormControl.Label>
                                            <Input
                                                variant="outline"
                                                placeholder="First Name"
                                                onChangeText={handleChange(
                                                    'firstName',
                                                )}
                                                onBlur={handleBlur('firstName')}
                                                // value={profile.firstName}
                                                defaultValue={profile.firstName}
                                            />
                                            {errors.firstName && (
                                                <View
                                                    style={
                                                        styles.fourthComponent
                                                    }>
                                                    <FormControl.HelperText>
                                                        {errors.firstName}
                                                    </FormControl.HelperText>
                                                </View>
                                            )}
                                            <FormControl.Label>
                                                Last Name
                                            </FormControl.Label>
                                            <Input
                                                variant="outline"
                                                placeholder="Last Name"
                                                onChangeText={handleChange(
                                                    'lastName',
                                                )}
                                                onBlur={handleBlur('lastName')}
                                                // value={values.lastName}
                                                defaultValue={profile.lastName}
                                            />
                                            {errors.lastName && (
                                                <View
                                                    style={
                                                        styles.fourthComponent
                                                    }>
                                                    <FormControl.HelperText>
                                                        {errors.lastName}
                                                    </FormControl.HelperText>
                                                </View>
                                            )}
                                            <FormControl.Label>
                                                Email
                                            </FormControl.Label>
                                            <Input
                                                variant="outline"
                                                placeholder="Email"
                                                onChangeText={handleChange(
                                                    'email',
                                                )}
                                                onBlur={handleBlur('email')}
                                                // value={values.email}
                                                defaultValue={profile.email}
                                            />
                                            {errors.email && (
                                                <View
                                                    style={
                                                        styles.fourthComponent
                                                    }>
                                                    <FormControl.HelperText>
                                                        {errors.email}
                                                    </FormControl.HelperText>
                                                </View>
                                            )}
                                            <FormControl.Label>
                                                Phone Number
                                            </FormControl.Label>
                                            <Input
                                                variant="outline"
                                                placeholder="Phone Number"
                                                onChangeText={handleChange(
                                                    'phoneNumber',
                                                )}
                                                onBlur={handleBlur(
                                                    'phoneNumber',
                                                )}
                                                // value={values.phoneNumber}
                                                defaultValue={
                                                    profile.phoneNumber
                                                }
                                            />
                                            {errors.phoneNumber && (
                                                <View
                                                    style={
                                                        styles.fourthComponent
                                                    }>
                                                    <FormControl.HelperText>
                                                        {errors.phoneNumber}
                                                    </FormControl.HelperText>
                                                </View>
                                            )}
                                            {/* <FormControl.Label>
                                                New Password
                                            </FormControl.Label>
                                            <Input
                                                w={{
                                                    base: '90%',
                                                    md: '25%',
                                                }}
                                                type={
                                                    show ? 'text' : 'password'
                                                }
                                                InputRightElement={
                                                    <Pressable
                                                        onPress={() =>
                                                            setShow(!show)
                                                        }>
                                                        <Icon
                                                            name={
                                                                show
                                                                    ? 'eye'
                                                                    : 'eye-off'
                                                            }
                                                            size={20}
                                                            mr="2"
                                                            style={
                                                                styles.iconPassword
                                                            }
                                                            color="muted.400"
                                                        />
                                                    </Pressable>
                                                }
                                                placeholder="Input your Password"
                                                onChangeText={handleChange(
                                                    'password',
                                                )}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                                // defaultValue={profile.password}
                                            />
                                            {errors.password && (
                                                <View
                                                    style={
                                                        styles.fourthComponent
                                                    }>
                                                    <FormControl.HelperText>
                                                        {errors.password}
                                                    </FormControl.HelperText>
                                                </View>
                                            )} */}
                                            {/* <FormControl.Label>
                                                Confirm Password
                                            </FormControl.Label>
                                            <Input
                                                w={{
                                                    base: '90%',
                                                    md: '25%',
                                                }}
                                                type={
                                                    show ? 'text' : 'password'
                                                }
                                                InputRightElement={
                                                    <Pressable
                                                        onPress={() =>
                                                            setShow(!show)
                                                        }>
                                                        <Icon
                                                            name={
                                                                show
                                                                    ? 'eye'
                                                                    : 'eye-off'
                                                            }
                                                            size={20}
                                                            mr="2"
                                                            style={
                                                                styles.iconPassword
                                                            }
                                                            color="muted.400"
                                                        />
                                                    </Pressable>
                                                }
                                                placeholder="Input your Password"
                                                onChangeText={handleChange(
                                                    'confirmPassword',
                                                )}
                                                onBlur={handleBlur(
                                                    'confirmPassword',
                                                )}
                                                value={values.confirmPassword}
                                            />
                                            {errors.confirmPassword && (
                                                <View
                                                    style={
                                                        styles.fourthComponent
                                                    }>
                                                    <FormControl.HelperText>
                                                        {errors.confirmPassword}
                                                    </FormControl.HelperText>
                                                </View>
                                            )} */}
                                        </Stack>
                                        <Stack
                                            justifyContent="center"
                                            alignItems="center"
                                            my="18">
                                            <Button onPress={handleSubmit}>
                                                Update Changes
                                            </Button>
                                        </Stack>
                                    </FormControl>
                                )}
                            </Formik>
                        </Stack>
                    </Stack>
                </Box>
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
