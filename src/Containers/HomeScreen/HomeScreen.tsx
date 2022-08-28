import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { getMovies } from '../../Store/Actions/moviesActions'

import styled from 'styled-components/native';
import { Container, Button, Title } from '../../Components/styled';
import { Slider } from '../../Components'


const ScrollContainer = styled.ScrollView`
padding-left:15px;
padding-top:15px;
`


const HomeScreen = ({ navigation }) => {

  const dispatch = useAppDispatch()
  const { isLoading, movies } = useAppSelector(state => state)


  useEffect(() => {
    dispatch(getMovies())
  }, [])


  if (isLoading) {
    return (
      <Container centered >
        <Lottie source={require('../../Assets/Animations/loading.json')} autoPlay loop style={{ width: 100 }} />
      </Container>
    )
  }

  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <ScrollContainer>
        {movies &&
          <Container >
            <Slider
              movies={movies["topRated"]}
              title="Top Rated"
              hasRemoveButton={false}
            />
            <Slider
              movies={movies["popular"]}
              title="Popular"
              hasRemoveButton={false}
            />
            <Slider
              movies={movies["upcoming"]}
              title="Upcoming"
              hasRemoveButton={false}
            />
          </Container>
        }

        <Button onPress={() => navigation.navigate("WhishListScreen")}>
          <Title size={"20px"} >View wishlist</Title>
        </Button>

      </ScrollContainer >
    </SafeAreaView>
  )
}

export default HomeScreen