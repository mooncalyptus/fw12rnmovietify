import React from 'react';
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
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from '../src/components/navbar';
import Footer from '../src/components/footer';

const PaymentPage = ({navigation}) => {
    return (
        <>
            <ScrollView>
                <Navbar />
                {/* Konten */}
                <Box backgroundColor="#D6D8E7" px="20px">
                    <Box mt="32px" mb="16px">
                        <Text fontSize="18px">Payment Method</Text>
                    </Box>
                    <Box
                        backgroundColor="white"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="md">
                        <Stack direction="column" space={3} my={5}>
                            <Stack direction="row" space={4}>
                                <Button
                                    backgroundColor="white"
                                    width="80px"
                                    height="32px"
                                    borderColor="#DEDEDE"
                                    borderRadius="md"
                                    borderWidth="1"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        source={require('../src/images/gpay.png')}
                                        style={{width: 38, height: 13}}
                                        alt="gpay"
                                    />
                                </Button>
                                <Button
                                    backgroundColor="white"
                                    width="80px"
                                    height="32px"
                                    borderColor="#DEDEDE"
                                    borderRadius="md"
                                    borderWidth="1"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        source={require('../src/images/visa.png')}
                                        style={{width: 38, height: 13}}
                                        alt="visa"
                                    />
                                </Button>
                                <Button
                                    backgroundColor="white"
                                    width="80px"
                                    height="32px"
                                    borderColor="#DEDEDE"
                                    borderRadius="md"
                                    borderWidth="1"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        source={require('../src/images/gopay.png')}
                                        style={{width: 38, height: 13}}
                                        alt="gopay"
                                    />
                                </Button>
                            </Stack>
                            <Stack direction="row" space={4}>
                                <Button
                                    backgroundColor="white"
                                    width="80px"
                                    height="32px"
                                    borderColor="#DEDEDE"
                                    borderRadius="md"
                                    borderWidth="1"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        source={require('../src/images/paypal.png')}
                                        style={{width: 20, height: 13}}
                                        alt="paypal"
                                    />
                                </Button>
                                <Button
                                    backgroundColor="white"
                                    width="80px"
                                    height="32px"
                                    borderColor="#DEDEDE"
                                    borderRadius="md"
                                    borderWidth="1"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        source={require('../src/images/ovo.png')}
                                        style={{width: 38, height: 13}}
                                        alt="ovo"
                                    />
                                </Button>
                                <Button
                                    backgroundColor="white"
                                    width="80px"
                                    height="32px"
                                    borderColor="#DEDEDE"
                                    borderRadius="md"
                                    borderWidth="1"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Image
                                        source={require('../src/images/dana.png')}
                                        style={{width: 45, height: 13}}
                                        alt="dana"
                                    />
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            mb={5}>
                            <Divider
                                bg="#DEDEDE"
                                thickness="2"
                                mx="2"
                                orientation="horizontal"
                                width={9}
                            />
                            <Text>or</Text>
                            <Divider
                                bg="#DEDEDE"
                                thickness="2"
                                mx="2"
                                orientation="horizontal"
                                width={9}
                            />
                        </Stack>
                        <Box mb={5}>
                            <Text>Pay via cash. See how it work</Text>
                        </Box>
                    </Box>

                    <Box mt="32px" mb="16px">
                        <Text fontSize="18px">Personal Info</Text>
                    </Box>
                    <Box backgroundColor="white" borderRadius="md">
                        <FormControl>
                            <Stack space={5} px="10" my={7}>
                                <FormControl.Label>Full name</FormControl.Label>
                                <Input
                                    variant="outline"
                                    placeholder="Full Name"
                                />
                                <FormControl.Label>Email</FormControl.Label>
                                <Input variant="outline" placeholder="Email" />
                                <FormControl.Label>
                                    Phone Number
                                </FormControl.Label>
                                <Input
                                    variant="outline"
                                    placeholder="Phone Number"
                                />
                                <Alert
                                    maxW="400"
                                    status="error"
                                    colorScheme="warning">
                                    <VStack space={2} flexShrink={1} w="100%">
                                        <HStack
                                            flexShrink={1}
                                            space={2}
                                            alignItems="center"
                                            justifyContent="space-between">
                                            <HStack
                                                flexShrink={1}
                                                space={2}
                                                alignItems="center">
                                                <Alert.Icon />
                                                <Text
                                                    fontSize="md"
                                                    fontWeight="medium"
                                                    color="coolGray.800">
                                                    Fill your data correctly.
                                                </Text>
                                            </HStack>
                                            <IconButton
                                                variant="unstyled"
                                                _focus={{
                                                    borderWidth: 0,
                                                }}
                                                icon={<CloseIcon size="3" />}
                                                _icon={{
                                                    color: 'coolGray.600',
                                                }}
                                            />
                                        </HStack>
                                    </VStack>
                                </Alert>
                            </Stack>
                        </FormControl>
                    </Box>
                    <Box alignItems="center" my="50">
                        <Button
                            width="70%"
                            onPress={() => navigation.navigate('Profile')}>
                            Pay your Order
                        </Button>
                    </Box>
                </Box>
                {/* Konten end */}
                <Footer />
            </ScrollView>
        </>
    );
};

export default PaymentPage;
