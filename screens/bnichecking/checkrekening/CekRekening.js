import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import ButtonPrimary from "../../../component/button/ButtonPrimary";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import { checkAccountNumberReport } from "../../../services/ReportService";

import ModalNotification from "../../../component/modal/ModalNotification";

const CekRekening = ({ navigation }) => {
 
  const [rekening, setRekening] = useState("");

  // POP UP MODAL NOTIFICATION
  const [isModalNotification, setIsModalNotification] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalConfirmText, setModalConfirmText] = useState("");

  const handleCheckAccountNumber = async (rekening) => {
    checkAccountNumberReport(rekening)
      .then((response) => {
        navigation.navigate("HasilCekRekening", {
          reportData: response.data,
        });
      })
      .catch((error) => {
        setModalTitle("Perhatian");
        setModalMessage("Nomor rekening yang anda masukkan tidak valid.");
        setModalConfirmText("Tutup");
        setIsModalNotification(true);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <CustomAppBar
        title="Cek Rekening"
        onLeftPress={() => navigation.goBack()}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />

      <View style={{ padding: 20 }}>
        <View style={{ gap: 8 }}>
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
              color: "#6B788E",
            }}
          >
            Identifikasi apakah seseorang berpotensi {"\n"}melakukan penipuan
            sebelum bertransaksi.
          </Text>
        </View>
        <View
          style={{
            gap: 15,
            marginTop: 10,
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

          <View style={styles.inputContainer}>
            <Image source={icons.icSearchCekRekening} />
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nomor Rekening"
              placeholderTextColor={"#98A1B0"}
              value={rekening}
              onChangeText={setRekening}
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Cek Rekening"
          onPress={() => {
            handleCheckAccountNumber(rekening);
          }}
          disable={!rekening}
        />
      </View>
      <ModalNotification
        visible={isModalNotification}
        onClose={() => setIsModalNotification(false)}
        onConfirm={() => setIsModalNotification(false)}
        title={modalTitle}
        message={modalMessage}
        confirmText={modalConfirmText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
  },
  input: {
    flex: 1,
    marginLeft: 10,
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

export default CekRekening;
