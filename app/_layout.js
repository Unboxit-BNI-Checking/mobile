import React, { useCallback, useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import StatusRekening from "./StatusRekening";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    PlusJakartaSansMedium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansRegular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansItalic: require("../assets/fonts/PlusJakartaSans-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <Stack onLayout={onLayoutRootView}>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
    <StatusRekening />
    // <Stack onLayout={onLayoutRootView}>
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
  );
};

export default Layout;
