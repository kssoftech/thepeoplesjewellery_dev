import { StyleSheet, Text, View , TextInput } from 'react-native'
import React from 'react'

export default function CustomInput(props) {
  return (
    <View>
      <TextInput
        style={props.style} 
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({})