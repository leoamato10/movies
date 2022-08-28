import React from 'react'
import { FlatList } from 'react-native';

import { Title } from './styled/Title';
import { MoviePoster } from './MoviePoster';
import { Movie } from '../Types/MoviesTypes';

interface Props {
    title?: string;
    movies: Movie[];
    hasRemoveButton?: boolean;

}


export const Slider = ({ title, movies, hasRemoveButton }: Props) => {


    const renderItem = ({ item }) => (
        <MoviePoster movie={item} width={150} height={200} hasRemoveButton={hasRemoveButton} />
    )

    return (
        <>
            <Title>{title}</Title>
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
