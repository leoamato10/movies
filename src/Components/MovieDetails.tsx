import React from 'react'
import { FlatList } from 'react-native';


import { CastItem } from './CastItem';
import { Container } from './styled/Container';
import { Parragraph } from './styled/Parragraph';
import { Title } from './styled/Title';


export const MovieDetails = ({ movieData, cast }) => {
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
                    style={{ marginTop: 15, height: 70 }}
                />
            </Container>
        </>
    )
}
