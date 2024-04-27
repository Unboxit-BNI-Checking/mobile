import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";

import ButtonNextClose from "../../../component/common/button/ButtonNextClose";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/common/header/CustomAppBar";
import ModalStatusInformation from "../../../component/common/modal/ModalStatusInformation";
import LabelValidasiComponent from "../../../component/common/label/LabelValidasiComponent";
import LabelStatusComponent from "../../../component/common/label/LabelStatusComponent";

const HasilCekRekening = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleNextButtonClick = () => {
    navigation.replace("CekRekening");
  };

  const handleCloseButtonClick = () => {
    navigation.replace("Tabs");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomAppBar
        title="Transfer"
        onLeftPress={() => navigation.goBack()}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <View style={styles.container}>
        <View style={styles.rekeningInfoContainer}>
          <View style={styles.rekeningInfo}>
            <Text style={styles.name}>Jeon Wonwoo</Text>
            <Text style={styles.bank}>Bank Negara Indonesia</Text>
            <Text style={styles.accountNumber}>1234567890</Text>
          </View>
          <View style={styles.divider}></View>

          <TouchableOpacity onPress={openModal} style={styles.statusContainer}>
            <LabelStatusComponent title="Status Rekening" status={3} />
          </TouchableOpacity>
        </View>
        <View style={styles.reportContainer}>
          <View style={styles.report}>
            <Text style={styles.reportNumber}>3</Text>
            <Text style={styles.reportText}>Laporan Nasabah</Text>
          </View>
          <View style={styles.report}>
            <Text style={styles.reportNumber}>7</Text>
            <Text style={styles.reportText}>Laporan Sosial {"\n"}Media</Text>
          </View>
        </View>

        <ModalStatusInformation
          modalVisible={modalVisible}
          closeModal={closeModal}
        />

        <View style={styles.bottomButtonContainer}>
          <ButtonNextClose
            nextName="Cek Rekening Lagi"
            closeName="Kembali Ke Home"
            handleNextButtonClick={handleNextButtonClick}
            handleCloseButtonClick={handleCloseButtonClick}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  rekeningInfoContainer: {
    width: 335,
    height: 150,
    backgroundColor: "#FFF",
    padding: 14,
    elevation: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  rekeningInfo: {
    marginBottom: 8,
    gap: 4,
  },
  name: {
    color: "#243757",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
  },
  bank: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 14,
  },
  accountNumber: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 14,
  },
  divider: {
    width: 307,
    height: 1,
    backgroundColor: "#F5F6F7",
  },
  statusContainer: {
    marginTop: 10,
  },
  infoIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 79,
    height: 26,
    borderRadius: 50,
    backgroundColor: "#FFF6E6",
    marginLeft: 100,
  },
  buttonText: {
    color: "#FFA500",
    fontSize: 12,
  },
  reportContainer: {
    flexDirection: "row",
    width: 335,
    justifyContent: "space-between",
  },
  report: {
    width: 160.5,
    padding: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 14,
    elevation: 10,
    borderRadius: 8,
  },
  reportNumber: {
    color: "#F15922",
    fontSize: 32,
    fontFamily: "PlusJakartaSansBold",
    justifyContent: "center",
  },
  reportText: {
    color: "#6B788E",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  titleText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSansBold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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

export default HasilCekRekening;
