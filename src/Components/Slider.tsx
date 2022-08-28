import React from 'react'
import { FlatList } from 'react-native';
import { Movie } from '../Types/MoviesTypes';

import { Title } from './styled';
import { MoviePoster } from './MoviePoster';

interface Props {
    title: string;
    movies: Movie[];
    hasRemoveButton?: boolean;
}


export const Slider = ({ title, movies, hasRemoveButton }: Props) => {


    const renderItem = ({ item }) => (
        <MoviePoster
            movie={item}
            title={title}
            hasRemoveButton={hasRemoveButton}
        />
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
