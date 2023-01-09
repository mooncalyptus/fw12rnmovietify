import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Button, Input, FormControl} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const Footer = () => {
    return (
        <View style={{marginTop: 40}}>
            <View>
                <Image
                    source={require('../images/logo.png')}
                    style={{width: 150, height: 40}}
                />
            </View>
            <View style={{marginTop: 15, paddingHorizontal: 10}}>
                <Text>Stop waiting in line.</Text>
                <Text>Buy tickets conveniently, watch movies quietly.</Text>
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
                            source={require('../images/footer-1.png')}
                            style={{width: 70, height: 25}}
                        />
                        <Image
                            source={require('../images/footer-2.png')}
                            style={{width: '50%', height: 25, marginLeft: 15}}
                        />
                        <Image
                            source={require('../images/footer-3.png')}
                            style={{width: 75, height: 25, marginLeft: 15}}
                        />
                    </View>
                    <View style={{marginTop: 15}}>
                        <View>
                            <Text>Follow Us</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
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
                        <Text>&copy; 2023 movietify. All Rights Reserved.</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Footer;
