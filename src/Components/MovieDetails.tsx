import React from 'react';
import { FlatList } from 'react-native';
import { MoviesDetailsCallResponse } from '../Types/MoviesDetailsTypes';

import { Container, Title, Parragraph } from './styled';
import { CastItem } from './CastItem';
import styled from 'styled-components/native';

const CustomText = styled(Title)`
  ${props =>
    props.filmCategory === 'Top Rated' &&
    `
    font-family: ${props.theme.fonts.primary}
    font-size: 30px;
    text-transform: uppercase;
`};
`;

export const MovieDetails = ({
  movieData,
  cast,
  filmCategory
}: MoviesDetailsCallResponse) => {
  return (
    <>
      <Container style={{ marginHorizontal: 20 }}>
        <CustomText
          filmCategory={filmCategory}
          size={'24px'}
          style={{ marginBottom: 10 }}>
          Overview
        </CustomText>
        <Parragraph style={{ marginBottom: 20 }}>
          {movieData?.overview}
        </Parragraph>

        <CustomText filmCategory={filmCategory} size={'24px'}>
          Casting
        </CustomText>
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
  );
};
