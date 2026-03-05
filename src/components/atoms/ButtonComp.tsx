import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({title,onPress,style}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.btn,style]} onPress={onPress}>
      <Text style={styles.btn_text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    btn:{
        width:'100%',
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(10),
        backgroundColor:'#00A884',
        borderRadius:moderateScale(4),
        
    },
    btn_text:{
        color:'white',
        fontSize:moderateScale(14)

    }
})