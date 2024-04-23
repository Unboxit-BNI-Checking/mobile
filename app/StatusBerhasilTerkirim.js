import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../constants/icons";

const StatusBerhasilTerkirim = () => {
  return (
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
  );
};

export default StatusBerhasilTerkirim;
