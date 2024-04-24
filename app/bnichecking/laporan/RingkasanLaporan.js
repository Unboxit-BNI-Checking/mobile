import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import icons from "../../../constants/icons";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";

const RingkasanLaporan = () => {
  const route = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          headerTitle: "Ringkasan Laporan",
        }}
      />
      <ScrollView>
      <View style={{ gap: 10, marginBottom:200 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#F5F6F7",
              width: 308,
              height: 54,
              alignItems: "center",
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderRadius: 8,
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Image
              source={icons.icInfoRingkasanLaporan}
              style={{ width: 18, height: 18 }}
            />
            <Text
              style={{
                color: "#243757",
                fontFamily: "PlusJakartaSansRegular",
                fontSize: 12,
              }}
            >
              Laporan sudah terkirim dan akan segera {"\n"}ditindaklanjuti oleh
              tim
            </Text>
          </View>
        </View>
        <View style={{ height: 8, backgroundColor: "#F5F6F7" }}></View>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text
              style={{ color: "#6B788E", fontFamily: "PlusJakartaSansBold" }}
            >
              ID Laporan
            </Text>
            <Text
              style={{
                color: "#6B788E",
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              101010101010
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text
              style={{ color: "#6B788E", fontFamily: "PlusJakartaSansBold" }}
            >
              Tanggal Laporan
            </Text>
            <Text
              style={{
                color: "#6B788E",
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              12/04/2024
            </Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
        <View style={{ gap: 4, paddingHorizontal: 20 }}>
          <Text style={{ color: "#243757", fontFamily: "PlusJakartaSansBold" }}>
            Rekening Pelapor
          </Text>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "#6B788E" }}>1818181818</Text>
            <Text style={{ color: "#6B788E" }}>Nama Rekening Pelapor</Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
        <View style={{ gap: 4, paddingHorizontal: 20 }}>
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
        </View>
        <View style={{ height: 8, backgroundColor: "#F5F6F7" }}></View>
        <View style={{ gap: 10, paddingHorizontal: 20 }}>
          <Text style={styles.headerText}>Peristiwa Yang Dilaporkan</Text>
          <View style={{ gap: 6 }}>
            <Text
              style={{
                color: "#243757",
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              Kronologi
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.input} multiline={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </View>
          </View>
          <View style={{ gap: 6 }}>
            <Text
              style={{
                color: "#243757",
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              Lampiran
            </Text>

            <View
              style={{
                flexDirection: "row",
                height: 56,
                backgroundColor: "#F5F6F7",
                borderRadius: 6,
                padding: 16,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.icPaste2}
                  style={{ width: 24, height: 24 }}
                />
                <Text
                  style={{
                    textDecorationLine: "underline",
                    color: "#6B788E",
                    fontSize: 12,
                    fontFamily: "PlusJakartaSansRegular",
                  }}
                >
                  Screenshot-WhatsApp-3827.jpg
                </Text>
              </View>

              <Image source={icons.icX} style={{ width: 24, height: 24 }} />
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: { color: "#243757", fontFamily: "PlusJakartaSansBold" },
  subHeaderText: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F5F6F7",
    backgroundColor: "#F5F6F7",
    borderRadius: 8,
    padding: 16,
    height: 152,
  },
  input: {
    flex: 1,
    color: "#98A1B0",
    fontFamily: "PlusJakartaSansRegular",

    textAlign: "justify",
  },
});

export default RingkasanLaporan;
