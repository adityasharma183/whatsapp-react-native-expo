import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/src/components/atoms/ButtonComp'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router'
import CountryPicker from 'react-native-country-picker-modal'

const Login = () => {
  const [countryVisible, setCountryVisible] = useState(false)
  const [countryName, setCountryName] = useState('India')
   const [countryCode, setCountryCode] = useState('+91')
  
  let onNext=()=>{
    router.push('/(auth)/verify_otp')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <View style={styles.heading_container}>
         <Text style={styles.heading}>Enter your phone number</Text>
        <Text style={styles.description}>Whatsapp will need to verify your phone number.<Text style={styles.link_text}>What's my number?</Text></Text>
       </View>

       <View style={styles.input_container}>
        <TouchableOpacity onPress={()=>setCountryVisible(true)} style={styles.dropdown_container}>
          <View/>
          <Text style={{fontSize:16,fontWeight:'bold'}}>{countryName}</Text>
          <View><AntDesign name="caret-down" size={20} color="black" /></View>
        </TouchableOpacity>
        <View style={styles.horizontal_line}/>
        <View style={styles.input_numb}>
          <View style={styles.country_code}>
            <Text style={{fontSize:verticalScale(16),fontWeight:'500'}}>{countryCode}</Text>
             <View style={{gap:verticalScale(12)}}>
            <TextInput style={styles.input} placeholder='enter your  phone number'/>
          </View>
            <View style={styles.horizontal_line}/>
          </View>
         
          
        </View>
      </View>
      </View>

     
      
      <View style={styles.footer}>
        <ButtonComp title="Next" style={{paddingHorizontal:35}} onPress={onNext}/>
      </View>

      {
        countryVisible && <CountryPicker countryVisible={true} onClose={()=>setCountryVisible(false)} onSelect={(e)=>{
          setCountryCode(`+${e.callingCode[0]}`)
          setCountryName(e.name)
        }}/>
      }

      
      
      
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(70),
    paddingHorizontal:scale(50),
    backgroundColor:'beige'
  },
  header:{
    gap:verticalScale(150)
    
  },
  
  footer:{
    
  },
  heading_container:{
    gap:verticalScale(20)

  },
  input_container:{
    
  },
  heading:{
    fontWeight:'bold',
    fontSize:moderateScale(20),
    color:'black',
    textAlign:'center'
  },
  description:{
    textAlign:'center',
    fontSize:moderateScale(13),
    fontWeight:'400',
    color:'black'

  },
  link_text:{
    color:'blue'
  },
  horizontal_line:{
    width:moderateScale(250),
    height:verticalScale(1),
    backgroundColor:'#05AA82'
  },
  dropdown_container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(20)
  },
  input_numb:{
    paddingHorizontal:scale(10),
    paddingVertical:verticalScale(12),  
    gap:scale(20) 
  },
  country_code:{
    gap:verticalScale(10)
  },
  input:{
    fontSize:moderateScale(12)
  }
})

export default Login