import React from 'react';
import {FlatList, Text, Box, HStack} from 'native-base';
import {Pressable} from 'react-native';

const seatArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const GridSeat = ({max = 7, startNum = 1, onChange, selected}) => {
    return (
        <FlatList
            ItemSeparatorComponent={() => <Box height={2} />}
            data={seatArray}
            renderItem={({item}) => (
                <HStack space={2}>
                    {[...Array(max)].map((_v, index) => {
                        return (
                            <Pressable
                                onPress={() =>
                                    onChange(item.concat(startNum + index))
                                }>
                                <Box
                                    w="18px"
                                    h="18px"
                                    backgroundColor={
                                        selected.includes(
                                            item.concat(startNum + index),
                                        )
                                            ? '#439A97'
                                            : '#EEEEEE'
                                    }
                                    borderRadius="2"
                                />
                            </Pressable>
                        );
                    })}
                </HStack>
            )}
        />
    );
};

export default GridSeat;
