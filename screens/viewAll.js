import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {Button, Input, Text, Box} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';

const ViewAll = ({navigation}) => {
    return (
        <ScrollView>
            <View>
                <Navbar />
                {/* Konten */}
                <View style={{backgroundColor: '#F5F6F8'}}>
                    <Text pl="18" fontSize="18" pt="5">
                        List Movie
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingLeft: 17,
                            marginTop: 10,
                        }}>
                        <Input
                            variant="rounded"
                            w={{
                                base: '30%',
                                md: '25%',
                            }}
                            placeholder="Sort"
                        />
                        <View style={{width: '90%', marginLeft: 20}}>
                            <Input
                                variant="rounded"
                                w={{
                                    base: '50%',
                                    md: '25%',
                                }}
                                placeholder="Search Movie Name"
                            />
                        </View>
                    </View>
                    <Box mt="5">
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
                    </Box>
                    {/* Grid Film */}
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.upcomingImage}>
                                <Image
                                    source={require('../src/images/upcoming-1.png')}
                                />
                                <Text
                                    style={{textAlign: 'center', marginTop: 5}}>
                                    Black Widow
                                </Text>
                                <Text>Action, Adventure, Sci-Fi</Text>
                                <Button
                                    style={{marginTop: 5}}
                                    onPress={() =>
                                        navigation.navigate('MovieDetails')
                                    }>
                                    Details
                                </Button>
                            </View>
                            <View style={styles.upcomingImage}>
                                <Image
                                    source={require('../src/images/upcoming-2.png')}
                                />
                                <Text
                                    style={{textAlign: 'center', marginTop: 5}}>
                                    The Witches
                                </Text>
                                <Text>Adventure, Comedy, Family</Text>
                                <Button
                                    style={{marginTop: 5}}
                                    onPress={() =>
                                        navigation.navigate('MovieDetails')
                                    }>
                                    Details
                                </Button>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.upcomingImage}>
                                <Image
                                    source={require('../src/images/upcoming-1.png')}
                                />
                                <Text
                                    style={{textAlign: 'center', marginTop: 5}}>
                                    Black Widow
                                </Text>
                                <Text>Action, Adventure, Sci-Fi</Text>
                                <Button style={{marginTop: 5}}>Details</Button>
                            </View>
                            <View style={styles.upcomingImage}>
                                <Image
                                    source={require('../src/images/upcoming-2.png')}
                                />
                                <Text
                                    style={{textAlign: 'center', marginTop: 5}}>
                                    The Witches
                                </Text>
                                <Text>Adventure, Comedy, Family</Text>
                                <Button
                                    style={{marginTop: 5}}
                                    onPress={() =>
                                        navigation.navigate('MovieDetails')
                                    }>
                                    Details
                                </Button>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 15,
                            }}>
                            <Button style={{width: '10%'}}>1</Button>
                            <Button style={{width: '10%', marginLeft: 7}}>
                                2
                            </Button>
                            <Button style={{width: '10%', marginLeft: 7}}>
                                3
                            </Button>
                            <Button style={{width: '10%', marginLeft: 7}}>
                                4
                            </Button>
                        </View>
                    </View>
                    {/* Grid Film End */}
                </View>
            </View>
            <Footer />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    upcomingMonth: {
        borderStyle: 'solid',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#97DECE',
        padding: 5,
        marginLeft: 10,
        marginTop: 10,
    },
    upcomingImage: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginLeft: 5,
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'center',
        alignContent: 'center',
    },
});
export default ViewAll;
