import React from 'react';
import {
    Button,
    Text,
    Image,
    ScrollView,
    Box,
    Stack,
    Divider,
} from 'native-base';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';
import GridSeat from '../src/components/gridSeat';

const OrderPage = () => {
    return (
        <ScrollView>
            <Navbar />

            {/* Konten */}
            <Box backgroundColor="#D6D8E7" px="20px">
                <Box mt="32px">
                    <Text fontSize="18px">Choose your seat</Text>
                </Box>
                <GridSeat />
                <Box mt="32px" mb="11px">
                    <Text fontSize="18px">Order Info</Text>
                </Box>
                <Box backgroundColor="white" borderRadius="md">
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        space={2}
                        pt="30">
                        <Image
                            source={require('../src/images/footer-2.png')}
                            style={{width: '50%', height: 25}}
                            alt="logo"
                        />
                        <Text>CineOne21 Cinema</Text>
                        <Text>Spider-Man: Homecoming</Text>
                    </Stack>
                    <Stack
                        direction="row"
                        space={9}
                        alignItems="center"
                        justifyContent="center"
                        mt="5">
                        <Stack space={2}>
                            <Text>Tuesday, 07 July 2020</Text>
                            <Text>One ticket price</Text>
                            <Text>Seat choosed</Text>
                            {/* <Text>Total Payment</Text> */}
                        </Stack>
                        <Stack space={2}>
                            <Text>02:00pm</Text>
                            <Text>$10</Text>
                            <Text>C4, C5, C6</Text>
                            {/* <Text>$30</Text> */}
                        </Stack>
                    </Stack>
                    <Divider mt="22" />
                    <Box my="22">
                        <Stack direction="row" space={9} ml="40px">
                            <Stack>
                                <Text>Total Payment</Text>
                            </Stack>
                            <Stack paddingLeft="50px">
                                <Text>$30</Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box alignItems="center" my="50">
                    <Button width="70%">Checkout Now</Button>
                </Box>
            </Box>
            <Footer />
        </ScrollView>
    );
};

export default OrderPage;
