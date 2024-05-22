import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../common/types';
import { User } from '../../common/types'; // Import User type

// Define the route prop for DetailScreen
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;


type DetailScreenProps = {
    route: DetailScreenRouteProp;
};

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
    // Extract the user object from route params
    const { user } = route.params;

    return (
        <View>
            <Text>Name: {user.firstName}</Text>
            <Text>Email: {user.email}</Text>
            {/* Additional details */}
        </View>
    );
};

export default DetailScreen;
