import React, { useState } from "react";
import { View, Text, Image, StyleSheet,  TextInput, ScrollView } from "react-native";
import icons from "../../constants/icons";
import LabelValidasiComponent from "../../component/common/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../../component/common/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../../component/common/label/LabelStatusComponent";
import ButtonPrimary from "../../component/common/button/ButtonPrimary";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../component/common/header/ScreenHeaderBtn";

const TransferConfirm = () => {

  const router = useRouter();
  const [text, setText] = useState("");
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
                router.back();
              }}
            />
          ),
          headerTitle: "Validasi",
        }}
      />
      <ScrollView  >
      <View style={{ gap: 10, marginHorizontal: 20, marginBottom: 140, marginTop: 20 }}>
        <LabelValidasiComponent
          title={"Rekening Tujuan"}
          subTitle={"1234567890"}
        />
        <LabelValidasiComponent
          title={"Nama Penerima"}
          subTitle={"Sdr Jeon Wonwoo"}
        />

        <LabelValidasiComponent title={"Email Penerima"} subTitle={""} />
        <LabelValidasiComponent title={"Bank Tujuan"} subTitle={"BNI"} />
        <LabelStatusComponent title={"Status Rekening"} subTitle={"Normal"} />
        <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
        <LabelValidasiPengirimComponent
          title={"Nama Pengirim"}
          subTitle={"Amelia Qatrunnada"}
        />
        <LabelValidasiPengirimComponent
          title={"Rekening Pengirim"}
          subTitle={"1818181818"}
        />
        <LabelValidasiPengirimComponent title={"Nominal"} subTitle={"10.000"} />
        <LabelValidasiPengirimComponent title={"Fee"} subTitle={"0"} />
        <View
          style={{
            backgroundColor: "#F5F6F7",

            height: 48,
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <LabelValidasiPengirimComponent title={"Total"} subTitle={"10.000"} />
        </View>
        <View style={{ height: 48, gap: 6, marginTop: 10 }}>
          <Text style={{ fontSize: 14, color: "#243757" }}>
            Password Transaksi
          </Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={text}
              onChangeText={setText}
            />
            <Image
              source={icons.icMataValidasiPayment}
              style={{ width: 18, height: 18 }}
            />
          </View>
        </View>
      </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary text="Konfirmasi" onPress={() => {
          router.navigate("/transfer/TransferSuccess");
        }} />
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
  inputContainer: {
    flexDirection: "row",
   justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
  },
});
export default TransferConfirm;
