import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { Picker } from '@react-native-picker/picker'

export default function CustomSelect({style}) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
     <Picker
        selectedValue={selectedValue}
        style={style}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
  )
}
