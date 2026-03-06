import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonComp from '@/src/components/atoms/ButtonComp';
import { router } from 'expo-router';
import OTPInput from "@codsod/react-native-otp-input";
import { useState } from 'react';

const Verify_Otp = () => {
  const [otp, setOTP] = useState("");
  let onPress=()=>{
    
   
  }
  let onBack=()=>{
    router.back()
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <View><AntDesign style={styles.back_btn} name="arrow-left" size={25} color="black" onPress={onBack} /></View>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Enter OTP Code</Text>
      </View>
       <View style={styles.body}>
        <Text>Code has been sent to +91 70****9757</Text>

        <View><OTPInput
        length={4}
        onOtpComplete={(txt: string) => setOTP(txt)}
        inputStyle={styles.otpInput}
      /></View>

         <Text>Resend code in <Text style={styles.counter}>56 s</Text></Text>
       </View>
        <View style={styles.footer}>
          <ButtonComp title={'Verify'} style={styles.verify_btn}onPress={onPress}/>
        </View>
      
    </SafeAreaView>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(40),
    paddingHorizontal:moderateScale(20),
    backgroundColor:'beige'
  },
  header:{
    flexDirection:'row',
    gap:moderateScale(18)
    
  },
  back_btn:{
    textAlign:'center',
    fontWeight:'bold'
  },
  head_title:{},
  body:{
    alignItems:'center',
    gap:verticalScale(30)
     
  },
  otp_text:{

  },
  footer:{
     
  },
  verify_btn:{
    width:150,
    alignItems:'center',
    borderRadius:moderateScale(40)
  
  },
  counter:{
    color:'green'
  }

})

export default Verify_Otp