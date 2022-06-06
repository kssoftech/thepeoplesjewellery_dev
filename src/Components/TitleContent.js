import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TitleContent({content ,style}) {
  return (
    <View>
      <Text style={style}>{content}</Text>
    </View>
  )
}
