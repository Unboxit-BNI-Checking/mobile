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

const ModalCustom = ({
  modalVisible,
  closeModal,
  linkText,
  mediumText,
  titleText,
  iconStatus,
  handleNextButtonClick,
  handleCloseButtonClick,
  handleCheckboxChange,
  isChecked,
  showCheckbox,
  showCloseButton,
  // New prop to control checkbox visibility
}) => {

   
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
            <TouchableOpacity onPress={() => route.replace("/bnichecking/checkrekening/CekRekening")}>
             
              <Text style={[styles.mediumText, styles.linkText]}>
                {linkText}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            {showCheckbox && (
              <CheckboxCustom
                value={isChecked}
                onValueChange={handleCheckboxChange}
                label="Jangan tunjukan ini lagi hari ini"
              />
            )}
          </View>
          {showCloseButton ? (
            <ButtonNextClose
              nextName={"Lanjutkan"}
              handleNextButtonClick={handleNextButtonClick}
              handleCloseButtonClick={handleCloseButtonClick}
              closeName={"Batalkan"}
            />
          ) : (
            <ButtonPrimary text={"Batalkan"} onPress={handleNextButtonClick} />
          )}
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

export default ModalCustom;
