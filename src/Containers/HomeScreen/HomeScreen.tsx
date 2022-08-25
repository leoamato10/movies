import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import { getMovies } from '../../Store/Actions/authActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state)

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  console.log('data', data);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen