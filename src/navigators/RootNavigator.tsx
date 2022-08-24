
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import DetailScreen from '../Containers/DetailScreen/DetailScreen';
import WhishListScreen from '../Containers/WhishListScreen/WhishListScreen';

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
            <Stack.Screen name="WhishListScreen" component={WhishListScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator