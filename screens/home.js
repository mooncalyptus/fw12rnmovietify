import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';
import {
    Button,
    Input,
    FormControl,
    View,
    Box,
    HStack,
    VStack,
    Pressable,
    Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import image1 from '../src/images/image1.png';
import image2 from '../src/images/image2.png';
import image3 from '../src/images/image3.png';

const movies = [
    {
        id: 1,
        title: 'Spider-Man: Homecoming',
        image: image1,
        genre: 'Adventure, Action, Sci-Fi',
    },
    {
        id: 2,
        title: 'Lion King',
        image: image2,
        genre: 'Adventure, Action, Sci-Fi',
    },
    {
        id: 3,
        title: 'John Wick',
        image: image3,
        genre: 'Adventure, Action, Sci-Fi',
    },
];

const Home = ({navigation}) => {
    const [focus, setFocus] = React.useState(null);
    const toggleFocus = id => {
        if (focus === id) {
            setFocus(null);
        } else {
            setFocus(id);
        }
    };
    return (
        <ScrollView>
            <View>
                {/* Navbar */}
                <Navbar />
                {/* Navbar end */}

                {/* Konten Header */}
                <View mt="5">
                    <Text style={{paddingHorizontal: 15}}>
                        Nearest Cinema, Newest Movie,
                    </Text>
                    <Text
                        px="15"
                        fontSize="32"
                        color="#97DECE"
                        fontWeight="bold">
                        Find Out Now
                    </Text>
                    <View style={{paddingHorizontal: 15}}>
                        <Image
                            source={require('../src/images/header.png')}
                            style={{width: 350, height: 400, marginTop: 10}}
                        />
                    </View>
                </View>
                {/* Konten header end */}

                {/* Konten Now Showing */}
                <VStack space={2} backgroundColor="#97DECE" p="10">
                    <HStack justifyContent="space-between">
                        <Text color="white">Now Showing</Text>
                        <Pressable
                            onPress={() => navigation.navigate('ViewAll')}>
                            <Text color="white">view all</Text>
                        </Pressable>
                    </HStack>
                    <ScrollView height={focus ? 400 : 'auto'} horizontal>
                        <HStack space={3}>
                            {movies.map(o => (
                                <Pressable onPress={() => toggleFocus(o.id)}>
                                    <Box
                                        borderWidth="1"
                                        bg={
                                            focus === o.id
                                                ? 'white'
                                                : 'transparent'
                                        }
                                        borderColor={
                                            focus === o.id ? '#dedede' : 'white'
                                        }
                                        borderRadius="4"
                                        p={focus === o.id ? '0' : '3'}>
                                        <Image
                                            source={o.image}
                                            width="160px"
                                            height="250px"
                                            resizeMode="cover"
                                        />
                                        <Box position="relative">
                                            {focus === o.id && (
                                                <Box
                                                    pt="5"
                                                    px="2"
                                                    pb="5"
                                                    position="absolute"
                                                    bg="white"
                                                    width="full">
                                                    <VStack
                                                        space={2}
                                                        justifyContent="center"
                                                        alignItems="center">
                                                        <Text>{o.title}</Text>
                                                        <Text>{o.genre}</Text>
                                                        <Button>Details</Button>
                                                    </VStack>
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Pressable>
                            ))}
                        </HStack>
                    </ScrollView>
                </VStack>
                {/* Konten Now Showing end */}

                {/* Konten Upcoming Movies */}
                <View style={styles.contentUpcoming}>
                    <View style={styles.textUpcoming}>
                        <Text style={{flex: 1}}>Upcoming Movies</Text>
                        <Text>View All</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <View style={styles.upcomingMonth}>
                            <Text>January</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>February</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>March</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>April</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>May</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>June</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>July</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>August</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>September</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>October</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>November</Text>
                        </View>
                        <View style={styles.upcomingMonth}>
                            <Text>December</Text>
                        </View>
                    </ScrollView>
                    <ScrollView horizontal={true}>
                        <View style={styles.upcomingImage}>
                            <Image
                                source={require('../src/images/upcoming-1.png')}
                            />
                            <Text>Black Widow</Text>
                            <Text>Action, Adventure, Sci-Fi</Text>
                            <Button
                                onPress={() => navigation.navigate('ViewAll')}>
                                Details
                            </Button>
                        </View>
                        <View style={styles.upcomingImage}>
                            <Image
                                source={require('../src/images/upcoming-2.png')}
                            />
                            <Text>The Witches</Text>
                            <Text>Adventure, Comedy, Family</Text>
                            <Button
                                onPress={() => navigation.navigate('ViewAll')}>
                                Details
                            </Button>
                        </View>
                        <View style={styles.upcomingImage}>
                            <Image
                                source={require('../src/images/upcoming-3.png')}
                            />
                            <Text>Tenet</Text>
                            <Text>Action, Adventure, Sci-Fi</Text>
                            <Button
                                onPress={() => navigation.navigate('ViewAll')}>
                                Details
                            </Button>
                        </View>
                    </ScrollView>
                </View>
                {/* Konten Upcoming end */}

                {/* Konten mails */}
                <View style={styles.mailsContent}>
                    <View style={{paddingTop: 5}}>
                        <Text style={{textAlign: 'center'}}>
                            Be the vanguard of
                        </Text>
                        <Text style={{textAlign: 'center'}}>Moviegoers</Text>
                    </View>
                    <View style={{marginTop: 20, marginLeft: 30}}>
                        <FormControl>
                            <Input
                                w={{
                                    base: '90%',
                                    md: '25%',
                                }}
                                placeholder="Type your Email"
                            />
                            <Button
                                style={{width: '90%', marginTop: 15}}
                                onPress={() =>
                                    navigation.navigate('TicketResult')
                                }>
                                Join Now
                            </Button>
                            <Text
                                style={{
                                    paddingRight: 15,
                                    paddingLeft: 5,
                                    marginTop: 15,
                                    paddingBottom: 20,
                                }}>
                                By joining you as a movietify member, we will
                                always send you the latest updates via email .
                            </Text>
                        </FormControl>
                    </View>
                </View>
                {/* Konten mails end */}

                {/* Konten Footer */}
                <Footer />
                {/* Konten footer end */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 10,
    },
    logo: {
        flex: 1,
    },
    menu: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    nowShowingText: {
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    nowShowingFirst: {
        flex: 1,
    },
    contentNowShowing: {
        paddingHorizontal: 10,
    },
    imageSection: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        padding: 10,
        marginLeft: 10,
    },
    upcomingImage: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 10,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 30,
    },
    contentUpcoming: {
        paddingHorizontal: 10,
        marginTop: 40,
    },
    textUpcoming: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    upcomingMonth: {
        borderStyle: 'solid',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#97DECE',
        padding: 5,
        marginLeft: 10,
        marginTop: 10,
    },
    mailsContent: {
        backgroundColor: '#F5F5F5',
        marginTop: 40,
        marginHorizontal: 10,
        elevation: 10,
    },
});
export default Home;
