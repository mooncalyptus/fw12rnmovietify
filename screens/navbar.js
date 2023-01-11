import React from 'react';
import {
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {Pressable, Box, Input, Stack, HStack, Divider} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();
    const [click, setClick] = React.useState(false);
    return (
        <Box backgroundColor="white">
            <HStack justifyContent="space-between" px="5">
                <Stack>
                    <Image
                        source={require('../src/images/logo.png')}
                        style={{width: 100, height: 40}}
                    />
                </Stack>
                <Pressable onPress={() => setClick(!click)}>
                    <Stack justifyContent="center" alignContent="center" pt="2">
                        <Icon name="menu" size={20} />
                    </Stack>
                </Pressable>
            </HStack>
            <Stack>
                {click && (
                    <Stack
                        backgroundColor="white"
                        mt="-5px"
                        space={3}
                        px="5"
                        py="5"
                        mb="2">
                        <Input
                            w={{
                                base: '100%',
                                md: '25%',
                            }}
                            InputLeftElement={
                                <Icon
                                    name="search"
                                    size={20}
                                    ml="2"
                                    color="muted.400"
                                />
                            }
                            placeholder="Search"
                        />
                        <Divider my="2" />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}>
                            <Text>Home</Text>
                        </TouchableOpacity>
                        <Divider my="2" />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ViewAll')}>
                            <Text>List Movie</Text>
                        </TouchableOpacity>
                        <Divider my="2" />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}>
                            <Text>Profile</Text>
                        </TouchableOpacity>
                        <Divider my="2" />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                        <Divider my="2" />
                        <Text>© 2023 movietify. All Rights Reserved.</Text>
                    </Stack>
                )}
            </Stack>
        </Box>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        // justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
    },
    menu: {
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default Navbar;
