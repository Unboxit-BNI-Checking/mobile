import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import icons from "../../constants/icons";
import LabelValidasiComponent from "../../component/common/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../../component/common/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../../component/common/label/LabelStatusComponent";
import ButtonPrimary from "../../component/common/button/ButtonPrimary";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/common/header/CustomAppBar";
import ModalStatusInformation from "../../component/common/modal/ModalStatusInformation";

const TransferConfirm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
            subTitle={"1234567890"}
          />
          <LabelValidasiComponent
            title={"Nama Penerima"}
            subTitle={"Sdr Jeon Wonwoo"}
          />

          <LabelValidasiComponent title={"Bank Tujuan"} subTitle={"BNI"} />
          <TouchableOpacity onPress={openModal}>
            <LabelStatusComponent title={"Status Rekening"} status={1} />
          </TouchableOpacity>

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
            subTitle={"100.000"}
          />
          <LabelValidasiPengirimComponent title={"Fee"} subTitle={"0"} />
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
              subTitle={"100.000"}
            />
          </View>
          <View style={{ height: 48, gap: 6, marginTop: 10 }}>
            <Text style={{ fontSize: 14, color: "#243757" }}>
              Password Transaksi
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Masukan Password Transaksi"
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
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            navigation.navigate("TransferSuccess");
          }}
          disable={!password}
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
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
  },
  input: {
    flex: 1,
  },
});
export default TransferConfirm;
