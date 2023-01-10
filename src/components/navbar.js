import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {Button, Input, FormControl} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <View style={styles.logo}>
                <Image
                    source={require('../images/logo.png')}
                    style={{width: 100, height: 40}}
                />
            </View>
            <View style={styles.menu}>
                <Icon name="menu" size={20} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    logo: {
        flex: 1,
    },
    menu: {
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default Navbar;
