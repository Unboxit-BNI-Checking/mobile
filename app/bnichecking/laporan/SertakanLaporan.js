import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";

const SertakanLaporan = () => {
  const [text, setText] = useState("");
  const route = useRouter();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
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
                route.back();
              }}
            />
          ),
          headerTitle: "Sertakan Laporan",
        }}
      />
      <ScrollView>
      <View style={{ padding: 20, gap: 10, marginBottom:250 }}>
        <View style={{ gap: 4 }}>
          <Text style={styles.headerText}>Rekening Pelapor</Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "#6B788E" }}>1818181818</Text>
            <Text style={{ color: "#6B788E" }}>Nama Rekening Pelapor</Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
        <View style={{ gap: 4 }}>
          <Text style={styles.headerText}>Transaksi yang dipilih</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.headerText}>Transfer BNI</Text>
            <Text style={styles.headerText}>Rp-10.0000</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.subHeaderText}>1234567890</Text>
            <Text style={styles.subHeaderText}>19/04/202</Text>
          </View>
          <Text style={styles.subHeaderText}>Nama Pemilik Rek</Text>
        </View>
        <View style={{ height: 8, backgroundColor: "#F5F6F7" }}></View>
        <View style={{ gap: 10 }}>
          <Text style={styles.headerText}>Peristiwa Yang Dilaporkan</Text>
          <View style={{ gap: 6 }}>
            <Text
              style={{ color: "#243757", fontFamily: "PlusJakartaSansRegular" }}
            >
              Kronologi
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder=""
                value={text}
                onChangeText={setText}
              />
            </View>
          </View>
        </View>
        <View style={{ gap: 6 }}>
          <Text
            style={{ color: "#243757", fontFamily: "PlusJakartaSansRegular" }}
          >
            Lampiran
          </Text>
          <View style={styles.inputContainer2}>
            <Image source={icons.icPaste} style={{ height: 24, width: 24 }} />
            <Text
              style={{
                textDecorationLine: "underline",
                color: "#6B788E",
                fontSize: 12,
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              Tambahkan Bukti Disini
            </Text>
            <Text
              style={{
                color: "#6B788E",
                fontSize: 12,
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              Anda bisa upload lebih dari 1 file
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            route.navigate("/bnichecking/laporan/SertakanLaporanSummary");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    height: 52,
  },
  inputContainer2: {
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    padding: 16,
    height: 94,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  headerText: { color: "#243757", fontFamily: "PlusJakartaSansBold" },
  subHeaderText: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
  },
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

export default SertakanLaporan;
