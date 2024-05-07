import React from "react";
import { View, Text, StyleSheet } from "react-native";

const getStatusStyles = (status) => {
  let backgroundColor, fontColor;

  switch (status) {
    case "Dilaporkan":
      backgroundColor = "#FBE9ED";
      fontColor = "#D6264F";
      break;
    case "Diproses":
      backgroundColor = "#FFF6E6";
      fontColor = "#FFA500";
      break;
    case "Selesai":
      backgroundColor = "#E7F8EF";
      fontColor = "#10B55A";
      break;
    default:
      backgroundColor = "#FFF";
      fontColor = "#000";
  }

  return { backgroundColor, fontColor };
};

const CardPelaporan = ({ titleReportId, dateLaporan, timeLaporan, status }) => {
  const { backgroundColor, fontColor } = getStatusStyles(status);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.infoRowContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ID Laporan</Text>
            <Text style={styles.infoText}>{titleReportId}</Text>
          </View>
          <View>
            <Text style={styles.infoUnderline}>Lihat</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tanggal Laporan</Text>
          <Text style={styles.infoText}>{dateLaporan}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Waktu Laporan</Text>
          <Text style={styles.infoText}>{timeLaporan}</Text>
        </View>
      </View>
      <View style={[styles.statusBadge, { backgroundColor }]}>
        <Text style={[styles.statusText, { color: fontColor }]}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 4,
  },
  infoContainer: {
    marginBottom: 8,
  },
  infoRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoRow: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginBottom: 6,
  },
  infoLabel: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansBold",
  },
  infoText: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansMedium",
  },
  infoUnderline: {
    color: "#F15922",
    fontFamily: "PlusJakartaSansBold",
    textDecorationLine: "underline",
  },
  statusBadge: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    height: 26,
    alignSelf: "baseline",
    borderRadius: 50,
  },
  statusText: {
    fontSize: 12,
    fontFamily: "PlusJakartaSansBold",
    textAlign: "center",
    lineHeight: 20, // Adjust line height as needed
  },
});

export default CardPelaporan;
