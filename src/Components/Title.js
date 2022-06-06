import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({label , style}) {
  return (
    <Text style={style}>{label}</Text>
  );
}

const styles = StyleSheet.create({

});