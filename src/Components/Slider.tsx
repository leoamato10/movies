import React from 'react'
import { FlatList } from 'react-native';
import { Movie } from '../Types/MoviesTypes';

import { Title } from './styled';
import { MoviePoster } from './MoviePoster';

interface Props {
    filmCategory: string;
    movies: Movie[];
    hasRemoveButton?: boolean;
    testID?: string;
}


export const Slider = ({ filmCategory, movies, hasRemoveButton }: Props) => {


    const renderItem = ({ item }) => (
        <MoviePoster
            movie={item}
            filmCategory={filmCategory}
            hasRemoveButton={hasRemoveButton}
        />
    )

    return (
        <>
            <Title>{filmCategory}</Title>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}
