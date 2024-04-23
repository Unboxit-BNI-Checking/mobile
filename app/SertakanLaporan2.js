import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

const SertakanLaporan2 = () => {
  const [text, setText] = useState("");
  return (
    <View style={{ marginTop: 30, gap: 10, marginHorizontal: 20 }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.headerText}>Transfer BNI</Text>
          <Text style={styles.headerText}>Rp-10.0000</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
            <Text style={styles.input}>
              InputLorem Ipsumis simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </Text>
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
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    height: 152,
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
    textAlign: "justify",
    color: "#5D6B82",
    fontFamily: "PlusJakartaSansRegular",
  },
  headerText: { color: "#243757", fontFamily: "PlusJakartaSansBold" },
  subHeaderText: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
  },
});

export default SertakanLaporan2;
