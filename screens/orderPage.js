import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {chooseSeat as chooseSeatAction} from '../src/redux/reducers/transactions';
import {
    Button,
    Text,
    Image,
    ScrollView,
    Box,
    Stack,
    Divider,
    HStack,
    FlatList,
} from 'native-base';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import GridSeat from '../src/components/gridSeat';

const OrderPage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {movieTitle, bookingDate, bookingTime, price, cinemaName} =
        useSelector(state => state.transactions);
    const [selected, setSelected] = React.useState([]);
    const onChangeSeat = seatNum => {
        if (selected.includes(seatNum)) {
            setSelected(selected.filter(o => o !== seatNum));
            // setSelected(selected.filter(o => o !== seatNum));
        } else {
            setSelected([...selected, seatNum]);
            // setSelected(selected.push(seatNum));
        }
        console.log(selected);
        // console.log(seatNum);
    };

    const checkout = () => {
        dispatch(
            chooseSeatAction({
                seatNumber: selected.join(', '),
                total_price: price * selected.length,
            }),
        );
        navigation.navigate('PaymentPage');
    };
    return (
        <>
            <ScrollView>
                <Navbar />

                <Box backgroundColor="#D6D8E7" px="20px">
                    <Box mt="32px">
                        <Text fontSize="18px">Choose your seat</Text>
                    </Box>
                    <HStack space={2}>
                        <GridSeat selected={selected} onChange={onChangeSeat} />
                        <GridSeat
                            selected={selected}
                            onChange={onChangeSeat}
                            startNum={8}
                        />
                    </HStack>
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
                            <Text>{cinemaName}</Text>
                            <Text>{movieTitle}</Text>
                        </Stack>
                        <Stack
                            direction="row"
                            space={9}
                            alignItems="center"
                            justifyContent="center"
                            mt="5">
                            <Stack space={2}>
                                <Text>{bookingDate}</Text>
                                <Text>One ticket price</Text>
                                <Text>Seat choosed</Text>
                                {/* <Text>Total Payment</Text> */}
                            </Stack>
                            <Stack space={2}>
                                <Text>{bookingTime}</Text>
                                <Text>{price}</Text>
                                <Text>{selected.join(',')}</Text>
                            </Stack>
                        </Stack>
                        <Divider mt="22" />
                        <Box my="22">
                            <Stack direction="row" space={9} ml="40px">
                                <Stack>
                                    <Text>Total Payment</Text>
                                </Stack>
                                <Stack paddingLeft="50px">
                                    <Text>{price * selected.length}</Text>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <Box alignItems="center" my="50">
                        <Button width="70%" onPress={checkout}>
                            Checkout Now
                        </Button>
                    </Box>
                </Box>
            </ScrollView>
        </>
    );
};

export default OrderPage;
