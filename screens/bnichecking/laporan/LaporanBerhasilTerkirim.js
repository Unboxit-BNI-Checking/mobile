import { View, Text, Image, StyleSheet, StatusBar } from "react-native";
import React from "react";
import icons from "../../../constants/icons";
import ButtonNextClose from "../../../component/button/ButtonNextClose";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const LaporanBerhasilTerkirim = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
       <StatusBar backgroundColor={"white"} barStyle="dark-content" />
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
      <View style={styles.bottomButtonContainer}>
        <ButtonNextClose
          closeName={"Balik Ke Home"}
          nextName={"Lihat Laporan"}
          handleNextButtonClick={() => {
            navigation.reset({
               routes: [{ name: "Pelaporan" }],
            })
          }}
          handleCloseButtonClick={() => {
            navigation.replace("Tabs");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(204, 204, 204, 0.5)",
    height: 102,
    alignItems: "center",
  },
});

export default LaporanBerhasilTerkirim;
