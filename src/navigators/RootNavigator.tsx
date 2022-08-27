
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import DetailScreen from '../Containers/DetailScreen/DetailScreen';
import WhishListScreen from '../Containers/WhishListScreen/WhishListScreen';
import defaultTheme from '../Theme/theme';
import { Movie } from '../Types/MoviesTypes';



export type RootStackParams = {
    HomeScreen;
    DetailScreen;
    WhishListScreen;
}


const Stack = createNativeStackNavigator<RootStackParams>()
const headerOptions = {
    headerStyle: {
        backgroundColor: defaultTheme.colors.primary,
    },
    headerBackTitleVisible: false,
    headerTintColor: '#fff',
    headerTitleAlign: "center",
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 23,
    },
}

const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={headerOptions}>
                <Stack.Screen name="HomeScreen" options={{ title: 'Movies' }} component={HomeScreen} />
                <Stack.Screen name="DetailScreen" options={({ route }) => ({ title: route.params.title })} component={DetailScreen} />
                <Stack.Screen name="WhishListScreen" options={{ title: 'Whishlist' }} component={WhishListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator