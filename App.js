import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import ScreenHeaderBtn from "./component/common/header/ScreenHeaderBtn";
import Transfer from "./screens/transfer/Transfer";
import Tabs from "./screens/(tabs)/tabs";
import icons from "./constants/icons";
import TransferBNI from "./screens/transfer/TransferBNI";
import CustomOptionHeader from "./component/common/header/CustomOptionHeader";
import TransferConfirm from "./screens/transfer/TransferConfirm";
import TransferSuccess from "./screens/transfer/TransferSuccess";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    PlusJakartaSansMedium: require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSansBold: require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansRegular: require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansItalic: require("./assets/fonts/PlusJakartaSans-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (!fontsLoaded) {
      // SplashScreen.preventAutoHideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
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
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
