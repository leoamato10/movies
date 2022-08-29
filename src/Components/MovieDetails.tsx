import React from 'react'
import { FlatList } from 'react-native';
import { MoviesDetailsCallResponse } from "../Types/MoviesDetailsTypes"

import { Container, Title, Parragraph } from './styled';
import { CastItem } from './CastItem';
import styled from 'styled-components/native';


const CustomText = styled.Text`
font-family: 'QTTheatre';
font-size: 30px
`



export const MovieDetails = ({ movieData, cast }: MoviesDetailsCallResponse) => {

    return (
        <>
            <Container style={{ marginHorizontal: 20 }}>
                <CustomText size={"24px"} style={{ marginBottom: 10 }} >
                    OVERVIEW
                </CustomText>
                <Parragraph style={{ marginBottom: 20 }}>
                    {movieData?.overview}
                </Parragraph>

                <CustomText size={"24px"}>CASTING</CustomText>
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
