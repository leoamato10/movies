
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import DetailScreen from '../Containers/DetailScreen/DetailScreen';
import WhishListScreen from '../Containers/WhishListScreen/WhishListScreen';

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
                <Stack.Screen name="WhishListScreen" component={WhishListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator