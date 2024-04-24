import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import icons from "../../../constants/icons";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";

const HasilCekRekening = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          // headerStyle: { backgroundColor: "red" },
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
          headerTitle: "Hasil Cek Rekening",
        }}
      />
      <View style={styles.rekeningInfoContainer}>
        <View style={styles.rekeningInfo}>
          <Text style={styles.name}>Jeon Wonwoo</Text>
          <Text style={styles.bank}>Bank Negara Indonesia</Text>
          <Text style={styles.accountNumber}>1234567890</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.statusContainer}>
          <Text>Status Rekening</Text>
          <Image
            source={icons.icInfoHasilCekRekening}
            style={styles.infoIcon}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Investigasi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.reportContainer}>
        <View style={styles.report}>
          <Text style={styles.reportNumber}>3</Text>
          <Text style={styles.reportText}>Laporan Nasabah</Text>
        </View>
        <View style={styles.report}>
          <Text style={styles.reportNumber}>7</Text>
          <Text style={styles.reportText}>Laporan Sosial {"\n"}Media</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 20,
  },
  rekeningInfoContainer: {
    width: 335,
    height: 150,
    backgroundColor: "#FFF",
    padding: 14,
    elevation: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  rekeningInfo: {
    marginBottom: 8,
    gap: 4,
  },
  name: {
    color: "#243757",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
  },
  bank: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 14,
  },
  accountNumber: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 14,
  },
  divider: {
    width: 307,
    height: 1,
    backgroundColor: "#F5F6F7",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  infoIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 79,
    height: 26,
    borderRadius: 50,
    backgroundColor: "#FFF6E6",
    marginLeft: 100,
  },
  buttonText: {
    color: "#FFA500",
    fontSize: 12,
  },
  reportContainer: {
    flexDirection: "row",
    width: 335,
    justifyContent: "space-between",
  },
  report: {
    width: 160.5,
    padding: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 14,
    elevation: 10,
    borderRadius: 8,
  },
  reportNumber: {
    color: "#F15922",
    fontSize: 32,
    fontFamily: "PlusJakartaSansBold",
    justifyContent: "center",
  },
  reportText: {
    color: "#6B788E",
    fontSize: 14,
  },
});

export default HasilCekRekening;
