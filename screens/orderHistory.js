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
    HStack,
    Alert,
    VStack,
    IconButton,
    CloseIcon,
    Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';

const OrderHistory = ({navigation}) => {
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}>
                        <Text>Details Account</Text>
                    </TouchableOpacity>
                    <Divider my="2" backgroundColor="white" />
                </Stack>
                <Stack>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderHistory')}>
                        <Text>Order History</Text>
                    </TouchableOpacity>
                    <Divider my="2" backgroundColor="#97DECE" />
                </Stack>
            </Stack>
            {/* Konten */}
            <Box backgroundColor="#F5F6F8" px="20px">
                <Box
                    backgroundColor="white"
                    mt="32px"
                    py="10"
                    borderRadius="md">
                    <Stack pl="5" mb={3}>
                        <Image
                            source={require('../src/images/footer-2.png')}
                            style={{width: '50%', height: 25}}
                            alt="footer"
                        />
                    </Stack>
                    <Stack px="5" space={3}>
                        <Text>Tuesday, 07 July 2020 - 04:30pm</Text>
                        <Text>Spider-Man: Homecoming</Text>
                        <Divider my="2" />
                        <Button
                            onPress={() => navigation.navigate('TicketResult')}>
                            Ticket in active
                        </Button>
                    </Stack>
                </Box>

                <Box
                    backgroundColor="white"
                    mt="32px"
                    mb="32px"
                    py="10"
                    borderRadius="md">
                    <Stack pl="5" mb={3}>
                        <Image
                            source={require('../src/images/footer-1.png')}
                            style={{width: 70, height: 25}}
                            alt="footer"
                        />
                    </Stack>
                    <Stack px="5" space={3}>
                        <Text>Monday, 14 June 2020 - 02:00pm</Text>
                        <Text>Avengers: End Game</Text>
                        <Divider my="2" />
                        <Button backgroundColor="#6E7191">Ticket Used</Button>
                    </Stack>
                </Box>
            </Box>
            {/* Konten end */}
            <Footer />
        </ScrollView>
    );
};

export default OrderHistory;
