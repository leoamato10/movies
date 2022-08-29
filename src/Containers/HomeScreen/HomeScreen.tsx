import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native';
import { useTheme } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { getMovies } from '../../Store/Actions/moviesActions'

import styled from 'styled-components/native';
import { Container, Button, Title } from '../../Components/styled';
import { Slider } from '../../Components'


const ScrollContainer = styled.ScrollView`
padding-left:15px;
margin-top:15px;
`


const HomeScreen = ({ navigation }) => {

  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { isLoading, movies } = useAppSelector(state => state)
  const { fontSize } = theme.fonts

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
    <SafeAreaView edges={['right', 'bottom', 'left']} >
      <ScrollContainer showsVerticalScrollIndicator={false}>
        {movies &&
          <Container>
            <Slider
              movies={movies["topRated"]}
              filmCategory="Top Rated"
              hasRemoveButton={false}
            />
            <Slider
              movies={movies["popular"]}
              filmCategory="Popular"
              hasRemoveButton={false}
            />
            <Slider
              movies={movies["upcoming"]}
              filmCategory="Upcoming"
              hasRemoveButton={false}
            />
          </Container>
        }

        <Button
          style={{ marginBottom: 15 }}
          onPress={() => navigation.navigate("WhishListScreen")}>
          <Title size={fontSize.large} >View wishlist</Title>
        </Button>

      </ScrollContainer >
    </SafeAreaView>
  )
}

export default HomeScreen