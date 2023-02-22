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
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import {useRoute, useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import http from '../src/helpers/http';
import CalendarPicker from 'react-native-calendar-picker';

const MovieDetails = ({id_movie}) => {
    const [service, setService] = React.useState('');
    const [movieDetails, setMovieDetails] = React.useState({});
    const [detailsCinema, setDetailsCinema] = React.useState([]);
    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const getId = route.params.id_movie;
    // console.log(getId);

    React.useEffect(() => {
        getMovieDetails();
        getDetailsCinema();
    }, [getId]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    // console.log(movieDetails);
    const getMovieDetails = async () => {
        try {
            const {data} = await http().get('/movies/' + getId);
            setMovieDetails(data.results);
        } catch (error) {
            console.log(error.response);
        }
    };

    const getDetailsCinema = async () => {
        try {
            const {data} = await http().get('/movies/' + getId);
            setDetailsCinema(data.results);
        } catch (error) {
            console.log(error);
        }
    };

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
                                        <Text>{movieDetails?.releaseDate}</Text>
                                    </Stack>
                                    <Stack>
                                        <Text>Duration</Text>
                                        <Text>{movieDetails?.duration}</Text>
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
                                {/* <CalendarPicker
                                    onDateChange={value => console.log(value)}
                                /> */}
                                <DatePicker
                                    date={date}
                                    onDateChange={setDate}
                                />
                            </View>
                            <View>
                                <Select
                                    selectedValue={service}
                                    minWidth="200"
                                    accessibilityLabel="Choose Service"
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
                                        setService(itemValue)
                                    }>
                                    <Select.Item label="Jakarta" value="ux" />
                                    <Select.Item
                                        label="Web Development"
                                        value="web"
                                    />
                                    <Select.Item
                                        label="Cross Platform Development"
                                        value="cross"
                                    />
                                    <Select.Item
                                        label="UI Designing"
                                        value="ui"
                                    />
                                    <Select.Item
                                        label="Backend Development"
                                        value="backend"
                                    />
                                </Select>
                            </View>
                        </Stack>

                        {/* Konten flatlist cinema */}
                        <View style={styles.boxCinemas}>
                            <View>
                                <Stack space={3}>
                                    <View
                                        justifyContent="center"
                                        alignItems="center">
                                        <Image
                                            source={require('../src/images/footer-1.png')}
                                            style={{width: 70, height: 27}}
                                        />
                                    </View>
                                    <Text marginTop="15" textAlign="center">
                                        {movieDetails.name}
                                    </Text>
                                    <Text style={{marginTop: 15}}>
                                        {movieDetails.address}
                                    </Text>
                                    <View
                                        style={{
                                            borderBottomColor: 'black',
                                            borderBottomWidth:
                                                StyleSheet.hairlineWidth,
                                        }}
                                    />
                                    <View>
                                        <Stack space={2}>
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: 15,
                                                    marginTop: 15,
                                                }}>
                                                <Stack
                                                    direction="row"
                                                    space={3}>
                                                    <Stack>
                                                        <Text>
                                                            {movieDetails.time}
                                                        </Text>
                                                        <Text>
                                                            {movieDetails.time}
                                                        </Text>
                                                    </Stack>
                                                </Stack>
                                            </View>
                                        </Stack>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                paddingLeft: 20,
                                                marginTop: 15,
                                            }}>
                                            <Text style={{flex: 1}}>Price</Text>
                                            <Text>{movieDetails.price}</Text>
                                        </View>
                                        <Button
                                            style={{
                                                elevation: 5,
                                                marginTop: 15,
                                            }}
                                            onPress={() =>
                                                navigation.navigate('OrderPage')
                                            }>
                                            Book Now
                                        </Button>
                                    </View>
                                </Stack>
                            </View>
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
    },
});
export default MovieDetails;
