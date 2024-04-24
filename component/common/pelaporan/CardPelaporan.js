import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../../constants/icons";

const CardPelaporan = ({ titleIdLaporan, dateLaporan, status }) => {
  let backgroundColors = "blue";
  let fontColos = "red";

  if (status === "Dilaporkan") {
    backgroundColors = "#FBE9ED";
    fontColos = "#D6264F";
  } else if (status === "Proses") {
    backgroundColors = "#FFF6E6";
    fontColos = "#FFA500";
  } else if (status === "Selesai") {
    backgroundColors = "#E7F8EF";
    fontColos = "#10B55A";
  }

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
              {titleIdLaporan}
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
            {dateLaporan}
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
            backgroundColor: backgroundColors,
          }}
        >
          <Text
            style={{
              color: fontColos,
              fontSize: 12,
              fontFamily: "PlusJakartaSansBold",
            }}
          >
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardPelaporan;
