
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { getMovieDetail, addToWishlist, removeFromWishlist } from '../../Store/Actions/moviesActions';

import styled from 'styled-components/native';
import defaultTheme from "../../Theme/theme"
import { Title, Button, Parragraph, Container } from '../../Components/styled';
import { MovieDetails } from '../../Components/MovieDetails';



const { screenHeight } = defaultTheme.screenDimensions

const CustomContainer = styled(Container)`
margin: 10px;
width: 45%;
height: ${screenHeight * 0.3 + "px"};
justify-content: space-between;
`;


const CustomButton = styled(Button)`
${({ filmCategory }) => filmCategory === "Top Rated" && `background-color: #d13f51`}
${({ isInWishlist }) => isInWishlist && `background-color: black`}
`;

const CustomButtonText = styled(Title)`
${({ filmCategory }) => filmCategory === "Top Rated" && `color: white`}
${({ isInWishlist }) => isInWishlist && `background-color: black`}
`;



const DetailScreen = ({ route }) => {

    const dispatch = useAppDispatch()
    const { isLoading, movieDetails, wishlist } = useAppSelector(state => state)

    const { movie, filmCategory } = route.params;
    const { id } = movie
    const { cast, movieData } = movieDetails || {}
    const isInWishlist = wishlist?.some(e => e.id === movie.id)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;


    useEffect(() => {
        dispatch(getMovieDetail(id));
    }, []);

    console.log('cfilmCategory === "Top Rated"', filmCategory === "Top Rated");
    const switchWishlistState = (movie) => {
        isInWishlist ?
            dispatch(removeFromWishlist(movie))
            : dispatch(addToWishlist(movie))
    }


    return (
        <SafeAreaView edges={['right', 'bottom', 'left']}>
            <ScrollView>

                <View style={{ flexDirection: "row", padding: 15 }}>

                    {/* IMAGE AREA*/}
                    <View style={styles.imageContainer}>
                        <View style={styles.imageBorder}>
                            <Image
                                source={{ uri }}
                                style={styles.posterImage}
                            />
                        </View>
                    </View>

                    {/* BUTTON AND DESCRIPTION AREA */}
                    <CustomContainer>
                        <Container>

                            {
                                (filmCategory === "Top Rated") &&
                                <Image
                                    style={{
                                        width: "100%",
                                        height: 40,

                                    }}
                                    source={require('../../Assets/Images/top.png')}
                                />
                            }

                            <View style={{ paddingBottom: 10, paddingTop: 15 }}>
                                <Title>{movie.title}</Title>
                            </View>


                            <View style={{ flexDirection: 'row', flexWrap: "wrap", paddingBottom: 3 }}>
                                <Icon name="star" color="gold" size={16} />
                                <Parragraph size={"16px"}>  {movieData?.vote_count}</Parragraph>
                            </View>



                            <Parragraph >
                                {movieData?.genres.map(g => g.name).join(', ')}
                            </Parragraph>
                        </Container>

                        <CustomButton
                            isInWishlist={isInWishlist}
                            filmCategory={filmCategory}
                            onPress={() => switchWishlistState(movie)}>
                            <CustomButtonText
                                size={"16px"}
                                filmCategory={filmCategory}
                                isInWishlist={isInWishlist}>
                                {isInWishlist ? "Remove" : "Add to wishlist"}
                            </CustomButtonText>
                        </CustomButton>
                    </CustomContainer>
                </View>

                {/* ADDITIONAL INFO AREA */}
                {
                    isLoading && movieDetails
                        ? <Container centered style={{ height: screenHeight / 2, justifyContent: "center" }} >
                            <Lottie source={require('../../Assets/Animations/loading.json')} autoPlay loop style={{ width: 100 }} />
                        </Container>
                        : <MovieDetails movieData={movieData!} cast={cast} filmCategory={filmCategory} />
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