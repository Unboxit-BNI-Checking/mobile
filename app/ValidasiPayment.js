import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import icons from "../constants/icons";
import LabelValidasiComponent from "../component/common/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../component/common/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../component/common/label/LabelStatusComponent";

const ValidasiPayment = () => {
  return (
    <View style={{ marginTop: 50, gap: 10, marginHorizontal: 20 }}>
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
        <View
          style={{
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#C2C7D0",
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text></Text>
          <Image
            source={icons.icMataValidasiPayment}
            style={{ width: 18, height: 18 }}
          />
        </View>
      </View>
    </View>
  );
};

export default ValidasiPayment;
