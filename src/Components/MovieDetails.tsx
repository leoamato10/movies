import React from 'react'
import { FlatList } from 'react-native';
import { MoviesDetailsCallResponse } from "../Types/MoviesDetailsTypes"

import { Container, Title, Parragraph } from './styled';
import { CastItem } from './CastItem';



export const MovieDetails = ({ movieData, cast }: MoviesDetailsCallResponse) => {

    return (
        <>
            <Container style={{ marginHorizontal: 20 }}>
                <Title size={"24px"} style={{ marginBottom: 10 }} >
                    Overview
                </Title>
                <Parragraph style={{ marginBottom: 20 }}>
                    {movieData?.overview}
                </Parragraph>

                <Title size={"24px"} >Casting</Title>
                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 15, height: 80 }}
                />
            </Container>
        </>
    )
}
