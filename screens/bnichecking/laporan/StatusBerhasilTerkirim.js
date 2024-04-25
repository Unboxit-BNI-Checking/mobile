import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import icons from "../../../constants/icons";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";
import ButtonNextClose from "../../../component/common/button/ButtonNextClose";

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
          headerShown: false,

          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.icArrowForward}
              dimension={24}
              handlePress={() => {
                route.back();
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
      <View style={styles.bottomButtonContainer}>
        <ButtonNextClose
          closeName={"Balik Ke Home"}
          nextName={"Lihat Laporan"}
          handleNextButtonClick={() => {
            route.navigate("/bnichecking/laporan/Pelaporan");
          }}
          handleCloseButtonClick={() => {
            route.replace("(tabs)");
          }}
          onPress={() => {
           
          }}
        />
      </View>
    </View>
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

export default StatusBerhasilTerkirim;
