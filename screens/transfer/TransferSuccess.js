import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import icons from "../../constants/icons";
import LabelValidasiComponent from "../../component/common/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../../component/common/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../../component/common/label/LabelStatusComponent";
import ScreenHeaderBtn from "../../component/common/header/ScreenHeaderBtn";
import ButtonPrimary from "../../component/common/button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";


const TransferSuccess = () => {

  const navigation = useNavigation();
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      
      <ScrollView>
        <View
          style={{
            marginTop: 10,
            gap: 10,
            marginHorizontal: 20,
            marginBottom: 140,
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 20, gap: 12 }}>
            <Image
              style={{
                width: 54,
                height: 54,
                alignItems: "center",
              }}
              source={icons.icCeklisValidasiSuccessPayment}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "PlusJakartaSansBold",
                color: "#243757",
              }}
            >
              Transaksi Berhasil
            </Text>
          </View>
          <LabelValidasiComponent
            title={"Rekening Tujuan"}
            subTitle={"1234567890"}
          />
          <LabelValidasiComponent
            title={"Nama Penerima"}
            subTitle={"Sdr Jeon Wonwoo"}
          />
          <LabelValidasiComponent
            title={"Tanggal Transaksi"}
            subTitle={"19-04-2024"}
          />
          <LabelValidasiComponent
            title={"Waktu Transaksi"}
            subTitle={"19:48:23 WIB"}
          />
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
          <LabelValidasiPengirimComponent
            title={"Nominal"}
            subTitle={"10.000"}
          />
          <LabelValidasiPengirimComponent title={"Fee"} subTitle={"0"} />
          <View
            style={{
              backgroundColor: "#F5F6F7",

paddingHorizontal: 10,
              height: 48,
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
           
              <LabelValidasiPengirimComponent
                title={"Total"}
                subTitle={"10.000"}
              />
           
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Kembali Ke Home"
          onPress={() => {
            //please create route to back home
           navigation.navigate("Tabs");
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

export default TransferSuccess;
