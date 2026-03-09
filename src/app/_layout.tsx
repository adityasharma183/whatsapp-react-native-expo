import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { storage } from "../utils/utils";

SplashScreen.preventAutoHideAsync();

export default function RootNavigation() {
  const [isLogin, setIsLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const access_token=storage.getString('access_token')

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
      setIsReady(true);
      
    }, 1000);
  }, []);
   //check if user is logged in
  useEffect(()=>{
    console.log(access_token);
    if(access_token){
      setIsLogin(true)
    }
    
  },[access_token])

  if (!isReady) return null;

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href="/(main)" /> : <Redirect href="/(auth)" />}
    </>
  );
}