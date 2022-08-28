
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { MovieDetails } from '../../Components/MovieDetails';
import { getMovieDetail, addToWishlist, removeFromWishlist } from '../../Store/Actions/moviesActions';

import styled from 'styled-components/native';
import { Title } from '../../Components/styled/Title';


export const Button = styled.TouchableOpacity`
background-color: gold
  width: 100%
  height:50px
  border-radius: 10px
  align-items: center
  justify-content: center
  ${({ isInWishlist }) => isInWishlist && `background-color: black`}
`;




const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({ route }) => {

    const dispatch = useAppDispatch()
    const { isLoading, movieDetails, wishlist } = useAppSelector(state => state)

    const { movie } = route.params;
    const { title } = route.params
    const isInWishlist = wishlist?.some(e => e.id === movie.id)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const { cast, movieData } = movieDetails || {}



    useEffect(() => {
        dispatch(getMovieDetail(movie.id));
    }, []);


    const switchWishlistState = (movie) => {
        if (isInWishlist) {
            dispatch(removeFromWishlist(movie))
        } else {
            dispatch(addToWishlist(movie))
        }
    }


    return (
        <SafeAreaView edges={['right', 'bottom', 'left']}>
            <ScrollView>
                <View style={{ flexDirection: "row", padding: 15 }}>
                    <View style={styles.imageContainer}>

                        <View style={styles.imageBorder}>

                            <Image
                                source={{ uri }}
                                style={styles.posterImage}
                            />
                        </View>
                    </View>
                    <View style={styles.imageContainer1}>

                        <View>
                            <View style={{ paddingBottom: 15 }}>
                                <Text style={styles.title}>{movie.title}</Text>
                            </View>


                            <View style={{ flexDirection: 'row', flexWrap: "wrap", paddingBottom: 3 }}>
                                <Icon name="star" color="gold" size={16} />
                                <Text> {movieData?.vote_count}</Text>
                            </View>

                            <View style={{ paddingBottom: 3 }}>
                                <Text>Category: {title}</Text>
                            </View>

                            <Text >
                                {movieData?.genres.map(g => g.name).join(', ')}
                            </Text>
                        </View>
                        {
                            (title === "Top Rated") &&
                            <Image
                                style={{
                                    width: "100%",
                                    height: 40,
                                }}
                                source={require('../../Assets/Images/top.png')}
                            />
                        }
                        <Button isInWishlist={isInWishlist} onPress={() => switchWishlistState(movie)}>
                            <Title size={"16px"}> {isInWishlist ? "Remove from wishlist" : "Add to wishlist"}</Title>
                        </Button>
                    </View>
                </View>

                {
                    isLoading && movieDetails
                        ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                        : <MovieDetails movieData={movieData!} cast={cast} />
                }

            </ScrollView>
        </SafeAreaView >
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    imageContainer: {
        margin: 10,
        width: '45%',
        height: screenHeight * 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageContainer1: {
        margin: 10,
        width: '45%',
        height: screenHeight * 0.3,
        justifyContent: "space-between"

    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 25
    },
    posterImage: {
        flex: 1,
    },

    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 45,
        paddingHorizontal: 20,

    },

});