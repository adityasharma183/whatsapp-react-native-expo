import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const RootNavigation = () => {
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hideAsync();
    },2000)
  },[])
  return (
    <Stack>
     <Stack.Screen name='index'/>
    </Stack>
  )
}

export default RootNavigation