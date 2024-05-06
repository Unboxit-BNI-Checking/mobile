import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardDataPelaporan = ({
  namaRekeningPelapor,
  nomorRekeningPelapor,
  namaRekeningDilaporkan,
  nominalRekeningDilaporkan,
  nomorRekeningDilaporkan,
  tanggalTransaksiDilaporkan,
  bankRekeningDilaporkan,
  jamTransaksiDilaporkan,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Rekening Pelapor</Text>
        <View style={styles.row}>
          <Text style={styles.text}>{nomorRekeningPelapor}</Text>
          <View style={styles.dot}></View>
          <Text style={styles.text}>{namaRekeningPelapor}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Transaksi yang dipilih</Text>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.headerText}>{namaRekeningDilaporkan}</Text>
          <Text style={styles.headerText}>-{nominalRekeningDilaporkan}</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.subHeaderText}>{nomorRekeningDilaporkan}</Text>
          <Text style={styles.subHeaderText}>{tanggalTransaksiDilaporkan}</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={styles.subHeaderText}>{bankRekeningDilaporkan}</Text>
          <Text style={styles.subHeaderText}>{jamTransaksiDilaporkan}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  innerContainer: {
    gap: 4,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#243757",
    fontFamily: "PlusJakartaSansBold",
  },
  subHeaderText: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
  },
  text: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  dot: {
    height: 4,
    width: 4,
    backgroundColor: "#6B788E",
    borderRadius: 100,
  },
  line: {
    height: 1,
    backgroundColor: "#F5F6F7",
  },
  spaceBetweenRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CardDataPelaporan;
