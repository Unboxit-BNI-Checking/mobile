import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import Transfer from "./screens/transfer/Transfer";
import Tabs from "./screens/(tabs)/tabs";
import TransferBNI from "./screens/transfer/TransferBNI";
import TransferConfirm from "./screens/transfer/TransferConfirm";
import TransferSuccess from "./screens/transfer/TransferSuccess";
import CekRekening from "./screens/bnichecking/checkrekening/CekRekening";
import HasilCekRekening from "./screens/bnichecking/checkrekening/HasilCekRekening";
import StatusRekening from "./screens/bnichecking/checkrekening/StatusRekening";
import BuatLaporan from "./screens/bnichecking/laporan/BuatLaporan";
import Pelaporan from "./screens/bnichecking/laporan/Pelaporan";
import RingkasanLaporan from "./screens/bnichecking/laporan/RingkasanLaporan";
import SertakanLaporan from "./screens/bnichecking/laporan/SertakanLaporan";
import LaporanBerhasilTerkirim from "./screens/bnichecking/laporan/LaporanBerhasilTerkirim";
import SertakanLaporanSummary from "./screens/bnichecking/laporan/SertakanLaporanSummary";
import SplashScreenCustom from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import BniChecking from "./screens/bnichecking/BniChecking";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TransferHasilCekRekening from "./screens/transfer/TransferHasilCekRekening";

// import * as SplashScreen from "expo-splash-screen";

AsyncStorage.setItem("isWarningOn", JSON.stringify(1));

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded, fontError] = useFonts({
    PlusJakartaSansMedium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSansBold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansRegular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansItalic: require("./assets/fonts/PlusJakartaSans-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        onLayout={onLayoutRootView}
      >
        {/* HOME SCREEN ROOT */}

        <Stack.Screen
          name="Splash"
          component={SplashScreenCustom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        {/* TRANSFER SCREEN */}
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferBNI"
          component={TransferBNI}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferHasilCekRekening"
          component={TransferHasilCekRekening}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferConfirm"
          component={TransferConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{ headerShown: false }}
        />

        {/* CHEKING SCREEN */}
        <Stack.Screen
          name="BNIChecking"
          component={BniChecking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CekRekening"
          component={CekRekening}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HasilCekRekening"
          component={HasilCekRekening}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatusRekening"
          component={StatusRekening}
          options={{ headerShown: false }}
        />
        {/* LAPORAN SCREEN */}
        <Stack.Screen
          name="BuatLaporan"
          component={BuatLaporan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pelaporan"
          component={Pelaporan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RingkasanLaporan"
          component={RingkasanLaporan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SertakanLaporan"
          component={SertakanLaporan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SertakanLaporanSummary"
          component={SertakanLaporanSummary}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LaporanBerhasilTerkirim"
          component={LaporanBerhasilTerkirim}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
