import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

const CekRekening = () => {
  const [text, setText] = useState("");
  return (
    <View
      style={{
        marginTop: 30,
        flex: 1,
        alignItems: "center",
        gap:10,
      }}
    >
      <View style={{ gap:8 }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "PlusJakartaSansBold",
            color: "#243757",
          }}
        >
          Cek Rekening
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "PlusJakartaSansRegular",
            width: 335,
            height: 40,
            color: "#6B788E",
          }}
        >
          Identifikasi apakah seseorang berpotensi {"\n"}melakukan penipuan
          sebelum bertransaksi.
        </Text>
      </View>
      <View
        style={{
          gap: 6,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "PlusJakartaSansRegular",
            color: "#243757",
          }}
        >
          No Rekening
        </Text>
        <View
          style={{
            
            height: 48,
            padding: 16,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#C2C7D0",
            flexDirection: "row",
            alignItems: "center",
            justifyContent:'center',
            gap: 12,
          }}
        >
          <Image
            source={icons.icSearchCekRekening}
            style={{
              width: 18,
              height: 18,
            }}
          />
          <TextInput
            style={{
              width: 273,
              fontSize: 14,
              fontFamily: "PlusJakartaSansRegular",
              justifyContent:'center'
            }}
            placeholder="Masukkan No Rekening"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
        </View>
      </View>
    </View>
  );
};

export default CekRekening;
