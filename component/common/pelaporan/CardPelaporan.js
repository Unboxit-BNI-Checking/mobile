import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../../constants/icons";

const CardPelaporan = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        padding: 14,
        elevation: 10,
        borderRadius: 8,
      }}
    >
      <View style={{ gap: 6, marginBottom: 8 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
            <Text
              style={{
                color: "#6B788E",
                fontFamily: "PlusJakartaSansBold",
              }}
            >
              ID Laporan
            </Text>
            <Text
              style={{
                color: "#6B788E",
                fontFamily: "PlusJakartaSansMedium",
              }}
            >
              1100100000
            </Text>
          </View>

          <View>
            <Text
              style={{
                color: "#F15922",
                fontFamily: "PlusJakartaSansBold",
                textDecorationLine: "underline",
              }}
            >
              Lihat
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#6B788E",
              fontFamily: "PlusJakartaSansBold",
            }}
          >
            Tanggal Laporan
          </Text>
          <Text
            style={{
              color: "#6B788E",
              fontFamily: "PlusJakartaSansMedium",
            }}
          >
            12/12/2024
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 8,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            borderRadius: 50,
            backgroundColor: "#FEEEE9",
          }}
        >
          <Text
            style={{
              color: "#F15922",
              fontSize: 12,
              fontFamily: "PlusJakartaSansBold",
            }}
          >
            Dilaporkan
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardPelaporan;
