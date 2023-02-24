import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {createTransaction as trxAction} from '../src/redux/actions/transactions';
import http from '../src/helpers/http';
import {Formik} from 'formik';
import * as Yup from 'yup';
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
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';

const PaymentPage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const data = useSelector(state => state.transactions);
    const [paymentList, setPaymentList] = React.useState([]);
    const [form, setForm] = React.useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        paymentMethodId: '',
    });
    const handleInputChange = (inputName, inputValue) => {
        setForm({
            ...form,
            [inputName]: inputValue,
        });
    };
    React.useEffect(() => {
        getPaymentMethod();
    }, []);
    const getPaymentMethod = async () => {
        const {data} = await http().get('/payment');
        setPaymentList(data.result);
    };
    React.useEffect(() => {
        console.log(form);
    }, [form]);
    const pay = () => {
        dispatch(trxAction({...data, ...form, token}));
        navigation.navigate('OrderHistory');
    };
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
                            <Stack direction="column" space={2}>
                                {paymentList.map(item => (
                                    <Button
                                        style={{
                                            backgroundColor:
                                                form.paymentMethodId === item.id
                                                    ? '#62B6B7'
                                                    : '#97DECE',
                                        }}
                                        onPress={() =>
                                            setForm({
                                                ...form,
                                                paymentMethodId: item.id,
                                            })
                                        }>
                                        {item.name}
                                    </Button>
                                ))}
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
                                <TextInput
                                    placeholder="Full Name"
                                    onChangeText={text =>
                                        handleInputChange('fullName', text)
                                    }
                                    value={form.fullName}
                                />
                                {/* <Input
                                    variant="outline"
                                    placeholder="Full Name"
                                    name="fullName"
                                    // value={form}
                                    onChangeText={value => setForm(value)}
                                /> */}
                                <FormControl.Label>Email</FormControl.Label>
                                <TextInput
                                    placeholder="Email"
                                    onChangeText={text =>
                                        handleInputChange('email', text)
                                    }
                                    value={form.email}
                                />
                                <FormControl.Label>
                                    Phone Number
                                </FormControl.Label>
                                <TextInput
                                    placeholder="Phone Number"
                                    onChangeText={text =>
                                        handleInputChange('phoneNumber', text)
                                    }
                                    value={form.phoneNumber}
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
                        <Button width="70%" onPress={pay}>
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
