import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
import {
    Button,
    Select,
    CheckIcon,
    View,
    Stack,
    Box,
    Image,
    Text,
    Pressable,
    HStack,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import http from '../src/helpers/http';
import {chooseMovie as chooseMovieActions} from '../src/redux/reducers/transactions';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';

const MovieDetails = ({id_movie}) => {
    const [movieDetails, setMovieDetails] = React.useState({});
    const [date, setDate] = React.useState('');
    const [city, setCity] = React.useState('');
    const [cityList, setCityList] = React.useState([]);
    const [selectedCinema, setSelectedCinema] = React.useState(null);
    const [selectedTime, setSelectedTime] = React.useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const getId = route.params.id_movie;
    // console.log(getId);

    React.useEffect(() => {
        getMovieDetails();
    }, [getId]);

    // const onChange = (event, selectedDate) => {
    //     const currentDate = selectedDate;
    //     setDate(currentDate);
    // };

    // console.log(movieDetails);
    console.log(date, city, selectedTime);
    const getMovieDetails = async () => {
        try {
            const {data} = await http().get('/movies/' + getId);
            setMovieDetails(data.results);
        } catch (error) {
            console.log(error.response);
        }
    };

    const getCinemas = async () => {
        try {
            const {data} = await http().get(
                `/cinemas/${getId}/selectCinemas?date=${date}&city=${city}`,
            );
            setCityList(data.result);
        } catch (err) {
            if (err) {
                throw err;
            }
        }
    };

    const chooseTime = (time, cinema) => {
        setSelectedTime(time);
        setSelectedCinema(cinema);
    };

    const book = (price, cinemaName) => {
        dispatch(
            chooseMovieActions({
                movieId: getId,
                cinemaId: selectedCinema,
                bookingDate: date,
                bookingTime: selectedTime,
                movieTitle: movieDetails?.title,
                price,
                cinemaName,
                // price: cinema.price,
            }),
        );
        navigation.navigate('OrderPage');
    };
    React.useEffect(() => {
        getCinemas();
    }, [city, date]);
    return (
        <FlatList
            style={{flex: 1}}
            ListHeaderComponent={
                <>
                    <Navbar />
                    <View backgroundColor="white" px="5">
                        <View style={styles.imageMovies}>
                            <View style={styles.moviesBorder}>
                                <Image
                                    source={{uri: movieDetails?.picture}}
                                    width="160px"
                                    height="250px"
                                    resizeMode="contain"
                                    alt="Alternate Text"
                                />
                            </View>
                        </View>
                        <Stack
                            justifyContent="center"
                            alignContent="center"
                            space={3}>
                            <View style={{marginTop: 35}}>
                                <Stack space={2}>
                                    <Text style={{textAlign: 'center'}}>
                                        {movieDetails?.title}
                                    </Text>
                                    <Text style={{textAlign: 'center'}}>
                                        {movieDetails?.genre}
                                    </Text>
                                </Stack>
                            </View>
                            <Stack direction="row" space={7} mt="5">
                                <Stack space={2}>
                                    <Stack>
                                        <Text>Release date</Text>
                                        <Text>
                                            {moment(
                                                movieDetails?.releaseDate,
                                            ).format('LL')}
                                        </Text>
                                    </Stack>
                                    <Stack>
                                        <Text>Duration</Text>
                                        <Text>
                                            {
                                                String(
                                                    movieDetails?.duration,
                                                ).split(':')[0]
                                            }{' '}
                                            Hours{' '}
                                            {
                                                String(
                                                    movieDetails?.duration,
                                                ).split(':')[1]
                                            }{' '}
                                            minutes
                                        </Text>
                                    </Stack>
                                </Stack>
                                <Stack space={2}>
                                    <Stack>
                                        <Text>Directed by</Text>
                                        <Text>{movieDetails?.director}</Text>
                                    </Stack>
                                    <Stack pr="5">
                                        <Text>Casts</Text>
                                        <Text>{movieDetails?.casts}</Text>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <View>
                                <Text>Synopsis</Text>
                                <Text>{movieDetails?.synopsis}</Text>
                            </View>
                        </Stack>

                        {/* Konten showtimes dan cinemas */}
                        <Stack space={3} mt="5">
                            <Text>Showtimes and Tickets</Text>
                            <View>
                                <CalendarPicker
                                    onDateChange={value => {
                                        setDate(value.format('YYYY-MM-DD'));
                                    }}
                                />
                            </View>
                            <View>
                                <Select
                                    selectedValue={city}
                                    minWidth="200"
                                    accessibilityLabel="Set a city"
                                    placeholder="Set a city"
                                    InputLeftElement={
                                        <Icon name="map-pin" size={25} />
                                    }
                                    _selectedItem={{
                                        bg: 'teal.600',
                                        endIcon: <CheckIcon size="5" />,
                                    }}
                                    mt={1}
                                    onValueChange={itemValue =>
                                        setCity(itemValue)
                                    }>
                                    <Select.Item
                                        label="Jakarta"
                                        value="Jakarta"
                                    />
                                    <Select.Item label="Depok" value="Depok" />
                                </Select>
                            </View>
                        </Stack>

                        {/* Konten flatlist cinema */}
                        <View>
                            {cityList.map(cinema => {
                                return (
                                    <>
                                        <View style={styles.boxCinemas}>
                                            <Text key={cinema.id}>
                                                {cinema.name}
                                            </Text>
                                            <Text px="5">{cinema.address}</Text>
                                            <View
                                                style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth:
                                                        StyleSheet.hairlineWidth,
                                                }}
                                            />
                                            <Stack space={2}>
                                                {cinema.time.map(time => {
                                                    return (
                                                        <View>
                                                            <Button
                                                                onPress={() =>
                                                                    chooseTime(
                                                                        time,
                                                                        cinema.cinemaId,
                                                                    )
                                                                }
                                                                style={{
                                                                    backgroundColor:
                                                                        cinema.cinemaId ===
                                                                            selectedCinema &&
                                                                        time ===
                                                                            selectedTime
                                                                            ? '#62B6B7'
                                                                            : 'white',
                                                                }}>
                                                                <Text>
                                                                    {time}
                                                                </Text>
                                                            </Button>
                                                        </View>
                                                    );
                                                })}
                                            </Stack>
                                            <HStack space={10} marginTop="15">
                                                <Text>Price</Text>
                                                <Text>{cinema.price}</Text>
                                            </HStack>
                                            <Button
                                                marginTop={15}
                                                onPress={() =>
                                                    book(
                                                        cinema.price,
                                                        cinema.name,
                                                    )
                                                }>
                                                Book Now
                                            </Button>
                                        </View>
                                    </>
                                );
                            })}
                        </View>
                    </View>
                    <Footer />
                </>
            }
        />
    );
};

const styles = StyleSheet.create({
    datePickerStyle: {
        width: 230,
    },
    imageMovies: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    moviesBorder: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#DEDEDE',
        padding: 15,
    },
    boxCinemas: {
        marginTop: 30,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#439A97',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
        marginBottom: 30,
    },
});
export default MovieDetails;
