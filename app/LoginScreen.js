import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import images from "../constants/images";
import icons from "../constants/icons";
import ButtonPrimary from "../component/common/button/ButtonPrimary";

const LoginScreen = () => {
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

      <View style={{ marginBottom: 143, alignItems: "center", gap: 40 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            width: 335,
            height: 48,
            borderRadius: 100,
            backgroundColor: "#F15922",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 14 }}>Login</Text>
          <Image
            source={icons.icBiometricLogin}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
    

        <View style={{ flexDirection: "row", gap: 25 }}>
          <View
            style={{ flexDirection: "column", gap: 6, alignItems: "center" }}
          >
            <Image
              source={icons.icWalletLogin}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontSize: 12,
              }}
            >
              E-Wallet
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", gap: 6, alignItems: "center" }}
          >
            <Image
              source={icons.icQrisLogin}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontSize: 12,
              }}
            >
              QRIS
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", gap: 6, alignItems: "center" }}
          >
            <Image
              source={icons.icBantuanLogin}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontSize: 12,
              }}
            >
              Bantuan
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", gap: 6, alignItems: "center" }}
          >
            <Image
              source={icons.icLainnyaLogin}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                fontSize: 12,
              }}
            >
              Lainnya
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
