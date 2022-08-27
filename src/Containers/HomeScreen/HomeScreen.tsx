import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { ScrollView } from 'react-native'
import { getMovies } from '../../Store/Actions/moviesActions'
import { Slider } from '../../Components/Slider'
import { Title } from '../../Components/styled/Title'
import { useTheme } from 'styled-components'
import Lottie from 'lottie-react-native';
import styled from 'styled-components/native';

const Container = styled.View`
padding-top: 15px
padding-left:15px
`;


export const Button = styled.TouchableOpacity`
background-color: gold
  height:50px
  border-radius: 10px
  align-items: center
  justify-content: center
  margin-right: 15px
`;


const HomeScreen = ({ navigation }) => {
  const theme = useTheme()

  const dispatch = useAppDispatch()
  const { isLoading, movies } = useAppSelector(state => state)


  useEffect(() => {
    dispatch(getMovies())
  }, [])


  if (isLoading) {
    return (
      <Container centered>
        <Lottie source={require('../../Assets/Animations/loading.json')} autoPlay loop style={{ width: 100 }} />
      </Container>
    )
  }


  return (
    <SafeAreaView edges={['right', 'bottom', 'left']}>
      <ScrollView>

        {movies &&
          <Container>
            <Slider movies={movies["popular"]} title="Popular" />
            <Slider movies={movies["topRated"]} title="Top Rated" />
            <Slider movies={movies["upcoming"]} title="Upcoming" />
          </Container>
        }
        <Container centered >
          <Button onPress={() => navigation.navigate("WhishListScreen")} >
            <Title size={"20px"} color={theme.colors.tertiary}>View wishlist</Title>
          </Button>
        </Container>

      </ScrollView >
    </SafeAreaView>
  )
}

export default HomeScreen