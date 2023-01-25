import React from 'react';
import {FlatList} from 'react-native';
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

const month = [
    {
        id: '1',
        month: 'January',
    },
    {
        id: '2',
        month: 'February',
    },
    {
        id: '3',
        month: 'March',
    },
    {
        id: '4',
        month: 'April',
    },
    {
        id: '5',
        month: 'May',
    },
    {
        id: '6',
        month: 'June',
    },
    {
        id: '7',
        month: 'July',
    },
    {
        id: '8',
        month: 'August',
    },
    {
        id: '9',
        month: 'September',
    },
    {
        id: '10',
        month: 'October',
    },
    {
        id: '11',
        month: 'November',
    },
    {
        id: '12',
        month: 'December',
    },
];

const MonthList = () => {
    return (
        <Stack>
            <Box p="3" mx="3">
                <FlatList
                    horizontal
                    data={month}
                    renderItem={({item}) => {
                        return (
                            <Box>
                                <Button mx="3" variant="outline" color="white">
                                    {item.month}
                                </Button>
                                {/* <Text>{item.month}</Text> */}
                            </Box>
                        );
                    }}
                />
            </Box>
        </Stack>
    );
};

export default MonthList;
