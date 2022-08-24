import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const HomeScreen = () => {
  const data = useSelector(state => state)

  console.log('data', data);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen