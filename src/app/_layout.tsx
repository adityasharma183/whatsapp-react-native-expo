import React, { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { storage } from "../utils/utils";

SplashScreen.preventAutoHideAsync();

export default function RootNavigation() {
  const [isLogin, setIsLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const access_token = storage?.getString("access_token");

    console.log("TOKEN:", access_token);

    if (access_token) {
      setIsLogin(true);
    }

    setTimeout(() => {
      SplashScreen.hideAsync();
      setIsReady(true);
    }, 1000);
  }, []);

  if (!isReady) return null;

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href="/(main)" /> : <Redirect href="/(auth)" />}
    </>
  );
}