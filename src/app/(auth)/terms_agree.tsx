import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagePath from '@/src/constants/imagePath';
import ButtonComp from '@/src/components/atoms/ButtonComp';
import { router } from 'expo-router';

const Terms_Agree = () => {
    const onAgree=()=>{
       router.push('/(auth)/login')
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.welcome_text}>Welcome to Whatsapp</Text>
        <Image style={styles.image_style} source={imagePath.welcome} resizeMode='contain'/>

        <Text style={styles.terms_text}>Read our <Text style={styles.link_text}>Private Policy</Text>.Tap "Agree and continue" to accept the <Text style={styles.link_text}>Terms & conditions</Text></Text>
        <View>
            <ButtonComp  title="AGREE AND CONTINUE" onPress={onAgree}/>
        </View>

      

      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.fb_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'beige',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:verticalScale(84),
        paddingHorizontal:scale(20)
    },
    header:{
        flex:1,
        alignItems:'center',
        gap:verticalScale(30)
        
    },
    footer:{
        alignItems:'center',
        height:verticalScale(60)
    },
    from_text:{
        fontSize:12,
        color:'#867373'

    },
    fb_text:{
         fontSize:18,
        color:'black'
    },
    welcome_text:{
        fontWeight:'bold',
        fontSize:moderateScale(30)
    },
    image_style:{
        height:moderateScale(250),
        width:moderateScale(250),
        borderRadius:moderateScale(250), 
    },
    terms_text:{
        textAlign:'center',
        fontSize:moderateScale(12),
        fontWeight:'medium',
        paddingHorizontal:25
    },
    
    link_text:{
        color:'blue'
    }
})

export default Terms_Agree