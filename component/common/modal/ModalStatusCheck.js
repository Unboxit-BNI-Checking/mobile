import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import ButtonNextClose from "../button/ButtonNextClose";
import CheckboxCustom from "../checkbox/CheckboxCustom";
import ButtonPrimary from "../button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import icons from "../../../constants/icons";
const modalContent = {
  1: {
    linkText: "Cek No Rek Disini",
    mediumText: "Hati-hati dalam bertransaksi dengan Nomor Rekening Asing ini.",
    titleText: "Rekening Asing",
    iconStatus: icons.icStatusGreen,
  },
  2: {
    linkText: "Cek No Rek Disini",
    mediumText:
      "Nomor Rekening ini pernah menerima laporan dari orang lain dan sedang dalam investigasi.",
    titleText: "Rekening Sedang Dalam Investigasi",
    iconStatus: icons.icStatusYellow,
  },
  3: {
    linkText: "Block Details",
    mediumText: "Nomor Rekening ini terindikasi Penipuan dan sudah diblokir.",
    titleText: "Rekening Telah Diblokir",
    iconStatus: icons.icStatusRed,
  },
};
const ModalStatusCheck = ({
  modalVisible,
  closeModal,
  status,
  handleNextButtonClick,
  handleCloseButtonClick,
  handleCheckboxChange,
  isChecked,
}) => {
  const navigation = useNavigation();
  const { linkText, mediumText, titleText, iconStatus } = modalContent[status];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.bottomSheet}>
          <View style={styles.row}>
            <Image source={iconStatus} style={styles.icon} />
            <Text style={styles.titleText}>{titleText}</Text>
          </View>
          <View>
            <Text style={styles.mediumText}>{mediumText}</Text>
            {status === 3 ? null : (
              <TouchableOpacity
                onPress={() => navigation.replace("CekRekening")}
              >
                <Text style={[styles.mediumText, styles.linkText]}>
                  {linkText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {status !== 1 ? null : (
            <View style={{ marginTop: 5, marginBottom: 10 }}>
              <CheckboxCustom
                value={isChecked}
                onValueChange={handleCheckboxChange}
                label="Jangan tunjukan ini lagi hari ini"
              />
            </View>
          )}

          <View style={{ marginTop: 10 }} >
          {status === 3 ? (
            <ButtonPrimary text={"Batalkan"} onPress={handleCloseButtonClick} />
          ) : (
            <ButtonNextClose
              nextName={"Lanjutkan"}
              handleNextButtonClick={handleNextButtonClick}
              handleCloseButtonClick={handleCloseButtonClick}
              closeName={"Batalkan"}
            />
          )}
          </View>

         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  mediumText: {
    fontFamily: "PlusJakartaSansMedium",
    color: "#243757",
    marginBottom: 5,
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#F15922",
    fontFamily: "PlusJakartaSansMedium",
  },
});

export default ModalStatusCheck;
