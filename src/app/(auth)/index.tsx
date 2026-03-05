import { View, Text,StyleSheet,Image, ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/src/constants/imagePath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const Auth = () => {
    const [isLoading, setIsLoading] = useState(false)
    let navigate_to_welcome=()=>{
        router.push('/(auth)/terms_agree')

    }
    let loading_timeout=()=>{
        setIsLoading(true);
        setTimeout(navigate_to_welcome,3000)
    }
    useEffect(()=>{
       const timeout= setTimeout(loading_timeout,2000)
       return ()=>{
        clearTimeout(timeout)
       }
         
    },[])
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}></View>
         <View style={styles.body}>
            <Image style={styles.logo_style} source={imagePath.logo}/>
            <Text style={styles.whatsapp_text}>Whatsapp</Text>
         </View>

         {
            isLoading ?   <>

            <ActivityIndicator color={'#0CCC83'} size={moderateScale(50)}/>
            <Text style={styles.loading_text}>Loading...</Text>
            
            </> :(
          <View style={styles.footer}>
            <Text style={styles.from_text} >From</Text>
            <Text style={styles.fb_text}>Facebook</Text>
          </View>

            )
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
        backgroundColor:'beige'
    },
    header:{
        
    },
    body:{
        alignItems:'center',
        gap:verticalScale(15)
        
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
    logo_style:{
        width:moderateScale(100),
        height:moderateScale(100)
    },
    whatsapp_text:{
        fontSize:32,
        color:'black',
        fontWeight:'bold'

    },
    loading_text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#0CCC83',
        marginTop:verticalScale(12)
    },
    



})


export default Auth