import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native"; // Import Checkbox and ButtonNextClose from their respective paths
// Import icons from its path
import icons from "../constants/icons";
import ModalCustom from "../component/common/modal/ModalCustom";
import ButtonPrimary from "../component/common/button/ButtonPrimary";

const AlertTest = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const openModal = (newStatus) => {
    setStatus(newStatus);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNextButtonClick = () => {
    setModalVisible(!modalVisible);
  };

  const handleCloseButtonClick = () => {
    setModalVisible(!modalVisible);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Define content and icons for different statuses
  const modalContent = {
    1: {
      linkText: "Cek No Rek Disini",
      mediumText:
        "Hati-hati dalam bertransaksi dengan Nomor Rekening Asing ini.",
      titleText: "Rekening Asing",
      iconStatus: icons.icStatusGreen,
    },
    2: {
      linkText: "Investigate Details",
      mediumText:
        "We are investigating this account. Please refrain from transactions.",
      titleText: "Investigate",
      iconStatus: icons.icStatusYellow,
    },
    3: {
      linkText: "Block Details",
      mediumText: "This account has been blocked. Transactions are prohibited.",
      titleText: "Blocked Account",
      iconStatus: icons.icStatusRed,
    },
  };

  // Determine whether to show checkbox based on status

  return (
    <View style={styles.container}>
      <ButtonPrimary
        onPress={() =>  openModal(1)} // Set status to 1 for REKENING_ASING
        text={"Selanjutnya"}
      />

      <ModalCustom
        modalVisible={modalVisible}
        closeModal={closeModal}
        linkText={status == 3 ? null : modalContent[status].linkText}
        mediumText={modalContent[status].mediumText}
        titleText={modalContent[status].titleText}
        iconStatus={modalContent[status].iconStatus}
        handleNextButtonClick={handleNextButtonClick}
        handleCloseButtonClick={handleCloseButtonClick}
        handleCheckboxChange={handleCheckboxChange}
        isChecked={isChecked}
        showCheckbox={status != 1 ? false : true}
        showCloseButton={status == 3 ? false : true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
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
  bottomSheetText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSansBold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#F15922",
  },
});

export default AlertTest;
