import React from "react";
import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ButtonNextClose from "../button/ButtonNextClose";
import CheckboxCustom from "../checkbox/CheckboxCustom";
import { useNavigation } from "@react-navigation/native";
import { checkAccountNumberReport } from "../../services/ReportService";
const modalContent = {
  1: {
    linkText: "Cek No Rek Disini",
    mediumText:
      "Nomor Rekening ini belum pernah melalui proses investigasi. Tetap berhati-hati dalam bertransaksi.",
    titleText: "Status Rekening:",
    statusText: "Normal",
  },
  2: {
    linkText: "Cek No Rek Disini",
    mediumText:
      "Nomor Rekening ini sedang dalam investigasi terkait dugaan penipuan. ",
    titleText: "Status Rekening:",
    statusText: "Investigasi",
  },
  3: {
    linkText: "Cek No Rek Disini",
    mediumText:
      "Nomor Rekening ini mempunyai riwayat laporan terkait penipuan.",
    titleText: "Status Rekening:",
    statusText: "Peringatan",
  },
};

const getStatusStyles = (status) => {
  switch (status) {
    case 1:
      return {
        badge: {
          paddingHorizontal: 8,
          paddingVertical: 2,
          height: 26,
          marginTop: 5,
          backgroundColor: "#E7F8EF",
          borderRadius: 50,
          marginTop: 5,
        },
        text: {
          color: "#10B55A",
          fontSize: 12,
          fontFamily: "PlusJakartaSansBold",
        },
      };
    case 2:
      return {
        badge: {
          paddingHorizontal: 8,
          paddingVertical: 2,
          height: 26,
          marginTop: 5,
          backgroundColor: "#FFF6E6",
          borderRadius: 50,
        },
        text: {
          color: "#FFA500",
          fontSize: 12,
          fontFamily: "PlusJakartaSansBold",
        },
      };
    case 3:
      return {
        badge: {
          paddingHorizontal: 8,
          paddingVertical: 2,
          height: 26,
          marginTop: 5,
          backgroundColor: "#FBE9ED",
          borderRadius: 50,
        },
        text: {
          color: "#D6264F",
          fontSize: 12,
          fontFamily: "PlusJakartaSansBold",
        },
      };
    default:
      return {
        badge: {},
        text: {},
      };
  }
};
const ModalStatusCheck = ({
  modalVisible,
  closeModal,
  status,
  handleNextButtonClick,
  handleCloseButtonClick,
  accountNumberDestination,
  accountNumberSource,
  nominal,
  note,
}) => {
  const navigation = useNavigation();
  const { linkText, mediumText, titleText, statusText } = modalContent[status];
  const statusStyles = getStatusStyles(status);

  const handleCheckAccountNumber = async (accountNumberDestination) => {
    reportData = await checkAccountNumberReport(accountNumberDestination);
    navigation.navigate("TransferHasilCekRekening", {
      reportData: reportData.data,
      transactionSummary: {
        accountNumberDestination: accountNumberDestination,
        accountNumberSource: accountNumberSource,
        nominal: nominal,
        note: note,
      },
    });
    closeModal();
  };

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
            <Text style={styles.titleText}>{titleText}</Text>
            <View style={statusStyles.badge}>
              <Text style={statusStyles.text}>{statusText}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.mediumText}>{mediumText}</Text>
            <TouchableOpacity
              onPress={() => {
                handleCheckAccountNumber(accountNumberDestination);
              }}
            >
              <Text style={[styles.mediumText, styles.linkText]}>
                {linkText}
              </Text>
            </TouchableOpacity>
            {status === 3 ? (
              <Text style={styles.redTextBold}>
                Apakah Anda yakin tetap ingin melanjutkan?
              </Text>
            ) : null}
          </View> 

          <View style={{ marginTop: 10 }}>
            <ButtonNextClose
              nextName={"Lanjutkan"}
              handleNextButtonClick={handleNextButtonClick}
              handleCloseButtonClick={handleCloseButtonClick}
              closeName={"Batalkan"}
            />
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
    gap: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  mediumText: {
    fontFamily: "PlusJakartaSansRegular",
    color: "#243757",
    marginBottom: 5,
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#F15922",
    fontFamily: "PlusJakartaSansMedium",
  },

  redTextBold: {
    color: "#D6264F",
    marginTop: 5,
    marginBottom: 10,
    fontFamily: "PlusJakartaSansBold",
  },
});

export default ModalStatusCheck;
