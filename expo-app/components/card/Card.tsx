import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Card({title}:{title:string}) {
  return (
    <View>
      <Text style={styles.card}>Card-{title}</Text>
    </View>
  )
}
//for its css make an object like this and can use styelshwwt.create to optimize css this is internal css and mostly ued method
const styles=StyleSheet.create({
  card:{
    backgroundColor:'gray'
  }
})