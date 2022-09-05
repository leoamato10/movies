import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View, ScrollView } from 'react-native';
import Lottie from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import {
  getMovieDetail,
  addToWishlist,
  removeFromWishlist
} from '../../Store/Actions/moviesActions';

import { Title, Parragraph, Container } from '../../Components/styled';
import { MovieDetails } from '../../Components/MovieDetails';
import {
  CustomButton,
  CustomButtonText,
  CustomContainer
} from './DetailScreenStyles';
import { styles } from './DetailScreenStyles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Navigators/RootNavigator';
import { Movie } from '../../Types/MoviesTypes';

type Props = NativeStackScreenProps<RootStackParams, 'DetailScreen'>;

const DetailScreen = ({ route }: Props) => {
  const dispatch = useAppDispatch();
  const { isLoading, movieDetails, wishlist } = useAppSelector(state => state);

  const { movie, filmCategory } = route.params;
  const { id } = movie;
  const { cast, movieData } = movieDetails || {};
  const isInWishlist = wishlist?.some(e => e.id === movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  const switchWishlistState = (movie: Movie) => {
    isInWishlist
      ? dispatch(removeFromWishlist(movie))
      : dispatch(addToWishlist(movie));
  };

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <ScrollView>
        <View style={{ flexDirection: 'row', padding: 15 }}>
          {/* IMAGE AREA*/}
          <View style={styles.imageContainer}>
            <View style={styles.imageBorder}>
              <Image source={{ uri }} style={styles.posterImage} />
            </View>
          </View>

          {/* BUTTON AND DESCRIPTION AREA */}
          <CustomContainer>
            <Container>
              {filmCategory === 'Top Rated' && (
                <Image
                  style={{ width: '100%', height: 40 }}
                  source={require('../../Assets/Images/top.png')}
                />
              )}

              <View style={{ paddingBottom: 10, paddingTop: 5 }}>
                <Title numberOfLines={2}>{movie.title}</Title>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Icon name="star" color="gold" size={16} />
                <Parragraph size={'16px'}> {movieData?.vote_count}</Parragraph>
              </View>

              <Parragraph>
                {movieData?.genres.map(g => g.name).join(', ')}
              </Parragraph>
            </Container>

            <CustomButton
              isInWishlist={isInWishlist}
              filmCategory={filmCategory}
              onPress={() => switchWishlistState(movie)}>
              <CustomButtonText
                size={'16px'}
                filmCategory={filmCategory}
                isInWishlist={isInWishlist}>
                {isInWishlist ? 'Remove' : 'Add to wishlist'}
              </CustomButtonText>
            </CustomButton>
          </CustomContainer>
        </View>

        {/* ADDITIONAL INFO AREA */}
        {isLoading && movieDetails ? (
          <Container centered style={styles.infoAreaContainer}>
            <Lottie
              source={require('../../Assets/Animations/loading.json')}
              autoPlay
              loop
              style={{ width: 100 }}
            />
          </Container>
        ) : (
          <MovieDetails
            movieData={movieData!}
            cast={cast}
            filmCategory={filmCategory}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
