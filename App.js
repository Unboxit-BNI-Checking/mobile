import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import ScreenHeaderBtn from "./component/common/header/ScreenHeaderBtn";
import Transfer from "./screens/transfer/Transfer";
import Tabs from "./screens/(tabs)/tabs";
import TransferBNI from "./screens/transfer/TransferBNI";
import CustomOptionHeader from "./component/common/header/CustomOptionHeader";
import TransferConfirm from "./screens/transfer/TransferConfirm";
import TransferSuccess from "./screens/transfer/TransferSuccess";
import BniChecking from "./screens/bnichecking/checkrekening/BniChecking";
import CekRekening from "./screens/bnichecking/checkrekening/CekRekening";
import HasilCekRekening from "./screens/bnichecking/checkrekening/HasilCekRekening";
import StatusRekening from "./screens/bnichecking/checkrekening/StatusRekening";
import BuatLaporan from "./screens/bnichecking/laporan/BuatLaporan";
import Pelaporan from "./screens/bnichecking/laporan/Pelaporan";
import RingkasanLaporan from "./screens/bnichecking/laporan/RingkasanLaporan";
import SertakanLaporan from "./screens/bnichecking/laporan/SertakanLaporan";
import LaporanBerhasilTerkirim from "./screens/bnichecking/laporan/LaporanBerhasilTerkirim";
import SertakanLaporanSummary from "./screens/bnichecking/laporan/SertakanLaporanSummary";
import * as SplashScreen from "expo-splash-screen";
import SplashScreenCustom from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";

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
      <Stack.Navigator>
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
          options={CustomOptionHeader({ title: "Transfer" })}
        />
        <Stack.Screen
          name="TransferBNI"
          component={TransferBNI}
          options={CustomOptionHeader({ title: "Transfer Antar BNI" })}
        />
        <Stack.Screen
          name="TransferConfirm"
          component={TransferConfirm}
          options={CustomOptionHeader({ title: "Transfer Antar BNI" })}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: {
              color: "#243757",
            },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn handlePress={() => {}} />,
            headerTitle: "Status",
          }}
        />
        {/* CHEKING SCREEN */}
        <Stack.Screen
          name="BNIChecking"
          component={BniChecking}
          options={CustomOptionHeader({ title: "BNI Checking" })}
        />
        <Stack.Screen
          name="CekRekening"
          component={CekRekening}
          options={CustomOptionHeader({ title: "Cek Rekening" })}
        />
        <Stack.Screen
          name="HasilCekRekening"
          component={HasilCekRekening}
          options={CustomOptionHeader({ title: "Hasil Cek Rekening" })}
        />
        <Stack.Screen
          name="StatusRekening"
          component={StatusRekening}
          options={CustomOptionHeader({ title: "Status Rekening" })}
        />
        {/* LAPORAN SCREEN */}
        <Stack.Screen
          name="BuatLaporan"
          component={BuatLaporan}
          options={CustomOptionHeader({ title: "Pelaporan" })}
        />
        <Stack.Screen
          name="Pelaporan"
          component={Pelaporan}
          options={CustomOptionHeader({ title: "Pelaporan" })}
        />
        <Stack.Screen
          name="RingkasanLaporan"
          component={RingkasanLaporan}
          options={CustomOptionHeader({ title: "Ringkasan Laporan" })}
        />
        <Stack.Screen
          name="SertakanLaporan"
          component={SertakanLaporan}
          options={CustomOptionHeader({ title: "Sertakan Laporan" })}
        />
        <Stack.Screen
          name="SertakanLaporanSummary"
          component={SertakanLaporanSummary}
          options={CustomOptionHeader({ title: "Sertakan Laporan" })}
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
