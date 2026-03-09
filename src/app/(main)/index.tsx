import { View, Text, StyleSheet, TouchableOpacity,StatusBar  } from 'react-native'

import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Chats from '@/src/components/molecules/Chats'
import Status from '@/src/components/molecules/Status'
import Call from '@/src/components/molecules/Call'
import { scale, verticalScale } from 'react-native-size-matters'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const Main = () => {
  const [currentPage, setCurrentPage] = useState('chat')
  const ActivePage=()=>{
    switch (currentPage) {
      case 'chat':
        return <Chats/>
      case 'status':
        return <Status/>  
      case 'call':
      return <Call/>    
    
      default:
        return <Chats/>
    }
  }
  const WhatappHeader=()=>{
    return <View style={styles.header}>
      <Text style={styles.header_text}>Whatsapp</Text>
      <View style={styles.icon_container}>
        <Feather name="search" style={styles.headerIcon}/>
        <Entypo name="dots-three-vertical" style={styles.headerIcon}/>
      </View>
    </View>
  }
  return (
    
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor="#008069" barStyle="light-content" />
       <WhatappHeader/>
      
      <View style={styles.topBarContainer}>
        {
          ['chat','status','call'].map((item,index)=>{
            return <TouchableOpacity key={index} onPress={()=>setCurrentPage(item)} style={[styles.topBarButton,item==currentPage && {borderColor:'white'}]}>
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>

          })
        }
      </View>
        {ActivePage()}
     
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  topBarContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:scale(12),
    backgroundColor:'#008069',
    gap:scale(10)
  },
  topBarButton:{
    flex:1,
    alignItems:'center',
    borderBottomWidth:3,
    paddingBottom:verticalScale(10),
    borderColor:'#008069',
    height:verticalScale(30),
    marginTop:scale(10)
    
  },
  topBarText:{
    fontSize:18,
    color:'white',
    textTransform:'capitalize',
    fontWeight:'bold'
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#008069',
    paddingHorizontal:scale(12),
    alignItems:'center',
    paddingVertical:verticalScale(15)

  },
  headerIcon:{
    fontSize:scale(20),
    color:'white'
  },
  header_text:{
    fontSize:scale(22),
    color:'white',
    fontWeight:'bold'
  },
  icon_container:{
    flexDirection:'row',
    gap:scale(8)

  }
  
  

})
export default Main