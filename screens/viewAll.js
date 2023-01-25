import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
    Button,
    Input,
    Text,
    Box,
    Stack,
    Select,
    CheckIcon,
    HStack,
    VStack,
    Image,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Navbar from './navbar';
import Footer from '../src/components/footer';
import http from '../src/helpers/http';
import MonthList from './MonthList';

const ViewAll = ({navigation}) => {
    const [sort, setSort] = React.useState('');
    const [movies, setMovies] = React.useState([]);
    const [search, setSearch] = React.useState([]);

    const getAllMovies = async () => {
        try {
            const {data} = await http().get(`/movies?search=${search}`);
            setMovies(data.result);
        } catch (error) {
            console.log(error.response);
        }
    };

    React.useEffect(() => {
        getAllMovies();
    }, [search]);
    return (
        <FlatList
            style={{flex: 1}}
            ListHeaderComponent={
                <>
                    <Navbar />
                    <Box>
                        <Stack>
                            <Text fontSize="18" fontWeight="semibold">
                                List Movie
                            </Text>
                        </Stack>
                        <VStack space="3" px="3">
                            <Select
                                variant="rounded"
                                selectedValue={sort}
                                width="90%"
                                accessibilityLabel="Choose Service"
                                placeholder="Sort"
                                _selectedItem={{
                                    bg: 'teal.600',
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={itemValue => setSort(itemValue)}>
                                <Select.Item label="Title" value="title" />
                                <Select.Item
                                    label="Created At"
                                    value="createdAt"
                                />
                                <Select.Item
                                    label="Updated At"
                                    value="updatedAt"
                                />
                            </Select>
                            <HStack space="3">
                                <Input
                                    variant="rounded"
                                    placeholder="Search Movie Name"
                                    width="90%"
                                    // value={search}
                                    onChangeText={e => setSearch(e)}
                                />
                                {/* <Button onPress={getAllMovies}>Search</Button> */}
                            </HStack>
                        </VStack>
                        <Stack>
                            <MonthList />
                        </Stack>
                        <Stack>
                            <FlatList
                                data={movies}
                                keyExtractor={item => item.id}
                                numColumns={2}
                                key={item => item.id}
                                renderItem={({item}) => {
                                    return (
                                        <Stack
                                            flex="1"
                                            direction="column"
                                            space="2">
                                            <Box
                                                height="400px"
                                                mt="2"
                                                mx="3"
                                                backgroundColor="white"
                                                borderWidth="1"
                                                borderColor="#dedede"
                                                borderRadius="4"
                                                px="3"
                                                py="3">
                                                <Image
                                                    source={{
                                                        uri: item.picture,
                                                    }}
                                                    width="160px"
                                                    height="250px"
                                                    resizeMode="contain"
                                                    alt="Alternate Text"
                                                />
                                                <Stack alignItems="center">
                                                    <Text>{item.title}</Text>
                                                </Stack>
                                                <Stack mt="5">
                                                    <Button>Details</Button>
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    );
                                }}
                            />
                        </Stack>
                        <Stack
                            direction="row"
                            space={3}
                            alignItems="center"
                            justifyContent="center"
                            my="5">
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>4</Button>
                        </Stack>
                    </Box>
                    <Footer />
                </>
            }
        />
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
