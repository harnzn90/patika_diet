import { View, Text,TextInput } from 'react-native'
import React from 'react'
import styles from "./Input.style"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Input = ({placeholder,onChangeText,name}) => {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText}/>
        <Icon name={name} size={30} color="black" />
    </View>
  )
}

export default Input