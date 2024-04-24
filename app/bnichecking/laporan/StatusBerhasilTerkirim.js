import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../../constants/icons";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";

const StatusBerhasilTerkirim = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#243757",
          },
          headerShadowVisible: false,

          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.icArrowForward}
              dimension={24}
              handlePress={() => {
                router.back();
              }}
            />
          ),
          headerTitle: "Sertakan Laporan",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image source={icons.icCeklis} style={{ width: 54, height: 54 }} />
        <Text
          style={{
            color: "#243757",
            fontFamily: "PlusJakartaSansBold",
            fontSize: 16,
          }}
        >
          Laporan Berhasil Terkirim
        </Text>
        <Text
          style={{
            color: "#243757",
            fontFamily: "PlusJakartaSansRegular",
          }}
        >
          Pantau progress laporan di Halaman Pelaporan
        </Text>
      </View>
    </View>
  );
};

export default StatusBerhasilTerkirim;
