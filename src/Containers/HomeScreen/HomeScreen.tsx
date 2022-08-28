import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { ScrollView } from 'react-native'
import { getMovies } from '../../Store/Actions/moviesActions'
import { Slider } from '../../Components/Slider'
import { Title } from '../../Components/styled/Title'
import { useTheme } from 'styled-components'
import Lottie from 'lottie-react-native';
import { Button } from '../../Components/styled/Button';
import { Container } from '../../Components/styled/Container';


const HomeScreen = ({ navigation }) => {
  const theme = useTheme()

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
      <ScrollView>
        {movies &&
          <Container style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Slider movies={movies["popular"]} title="Popular" hasRemoveButton={false} />
            <Slider movies={movies["topRated"]} title="Top Rated" hasRemoveButton={false} />
            <Slider movies={movies["upcoming"]} title="Upcoming" hasRemoveButton={false} />
          </Container>
        }
        <Container >
          <Button onPress={() => navigation.navigate("WhishListScreen")} style={{
            alignSelf: "center", width: "70%"
          }} >
            <Title size={"20px"} >View wishlist</Title>
          </Button>
        </Container>
      </ScrollView >
    </SafeAreaView>
  )
}

export default HomeScreen