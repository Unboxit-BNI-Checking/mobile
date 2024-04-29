import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";

const StatusRingkasanPelaporan = ({ status }) => {
  const navigation = useNavigation();
  function text(status) {
    if (status === 1) {
      return (
        <Text style={styles.normalText}>
          Laporan sudah terkirim dan akan segera {"\n"}ditindaklanjuti oleh tim
        </Text>
      );
    } else if (status === 2) {
      return <Text style={styles.normalText}>Laporan sedang diproses</Text>;
    } else if (status === 3) {
      return (
        <View>
          <Text style={styles.normalText}>Laporan telah selesai diproses.</Text>
          <Text style={styles.normalText}>
            Status rekening yang dilaporkan adalah:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.redText}>Terblokir </Text>
            <Text style={styles.boldText}>atau sudah diblokir oleh tim.</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.orangeText}>Klik disini </Text>
              <Text style={styles.normalText}>
                untuk memproses kerugian yang
              </Text>
            </View>
            <Text style={styles.normalText}>diterima</Text>
          </View>
        </View>
      );
    } else if (status === 4) {
      return (
        <View>
          <Text style={styles.normalText}>Laporan telah selesai diproses.</Text>
          <Text style={styles.normalText}>
            Status rekening yang dilaporkan adalah:
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.greenText}>Bebas Aduan </Text>
            <Text style={styles.boldText}>atau tidak terindikasi </Text>
          </View>
          <View>
            <Text style={styles.boldText}>penipuan.</Text>
          </View>
        </View>
      );
    } else if (status === 5) {
      return (
        <View>
          <Text style={styles.normalText}>Laporan telah selesai diproses.</Text>
          <Text style={styles.boldText}>
            Mohon periksa kembali data pelaporan
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.boldText}>anda dan </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Pelaporan")}>
              <Text style={styles.orangeText}>ajukan ulang pelaporan.</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 50,
      }}
    >
      <View
        style={{
          paddingHorizontal: 14,
          paddingVertical: 10,
          backgroundColor: "#F5F6F7",
          alignItems: "flex-start",
          borderRadius: 8,
          flexDirection: "row",
          gap: 5,
          width: 308,
        }}
      >
        <Image
          source={icons.icInfoRingkasanLaporan}
          style={{ width: 18, height: 18, marginTop: 2 }}
        />
        {text(status)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  normalText: {
    color: "#243757",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 12,
  },
  boldText: {
    color: "black",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
  },
  greenText: {
    color: "green",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
  },
  redText: {
    color: "red",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
  },
  orangeText: {
    color: "#F15922",
    textDecorationLine: "underline",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 12,
  },
});

export default StatusRingkasanPelaporan;
