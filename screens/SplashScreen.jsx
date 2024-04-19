import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import images from "../constants/images";

const SplashScreen = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <Image
        source={images.background46}
        style={{ width: 406, height: 401 }}
        resizeMode="contain"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "30%",
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
    </View>
  );
};

export default SplashScreen;
