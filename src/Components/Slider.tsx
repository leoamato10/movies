import React from 'react'
import { FlatList } from 'react-native';

import { Title } from './styled/Title';
import { MoviePoster } from './MoviePoster';


export const Slider = ({ title, movies }) => {

    const renderItem = ({ item }: any) => (
        <MoviePoster movie={item} width={150} height={200} />
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
