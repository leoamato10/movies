import React from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
  background-color: ${props => props.theme.colors.primary};
  
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