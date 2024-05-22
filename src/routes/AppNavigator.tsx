// In AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from './MainStack';
import DetailScreen from '../screens/userScreen/DetailScreen';
import { RootStackParamList, User } from '../common/types';

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
                <Stack.Screen name="Detail" component={DetailScreen} initialParams={{ user: {} as User }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
