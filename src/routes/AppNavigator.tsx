// In AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './MainStack';
import DetailScreen from '../screens/FoodListScreen/UpdateFoodListScreen';
import { AddFoodListDto, FoodListDto, RootStackParamList } from '../common/types';
import UpdateFoodListScreen from '../screens/FoodListScreen/UpdateFoodListScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeTabs"
                    component={HomeTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="UpdateFoodList" component={UpdateFoodListScreen} initialParams={{ FoodList: {} as FoodListDto }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
