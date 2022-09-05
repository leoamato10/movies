import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Movie } from '../Types/MoviesTypes';

import { Title } from './styled';
import { MoviePoster } from './MoviePoster';

interface Props {
  filmCategory: string;
  movies: Movie[];
  hasRemoveButton?: boolean;
}

export const Slider = ({ filmCategory, movies, hasRemoveButton }: Props) => {
  const renderItem: ListRenderItem<Movie> = ({ item }) => (
    <MoviePoster
      movie={item}
      filmCategory={filmCategory}
      hasRemoveButton={hasRemoveButton}
    />
  );

  return (
    <>
      <Title>{filmCategory}</Title>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
