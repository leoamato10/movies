import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../Navigators/RootNavigator';
import { useAppDispatch } from '../Types/Redux';
import { removeFromWishlist } from '../Store/Actions/moviesActions';

import styled from 'styled-components/native';
import { Button, Title } from './styled/';
import { Movie } from '../Types/MoviesTypes';

const PosterButton = styled.TouchableOpacity`
  margin-horizontal: 2px;
  padding-bottom: 20px;
  padding-horizontal: 7px;
  margin-top: 10px;
  width: 150px;
  height: 200px;
`;

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParams,
  'DetailScreen'
>;

interface Props {
  movie: Movie;
  filmCategory: string;
  hasRemoveButton?: boolean;
}

export const MoviePoster = ({
  movie,
  hasRemoveButton,
  filmCategory
}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<DetailScreenNavigationProp>();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View>
      <PosterButton
        onPress={() =>
          navigation.navigate('DetailScreen', { movie, filmCategory })
        }
        activeOpacity={0.8}>
        <View style={styles.imageContainer}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </PosterButton>

      {hasRemoveButton && (
        <Button onPress={() => dispatch(removeFromWishlist(movie))}>
          <Title size={'18px'}>Remove</Title>
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9
  }
});
