import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import FoodListCard from '../../components/Common/FoodListCard';
import { useFetchFoodList } from '../../hooks/useFetchFoodList';
import { useDeleteFoodList } from '../../hooks/useDeleteFoodList';
import { useNavigation } from '@react-navigation/native';
import { FoodListDto, HomeScreenNavigationProp } from '../../common/types';

export default function HomeScreen() {
    const { foodListData,searchFoodList } = useFetchFoodList('GetFoodList');

    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { onDelete } = useDeleteFoodList('delete');

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<FoodListDto[]>([]);
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setFilteredData(foodListData);
    }, [foodListData]);

    const onUpdate = (foodlist: FoodListDto) => {
        navigation.navigate('UpdateFoodList', { FoodList: foodlist });
    };

    const updateSearch = (searchValue: string) => {
        setSearch(searchValue);
        if (debounceTimeout) {
            clearTimeout(debounceTimeout);
        }
        setDebounceTimeout(
            setTimeout(() => {
                if (searchValue) {
                    searchFoodList(searchValue);
                } else {
                    setFilteredData(foodListData);
                }
            }, 2000)
        );
    };

    useEffect(() => {
        if (!search) {
            setFilteredData(foodListData);
        }
    }, [foodListData, search]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Type Here..."
                value={search}
                onChangeText={updateSearch}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.listCode}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <FoodListCard foodList={item} onDelete={() => onDelete(item.listCode)} onUpdate={() => onUpdate(item)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#eaeaea',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        paddingLeft: 10,
        backgroundColor: '#f9f9f9',
    },
    cardContainer: {
        marginTop: 5,
    },
});
