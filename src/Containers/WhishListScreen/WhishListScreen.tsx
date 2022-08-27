import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../Store/Actions/moviesActions'
import { Slider } from '../../Components/Slider'
import { Container } from '../../Components/styled/Container'
import { useTheme } from 'styled-components'
import Lottie from 'lottie-react-native';
import { Text } from 'react-native';



const WhishListScreen = () => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const { isLoading, wishlist } = useSelector(state => state)


    useEffect(() => {
        dispatch(getMovies())
    }, [])

    if (wishlist?.length <= 0) {
        return (
            <Container centered>
                <Text>Add movies to your wishlist</Text>
            </Container>
        )
    }


    return (
        <SafeAreaView edges={['right', 'bottom', 'left']}>

            <Container >
                {isLoading ?
                    <Lottie source={require('../../Assets/Animations/loading.json')} autoPlay loop style={{ width: 100 }} /> :
                    <Slider movies={wishlist} title="wishlist" />}
            </Container>

        </SafeAreaView>
    )
}

export default WhishListScreen