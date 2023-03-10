import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Image, ScrollView, Box, Stack, Divider} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';

const TicketResult = () => {
    return (
        <ScrollView>
            <Navbar />
            {/* Konten */}
            <Box backgroundColor="#F5F6F8" px="20px">
                <Box
                    backgroundColor="white"
                    mt="10"
                    // justifyContent="center"
                    // alignItems="center"
                    borderRadius="md"
                    pt="10"
                    pb="10">
                    <Stack space={4}>
                        <Stack justifyContent="center" alignItems="center">
                            <Image
                                source={require('../src/images/qr.png')}
                                alt="qr"
                                // ml="10"
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center">
                            <Box
                                height="10"
                                width="10"
                                borderRadius="full"
                                backgroundColor="#F5F6F8"
                                // ml="-40px"
                            />
                            <Divider width="90%" />
                            <Box
                                height="10"
                                width="10"
                                borderRadius="full"
                                backgroundColor="#F5F6F8"
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            space={5}>
                            <Stack space={3}>
                                <Stack space={2}>
                                    <Text>Movie</Text>
                                    <Text>Spider-Man: ..</Text>
                                </Stack>
                                <Stack space={2}>
                                    <Text>Date</Text>
                                    <Text>07 Jul</Text>
                                </Stack>
                                <Stack space={2}>
                                    <Text>Count</Text>
                                    <Text>3 pcs</Text>
                                </Stack>
                            </Stack>
                            <Stack space={3}>
                                <Stack space={2}>
                                    <Text>Category</Text>
                                    <Text>Action</Text>
                                </Stack>
                                <Stack space={2}>
                                    <Text>Time</Text>
                                    <Text>2:00pm</Text>
                                </Stack>
                                <Stack space={2}>
                                    <Text>Seats</Text>
                                    <Text>C4, C5, C6</Text>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            {/* Konten end */}
            <Footer />
        </ScrollView>
    );
};

export default TicketResult;
