import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../../constants/icons";

const HasilCekRekening = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        gap: 20,
        backgroundColor: "white",
        paddingTop: 20,
      }}
    >
      <View
        style={{
          width: 335,
          height: 150,
          backgroundColor: "#FFF",
          padding: 14,
          elevation: 10,
          borderRadius: 8,
        }}
      >
        <View style={{ gap: 6, marginBottom: 8 }}>
          <Text
            style={{
              color: "#243757",
              fontFamily: "PlusJakartaSansBold",
              fontSize: 14,
            }}
          >
            Jeon Wonwoo
          </Text>
          <Text
            style={{
              color: "#6B788E",
              fontFamily: "PlusJakartaSansRegular",
              fontSize: 14,
            }}
          >
            Bank Negara Indonesia
          </Text>
          <Text
            style={{
              color: "#6B788E",
              fontFamily: "PlusJakartaSansRegular",
              fontSize: 14,
            }}
          >
            1234567890
          </Text>
        </View>
        <View
          style={{ width: 307, height: 1, backgroundColor: "#F5F6F7" }}
        ></View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
        >
          <Text>Status Rekening</Text>
          <Image
            source={icons.icInfoHasilCekRekening}
            style={{
              width: 16,
              height: 16,
              marginLeft: 4,
            }}
          />
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 79,
              height: 26,
              borderRadius: 50,
              backgroundColor: "#FFF6E6",
              marginLeft: 100,
            }}
          >
            <Text style={{ color: "#FFA500", fontSize: 12 }}>Investigasi</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      
      <View style={{ flexDirection: "row", width: 335, height: 92, gap: 14 }}>
        <View
          style={{
            width: 160.5,
            height: 72,
            backgroundColor: "#FFF",
            paddingHorizontal: 14,
            elevation: 10,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#F15922",
              fontSize: 32,
              fontFamily: "PlusJakartaSansBold",
              justifyContent: "center",
            }}
          >
            3
          </Text>
          <Text style={{ color: "#6B788E", fontSize: 14 }}>
            Laporan Nasabah
          </Text>
        </View>
        <View
          style={{
            width: 160.5,
            height: 92,
            backgroundColor: "#FFF",
            elevation: 10,
            paddingTop: 10,
            paddingLeft: 14,
            paddingBottom: 10,
            borderRadius: 8,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#F15922",
              fontSize: 32,
              fontFamily: "PlusJakartaSansBold",
            }}
          >
            7
          </Text>
          <Text style={{ color: "#6B788E", fontSize: 14 }}>
            Laporan Sosial {"\n"}Media
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HasilCekRekening;
