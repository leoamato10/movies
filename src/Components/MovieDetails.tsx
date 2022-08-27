import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { CastItem } from './CastItem';


export const MovieDetails = ({ movieData, cast }) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>



                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Overview
                </Text>

                <Text style={{ fontSize: 16 }}>
                    {movieData?.overview}
                </Text>





            </View>


            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Casting
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />


            </View>

        </>
    )
}
