// In HomeTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/FoodListScreen/HomeScreen';
import UserScreen from '../screens/FoodListScreen/UserScreen';
import AddScreen from '../screens/FoodListScreen/AddScreen';
import { HomeTabsParamList } from '../common/types';
import AddUserScreen from '../screens/FoodListScreen/AddScreen';

const Tab = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabs: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: 'home-outline' | 'person-outline' | 'add-circle-outline' = 'home-outline';

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'User') {
                        iconName = 'person-outline';
                    } else if (route.name === 'Add') {
                        iconName = 'add-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen}  />
            <Tab.Screen name="User" component={UserScreen} />
            <Tab.Screen name="Add" component={AddUserScreen} />
        </Tab.Navigator>
    );
};

export default HomeTabs;
