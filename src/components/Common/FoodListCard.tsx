import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FoodListDto, HomeScreenNavigationProp } from '../../common/types';
import { AddFoodListDto } from '../../common/types';
import ListItem from './ListItem';

interface FoodListCardProps {
    foodList: FoodListDto;
    onDelete: () => void;
    onUpdate:()=>void;
}

const FoodListCard: React.FC<FoodListCardProps> = ({ foodList, onDelete,onUpdate }) => {
    // const navigation = useNavigation<HomeScreenNavigationProp>();

    // const navigateToDetail = () => {
       
    // };

    return (
        <TouchableOpacity >
            <View style={styles.card}>
            <TouchableOpacity onPress={onUpdate} style={styles.deleteButton}>
                    <MaterialIcons name="edit" size={24} color="red" />
                </TouchableOpacity>
                <ListItem label="List Name" value={foodList.listName} />
                <ListItem label="List Code" value={foodList.listCode} />
                <ListItem label="List Value" value={foodList.listValue} />
                <ListItem label="Description" value={foodList.description} />
                <ListItem label="Updated By" value={foodList.updatedBy} />
                <ListItem label="Added By" value={foodList.addedBy} />
                <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                    <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

// interface ListItemProps {
//     label: string;
//     value: string | undefined;
// }

// const ListItem: React.FC<ListItemProps> = ({ label, value }) => (
//     <View style={styles.infoContainer}>
//         <Text style={styles.label}>{label}:</Text>
//         <Text style={styles.value}>{value}</Text>
//     </View>
// );

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    value: {
        flex: 1,
    },
    deleteButton: {
        alignSelf: 'flex-end',
    },
});

export default FoodListCard;
