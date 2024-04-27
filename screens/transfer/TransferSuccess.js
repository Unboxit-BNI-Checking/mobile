import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import icons from "../../constants/icons";
import LabelValidasiComponent from "../../component/common/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../../component/common/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../../component/common/label/LabelStatusComponent";
import ButtonPrimary from "../../component/common/button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import CustomAppBar from "../../component/common/header/CustomAppBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ModalStatusInformation from "../../component/common/modal/ModalStatusInformation";

const TransferSuccess = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomAppBar title="Status" />
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.centeredContent}>
            <Image
              style={styles.image}
              source={icons.icCeklisValidasiSuccessPayment}
            />
            <Text style={styles.title}>Transaksi Berhasil</Text>
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
          <TouchableOpacity onPress={openModal}>
            <LabelStatusComponent title={"Status Rekening"} status={2} />
          </TouchableOpacity>
          <View style={styles.separator}></View>
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
            subTitle={"100.000"}
          />
          <LabelValidasiPengirimComponent title={"Fee"} subTitle={"0"} />
          <View style={styles.totalContainer}>
            <LabelValidasiPengirimComponent
              title={"Total"}
              subTitle={"100.000"}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Transfer");
              }}
            >
              <Image
                style={styles.buttonIcon}
                source={icons.icRefresh}
                resizeMode="contain"
              />
              <Text style={styles.buttonText}>Transaksi Lagi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Image style={styles.buttonIcon} source={icons.icShare} />
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ModalStatusInformation
          modalVisible={modalVisible}
          closeModal={closeModal}
        />
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Kembali Ke Home"
          onPress={() => {
            navigation.navigate("Tabs");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    marginTop: 10,
    gap: 10,
    marginHorizontal: 20,
    marginBottom: 140,
  },
  centeredContent: {
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  image: {
    width: 54,
    height: 54,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "PlusJakartaSansBold",
    color: "#243757",
  },
  separator: {
    height: 1,
    backgroundColor: "#F5F6F7",
  },
  totalContainer: {
    backgroundColor: "#F5F6F7",
    paddingHorizontal: 10,
    height: 48,
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#006885",
    alignItems: "center",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  buttonIcon: {
    width: 16,
    height: 16,
  },
  buttonText: {
    color: "white",
    fontFamily: "PlusJakartaSansMedium",
    fontSize: 12,
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

export default TransferSuccess;
