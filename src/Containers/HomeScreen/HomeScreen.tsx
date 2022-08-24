import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

const HomeScreen = () => {
    return (
        <StyledView>
            <StyledText>Hello World!</StyledText>
        </StyledView>
    )
}

export default HomeScreen