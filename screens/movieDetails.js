import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Button, Input, FormControl, Select, CheckIcon} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';

const MovieDetails = ({navigation}) => {
    const [service, setService] = React.useState('');
    return (
        <ScrollView>
            <Navbar />
            {/* Konten */}
            <View style={{backgroundColor: '#F5F6F8'}}>
                <View style={styles.imageMovies}>
                    <View style={styles.moviesBorder}>
                        <Image source={require('../src/images/now-1.png')} />
                    </View>
                </View>
                <View style={{marginTop: 35}}>
                    <Text style={{textAlign: 'center'}}>
                        Spider-Man: Homecoming
                    </Text>
                    <Text style={{textAlign: 'center'}}>
                        Adventure, Action, Sci-Fi
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <View>
                            <Text>Release date</Text>
                            <Text>June 28, 2017</Text>
                        </View>
                        <View>
                            <Text>Duration</Text>
                            <Text>2 hrs 13 min</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Directed by</Text>
                            <Text>Jon Watss</Text>
                        </View>
                        <View>
                            <Text>Casts</Text>
                            <Text>Tom Holland, Robert Downey Jr., etc.</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Synopsis</Text>
                    <Text>
                        Thrilled by his experience with the Avengers, Peter
                        returns home, where he lives with his Aunt May, under
                        the watchful eye of his new mentor Tony Stark, Peter
                        tries to fall back into his normal daily routine -
                        distracted by thoughts of proving himself to be more
                        than just your friendly neighborhood Spider-Man - but
                        when the Vulture emerges as a new villain, everything
                        that Peter holds most important will be threatened.
                    </Text>
                </View>
                {/* Show times and tickets */}
                <View>
                    <Text>Showtimes and Tickets</Text>
                    <View>
                        <Select
                            selectedValue={service}
                            minWidth="200"
                            accessibilityLabel="Choose Service"
                            placeholder="Set a date"
                            InputLeftElement={
                                <Icon name="calendar" size={25} />
                            }
                            _selectedItem={{
                                bg: 'teal.600',
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="UX Research" value="ux" />
                            <Select.Item label="Web Development" value="web" />
                            <Select.Item
                                label="Cross Platform Development"
                                value="cross"
                            />
                            <Select.Item label="UI Designing" value="ui" />
                            <Select.Item
                                label="Backend Development"
                                value="backend"
                            />
                        </Select>
                    </View>
                    <View>
                        <Select
                            selectedValue={service}
                            minWidth="200"
                            accessibilityLabel="Choose Service"
                            placeholder="Set a city"
                            InputLeftElement={<Icon name="map-pin" size={25} />}
                            _selectedItem={{
                                bg: 'teal.600',
                                endIcon: <CheckIcon size="5" />,
                            }}
                            mt={1}
                            onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="UX Research" value="ux" />
                            <Select.Item label="Web Development" value="web" />
                            <Select.Item
                                label="Cross Platform Development"
                                value="cross"
                            />
                            <Select.Item label="UI Designing" value="ui" />
                            <Select.Item
                                label="Backend Development"
                                value="backend"
                            />
                        </Select>
                    </View>
                </View>
                <View style={styles.boxCinemas}>
                    <View>
                        <View style={{paddingLeft: 90}}>
                            <Image
                                source={require('../src/images/footer-1.png')}
                                style={{width: 70, height: 27}}
                            />
                        </View>
                        <Text style={{marginTop: 15}}>
                            Whatever street No.12, South Purwokerto
                        </Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingLeft: 20,
                                    marginTop: 15,
                                }}>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                            </View>
                            <View
                                style={{flexDirection: 'row', paddingLeft: 20}}>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingLeft: 20,
                                    marginTop: 15,
                                }}>
                                <Text style={{flex: 1}}>Price</Text>
                                <Text>$10.00/seat</Text>
                            </View>
                            <Button
                                style={{elevation: 5}}
                                onPress={() =>
                                    navigation.navigate('OrderPage')
                                }>
                                Book Now
                            </Button>
                        </View>
                    </View>
                    <View />
                </View>
                <View style={{marginTop: 30}}>
                    <View>
                        <Image
                            source={require('../src/images/footer-1.png')}
                            style={{width: 70, height: 27}}
                        />
                        <Text>Whatever street No.12, South Purwokerto</Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }}
                        />
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                                <Text>08:30am</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{flex: 1}}>Price</Text>
                                <Text>$10.00/seat</Text>
                            </View>
                            <Button
                                style={{elevation: 5}}
                                onPress={() =>
                                    navigation.navigate('OrderPage')
                                }>
                                Book Now
                            </Button>
                        </View>
                        <Text>View More</Text>
                    </View>
                </View>
            </View>
            {/* Konten end */}
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default MovieDetails;
