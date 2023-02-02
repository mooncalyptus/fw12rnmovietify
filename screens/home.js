import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, FlatList} from 'react-native';
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
    Stack,
    Image,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import http from '../src/helpers/http';
import MonthList from './MonthList';

const Home = ({navigation}) => {
    const [focus, setFocus] = React.useState(null);
    const [nowShowing, setNowShowing] = React.useState([]);
    const [upcoming, setUpcoming] = React.useState([]);

    const toggleFocus = id => {
        if (focus === id) {
            setFocus(null);
        } else {
            setFocus(id);
        }
    };

    const getUpcoming = async () => {
        try {
            const {data} = await http().get('/movies/upcoming');
            setUpcoming(data.results);
            // return data;
        } catch (error) {
            console.log(error.response);
        }
    };

    const getNowShowing = async () => {
        try {
            const {data} = await http().get('/movies/nowShowing');
            console.log(data);
            setNowShowing(data?.results);
        } catch (error) {
            console.log(error.response);
        }
    };
    console.log(nowShowing[0]);
    React.useEffect(() => {
        getUpcoming();
        getNowShowing();
    }, []);
    return (
        <FlatList
            style={{flex: 1}}
            // data={upcoming}
            ListHeaderComponent={
                <>
                    <Navbar />
                    <Box>
                        <Stack px="15" pt="10" pb="80px">
                            <Stack>
                                <Text fontSize="20" color="#A0A3BD">
                                    Nearest Cinema, Newest Movie,
                                </Text>
                                <Text
                                    fontSize="32"
                                    color="#97DECE"
                                    fontWeight="bold">
                                    Find Out Now
                                </Text>
                            </Stack>
                            <Stack>
                                <Image
                                    source={require('../src/images/header.png')}
                                    style={{
                                        width: 350,
                                        height: 400,
                                        marginTop: 10,
                                    }}
                                />
                            </Stack>
                        </Stack>
                        <Stack backgroundColor="#97DECE" pb="10">
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                p="10">
                                <Text
                                    fontSize="18"
                                    fontWeight="bold"
                                    color="white">
                                    Now Showing
                                </Text>
                                <Stack pt="0.5">
                                    <Text
                                        fontSize="14"
                                        fontWeight="bold"
                                        color="white">
                                        view all
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack>
                                <FlatList
                                    data={nowShowing}
                                    horizontal={true}
                                    renderItem={({item: nowShowing}) => {
                                        return (
                                            <Stack
                                                space="3"
                                                px="5"
                                                pb="5"
                                                height={focus ? 400 : 'auto'}>
                                                <Pressable
                                                    key={nowShowing.id}
                                                    onPress={() =>
                                                        toggleFocus(
                                                            nowShowing.id,
                                                        )
                                                    }>
                                                    <Box
                                                        borderWidth="1"
                                                        bg={
                                                            focus ===
                                                            nowShowing.id
                                                                ? 'white'
                                                                : 'transparent'
                                                        }
                                                        borderColor={
                                                            focus ===
                                                            nowShowing.id
                                                                ? '#dedede'
                                                                : 'white'
                                                        }
                                                        borderRadius="4"
                                                        px={
                                                            focus ===
                                                            nowShowing.id
                                                                ? '3'
                                                                : '3'
                                                        }
                                                        pt={
                                                            focus ===
                                                            nowShowing.id
                                                                ? '3'
                                                                : '3'
                                                        }
                                                        pb={
                                                            focus ===
                                                            nowShowing.id
                                                                ? '5'
                                                                : '3'
                                                        }>
                                                        <Image
                                                            source={{
                                                                uri: nowShowing.picture,
                                                            }}
                                                            width="160px"
                                                            height="250px"
                                                            resizeMode="contain"
                                                            alt="Alternate Text"
                                                        />
                                                        <Box position="relative">
                                                            {focus ===
                                                                nowShowing.id && (
                                                                <Box
                                                                    pt="5"
                                                                    px="2"
                                                                    // pb="5"
                                                                    bg="white"
                                                                    width="full">
                                                                    <VStack
                                                                        space={
                                                                            2
                                                                        }
                                                                        justifyContent="center"
                                                                        alignItems="center">
                                                                        <Box
                                                                            width="80px"
                                                                            ml="2">
                                                                            <Text>
                                                                                {
                                                                                    nowShowing.title
                                                                                }
                                                                            </Text>
                                                                        </Box>
                                                                        <Button
                                                                            onPress={() =>
                                                                                navigation.navigate(
                                                                                    'ViewAll',
                                                                                )
                                                                            }>
                                                                            Details
                                                                        </Button>
                                                                    </VStack>
                                                                </Box>
                                                            )}
                                                        </Box>
                                                    </Box>
                                                </Pressable>
                                            </Stack>
                                        );
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Box>
                    <Box>
                        <HStack justifyContent="space-between" px="10" py="5">
                            <Text fontSize="18" fontWeight="bold">
                                Upcoming Movies
                            </Text>
                            <Text fontSize="14" fontWeight="bold" mt="0.5">
                                view all
                            </Text>
                        </HStack>
                        <Stack>
                            <MonthList />
                        </Stack>
                        <Stack pb="10">
                            <FlatList
                                horizontal
                                data={upcoming}
                                renderItem={({item: upcoming}) => {
                                    return (
                                        <>
                                            <Stack space="3">
                                                <Box
                                                    height="400px"
                                                    mx="3"
                                                    backgroundColor="white"
                                                    borderWidth="1"
                                                    borderColor="#dedede"
                                                    borderRadius="4"
                                                    px="3"
                                                    py="3">
                                                    <Image
                                                        source={{
                                                            uri: upcoming.picture,
                                                        }}
                                                        width="160px"
                                                        height="250px"
                                                        resizeMode="contain"
                                                        alt="Alternate Text"
                                                    />
                                                    <Stack
                                                        width="150px"
                                                        alignItems="center"
                                                        my="5">
                                                        <Text>
                                                            {upcoming?.title}
                                                        </Text>
                                                    </Stack>
                                                    <Stack>
                                                        <Button>Details</Button>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </>
                                    );
                                }}
                            />
                        </Stack>
                    </Box>
                    <Box mb="7">
                        <Stack
                            backgroundColor="white"
                            justifyContent="center"
                            space="5"
                            py="6"
                            px="5"
                            mx="5"
                            shadow="5"
                            borderRadius="4">
                            <Stack alignItems="center">
                                <Text fontSize="14">
                                    Be the vanguard of the
                                </Text>
                                <Text
                                    fontSize="32"
                                    fontWeight="bold"
                                    color="#97DECE">
                                    Moviegoers
                                </Text>
                            </Stack>
                            <Stack alignItems="center">
                                <Input
                                    variant="outline"
                                    placeholder="Enter your email"
                                    width="90%"
                                />
                            </Stack>
                            <Stack alignItems="center">
                                <Button
                                    width="90%"
                                    onPress={() =>
                                        navigation.navigate('ViewAll')
                                    }>
                                    Join Now
                                </Button>
                            </Stack>
                            <Stack alignItems="center">
                                <Text color="#6E7191">
                                    By joining you as a Tickitz member,
                                </Text>
                                <Text color="#6E7191">
                                    we will always send you the
                                </Text>
                                <Text color="#6E7191">
                                    latest updates via email .
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                    <Footer />
                </>
            }
        />
    );
};

export default Home;
