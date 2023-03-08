import { TouchableOpacity, Text,View } from 'react-native'
import React from 'react'
import styles from "./Btn2.style"

const Btn2 = ({onPress,title}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Btn2