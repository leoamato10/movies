import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { getMovies } from '../../Store/Actions/moviesActions'
import { Slider } from '../../Components/Slider'
import { Container } from '../../Components/styled/Container'
import { useTheme } from 'styled-components'
import Lottie from 'lottie-react-native';
import { Title } from '../../Components/styled/Title';



const WhishListScreen = () => {
    const dispatch = useAppDispatch()
    const theme = useTheme()

    const { isLoading, wishlist } = useAppSelector(state => state)


    useEffect(() => {
        dispatch(getMovies())
    }, [])

    if ((wishlist?.length <= 0 || wishlist == undefined)) {
        return (
            <Container centered>
                <Title>Add movies to your wishlist</Title>
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