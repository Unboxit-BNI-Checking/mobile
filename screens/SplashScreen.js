import { View, Text, Image, ImageBackground, StatusBar } from "react-native";
import React from "react";
import images from "../constants/images";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreenCustom = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Image
        source={images.background46}
        style={{ width: "100%", height: 401 }}
        resizeMode="cover"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "28%",
        }}
      >
        <Image
          source={images.bnilogo}
          style={{
            width: 168,
            height: 48,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Text
          style={{
            fontSize: 12,
            fontFamily: "PlusJakartaSansBold",
            color: "#006885",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          Melayani Negeri Kebanggaan Bangsa
        </Text>
      </View>
      <View
        style={{
          marginBottom: 42,
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Image source={images.lpslogo} style={{ width: 75, height: 30 }} />
        <Text
          style={{
            color: "#5D6B82",
            marginTop: 24,
            fontSize: 10,
            paddingHorizontal: 20,
            textAlign: "center",
            fontFamily: "PlusJakartaSansRegular",
          }}
        >
          PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh
          Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan
          Lembaga Penjamin Simpanan (LPS)
        </Text>
        <Text
          style={{
            color: "#5D6B82",
            fontSize: 10,
            textAlign: "center",
            fontFamily: "PlusJakartaSansRegular",
          }}
        >
          Hak Cipta © 2024 BNI Mobile Banking
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreenCustom;
