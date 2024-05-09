import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import icons from "../../constants/icons";
import LabelValidasiComponent from "../../component/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../../component/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../../component/label/LabelStatusComponent";
import ButtonPrimary from "../../component/button/ButtonPrimary";

import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/header/CustomAppBar";
import ModalStatusInformation from "../../component/modal/ModalStatusInformation";
import { createNewTransaction } from "../../services/TransactionService";
import RupiahFormatComponent from "../../component/text/RupiahFormatComponent";

import ModalNotification from "../../component/modal/ModalNotification";

const TransferConfirm = ({ route, navigation }) => {
  const { summary } = route.params;
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  // POP UP MODAL NOTIFICATION
  const [isModalNotification, setIsModalNotification] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalConfirmText, setModalConfirmText] = useState("");

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleCreateTransaction = async () => {
    setLoading(true);
    setDisableButton(true);
    try {
      let transactionSummary = await createNewTransaction(
        summary.account_number_source,
        summary.account_number_destination,
        summary.amount,
        summary.note,
        password
      );
      navigation.reset({
        index: 0,
        routes: [
          { name: "Tabs" },
          { name: "TransferSuccess", params: { summary: transactionSummary } },
        ],
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setModalTitle("Perhatian");
        setModalMessage("Password salah, silahkan coba kembali");
        setModalConfirmText("Tutup");
        setIsModalNotification(true);
      }
    } finally {
      const randomDelay = Math.floor(Math.random() * (1000 - 500)) + 500;
      setTimeout(() => {
        setLoading(false);
        setDisableButton(false);
      }, randomDelay);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <CustomAppBar
        title="Validasi"
        onLeftPress={() => navigation.goBack()}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <ScrollView>
        <View
          style={{
            gap: 10,
            marginHorizontal: 20,
            marginBottom: 140,
            marginTop: 20,
          }}
        >
          <LabelValidasiComponent
            title={"Rekening Tujuan"}
            subTitle={summary.account_number_destination}
          />
          <LabelValidasiComponent
            title={"Nama Penerima"}
            subTitle={"Sdr " + summary.account_name_destination}
          />

          <LabelValidasiComponent
            title={"Bank Tujuan"}
            subTitle={summary.bank_destination}
          />
          <TouchableOpacity onPress={openModal}>
            <LabelStatusComponent
              title={"Status Rekening"}
              status={summary.account_number_destination_status}
            />
          </TouchableOpacity>

          <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
          <LabelValidasiPengirimComponent
            title={"Nama Pengirim"}
            subTitle={summary.account_name_source}
          />
          <LabelValidasiPengirimComponent
            title={"Rekening Pengirim"}
            subTitle={summary.account_number_source}
          />
          <LabelValidasiPengirimComponent
            title={"Keterangan"}
            subTitle={summary.note ? summary.note : "-"}
          />
          <LabelValidasiPengirimComponent
            title={"Nominal"}
            subTitle={<RupiahFormatComponent value={summary.amount} />}
          />

          <LabelValidasiPengirimComponent
            title={"Fee"}
            subTitle={<RupiahFormatComponent value={summary.fee} />}
          />
          <View
            style={{
              backgroundColor: "#F5F6F7",
              height: 48,
              justifyContent: "center",
              borderRadius: 6,
              paddingHorizontal: 10,
            }}
          >
            <LabelValidasiPengirimComponent
              title={"Total"}
              subTitle={<RupiahFormatComponent value={summary.total_amount} />}
            />
          </View>
          <View style={{ height: 48, gap: 6, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 14,
                color: "#243757",
                fontFamily: "PlusJakartaSansMedium",
              }}
            >
              Password Transaksi
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Masukan Password Transaksi"
                placeholderTextColor={"#98A1B0"}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={handlePasswordChange}
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="#6B788E"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ModalStatusInformation
          modalVisible={modalVisible}
          closeModal={closeModal}
        />
        <ModalNotification
          visible={isModalNotification}
          onClose={() => setIsModalNotification(false)}
          onConfirm={() => setIsModalNotification(false)}
          title={modalTitle}
          message={modalMessage}
          confirmText={modalConfirmText}
        />
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            handleCreateTransaction();
          }}
          disable={!password || disableButton}
          loading={loading}
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    height: 48,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
  },
  input: {
    flex: 1,
    fontFamily: "PlusJakartaSansRegular",
  },
});
export default TransferConfirm;
