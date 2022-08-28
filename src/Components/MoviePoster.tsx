import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../Navigators/RootNavigator';
import { Movie } from '../Types/MoviesTypes';
import { Button } from './styled/Button';
import { Title } from './styled/Title';
import { useAppDispatch } from '../Types/Redux';
import { removeFromWishlist } from '../Store/Actions/moviesActions';
import { Parragraph } from './styled/Parragraph';


type DetailScreenNavigationProp = NativeStackNavigationProp<
    RootStackParams,
    'DetailScreen'
>;

interface Props {
    movie: Movie;
    height: number;
    width: number;
    hasRemoveButton?: boolean;
}

export const MoviePoster = ({ movie, height, width, hasRemoveButton }: Props) => {

    const dispatch = useAppDispatch()

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation<DetailScreenNavigationProp>();


    return (

        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('DetailScreen', movie)}
                activeOpacity={0.8}
                style={{
                    width,
                    height,
                    marginHorizontal: 2,
                    paddingBottom: 20,
                    paddingHorizontal: 7,
                    marginTop: 10
                }}
            >
                <View style={styles.imageContainer}>
                    <Image source={{ uri }} style={styles.image} />
                </View>

            </TouchableOpacity>
            {hasRemoveButton &&
                <Button onPress={() => dispatch(removeFromWishlist(movie))}>
                    <Title size={"18px"} >
                        Remove
                    </Title>
                </Button>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});