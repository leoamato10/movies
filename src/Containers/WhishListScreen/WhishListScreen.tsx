import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../Types/Redux';
import { getMovies } from '../../Store/Actions/moviesActions'
import Lottie from 'lottie-react-native';

import { Title, Container } from '../../Components/styled';
import { Slider } from '../../Components/Slider'



const WhishListScreen = () => {
    const dispatch = useAppDispatch()
    const { isLoading, wishlist } = useAppSelector(state => state)


    useEffect(() => {
        dispatch(getMovies())
    }, [])


    if (!wishlist?.length || wishlist === undefined) {
        return (
            <Container centered>
                <Title>Add movies to your wishlist</Title>
            </Container>
        )
    }


    return (
        <SafeAreaView edges={['right', 'bottom', 'left']}>
            <Container style={{ padding: 15, height: "100%" }}>
                {isLoading
                    ?
                    <Container centered>
                        <Lottie source={require('../../Assets/Animations/loading.json')} autoPlay loop style={{ width: 100 }} />
                    </Container>
                    :
                    <Slider movies={wishlist} filmCategory="Movies saved on wishlist" hasRemoveButton={true} />}
            </Container>
        </SafeAreaView>
    )
}

export default WhishListScreen