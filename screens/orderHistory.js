import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
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
import Navbar from './navbar';
import Footer from '../src/components/footer';

const OrderHistory = () => {
    const navigation = useNavigation();
    const {cinemaName, bookingDate, bookingTime, movieTitle} = useSelector(
        state => state.transactions,
    );
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
                        <Text>{cinemaName}</Text>
                    </Stack>
                    <Stack px="5" space={3}>
                        <Text>
                            {bookingDate} - {bookingTime}
                        </Text>
                        <Text>{movieTitle}</Text>
                        <Divider my="2" />
                        <Button
                            onPress={() => navigation.navigate('TicketResult')}>
                            Ticket in active
                        </Button>
                    </Stack>
                </Box>
            </Box>
            {/* Konten end */}
            <Footer />
        </ScrollView>
    );
};

export default OrderHistory;
