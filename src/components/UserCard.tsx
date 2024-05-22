import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp, RootStackParamList, User, UserCardProps } from '../common/types';

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    const { firstName, email } = user;

    const navigateToDetail = () => {
        navigation.navigate('Detail', { user });
    };

    return (
        <TouchableOpacity onPress={navigateToDetail}>
            <View style={styles.card}>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{firstName}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
                <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                    <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    deleteButton: {
        marginLeft: 16,
    },
});

export default React.memo(UserCard);
