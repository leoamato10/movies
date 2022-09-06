import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { getMovies } from '../../Store/Actions/moviesActions';

import styled, { useTheme } from 'styled-components/native';
import { Container, Button, Title } from '../../Components/styled';
import { Slider } from '../../Components';
import { Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../Navigators/RootNavigator';

const ScrollContainer = styled.ScrollView`
  padding-left: 15px;
  margin-top: 15px;
`;

type Props = NativeStackScreenProps<RootStackParams, 'HomeScreen'>;

const HomeScreen = ({ navigation }: Props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const fontSize = theme?.fontSize;
  const { isLoading, movies } = useAppSelector(state => state);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  if (isLoading) {
    return (
      <Container centered>
        <Lottie
          source={require('../../Assets/Animations/loading.json')}
          autoPlay
          loop
          style={{ width: 100 }}
        />
      </Container>
    );
  }

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <ScrollContainer showsVerticalScrollIndicator={false}>
        {movies && (
          <Container>
            <Slider
              movies={movies['topRated']}
              filmCategory="Top Rated"
              hasRemoveButton={false}
            />
            <Slider
              movies={movies['popular']}
              filmCategory="Popular"
              hasRemoveButton={false}
            />
            <Slider
              movies={movies['upComing']}
              filmCategory="Upcoming"
              hasRemoveButton={false}
            />
          </Container>
        )}
        <Button
          style={{ marginBottom: 15 }}
          onPress={() => navigation?.navigate('WhishListScreen')}>
          <Title size={fontSize?.large}>View wishlist</Title>
        </Button>
      </ScrollContainer>
    </SafeAreaView>
  );
};

export default HomeScreen;
