import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {Button, Input, FormControl} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const Home = ({navigation}) => {
    return (
        <ScrollView>
            <View>
                {/* Navbar */}
                <View style={styles.navbar}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../src/images/logo.png')}
                            style={{width: 100, height: 40}}
                        />
                    </View>
                    <View style={styles.menu}>
                        <Icon name="menu" size={20} />
                    </View>
                </View>
                {/* Navbar end */}

                {/* Konten Header */}
                <View>
                    <Text style={{paddingHorizontal: 15}}>
                        Nearest Cinema, Newest Movie,
                    </Text>
                    <Text style={{paddingHorizontal: 15}}>Find Out Now</Text>
                    <View style={{paddingHorizontal: 15}}>
                        <Image
                            source={require('../src/images/header.png')}
                            style={{width: 350, height: 400, marginTop: 10}}
                        />
                    </View>
                </View>
                {/* Konten header end */}

                {/* Konten Now Showing */}
                <View
                    style={{
                        backgroundColor: '#97DECE',
                        paddingTop: 25,
                        paddingBottom: 40,
                    }}>
                    <View style={styles.nowShowingText}>
                        <Text style={styles.nowShowingFirst}>Now Showing</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ViewAll')}>
                            <Text>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} style={{marginTop: 20}}>
                        <View style={styles.imageSection}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ViewAll')}>
                                <Image
                                    source={require('../src/images/now-1.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageSection}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ViewAll')}>
                                <Image
                                    source={require('../src/images/now-2.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.imageSection}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ViewAll')}>
                                <Image
                                    source={require('../src/images/now-3.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
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
                                    navigation.navigate('PaymentPage')
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
                <View style={{marginTop: 40}}>
                    <View>
                        <Image
                            source={require('../src/images/logo.png')}
                            style={{width: 150, height: 40}}
                        />
                    </View>
                    <View style={{marginTop: 15, paddingHorizontal: 10}}>
                        <Text>Stop waiting in line.</Text>
                        <Text>
                            Buy tickets conveniently, watch movies quietly.
                        </Text>
                    </View>
                    <View style={{marginTop: 15, paddingHorizontal: 10}}>
                        <View>
                            <Text>Explore</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginRight: 40}}>Home</Text>
                            <Text>List Movie</Text>
                        </View>
                        <View>
                            <View style={{marginTop: 15}}>
                                <Text>Our Sponsor</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    paddingRight: 10,
                                }}>
                                <Image
                                    source={require('../src/images/footer-1.png')}
                                    style={{width: 70, height: 25}}
                                />
                                <Image
                                    source={require('../src/images/footer-2.png')}
                                    style={{
                                        width: '50%',
                                        height: 25,
                                        marginLeft: 15,
                                    }}
                                />
                                <Image
                                    source={require('../src/images/footer-3.png')}
                                    style={{
                                        width: 75,
                                        height: 25,
                                        marginLeft: 15,
                                    }}
                                />
                            </View>
                            <View style={{marginTop: 15}}>
                                <View>
                                    <Text>Follow Us</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 15,
                                    }}>
                                    <Icon
                                        name="facebook"
                                        size={25}
                                        style={{marginRight: 10}}
                                    />
                                    <Icon
                                        name="instagram"
                                        size={25}
                                        style={{marginRight: 10}}
                                    />
                                    <Icon
                                        name="twitter"
                                        size={25}
                                        style={{marginRight: 10}}
                                    />
                                    <Icon name="youtube" size={25} />
                                </View>
                            </View>
                            <View style={{marginTop: 15}}>
                                <Text>
                                    &copy; 2023 movietify. All Rights Reserved.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
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
