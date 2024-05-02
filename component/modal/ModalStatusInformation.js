import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import ButtonPrimary from "../button/ButtonPrimary";

const ModalStatusInformation = ({ modalVisible, closeModal }) => {
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
            <Text style={styles.titleText}>Status Rekening</Text>
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.statusItem}>
              <View style={styles.statusBadge}>
                <Text style={styles.statusTextNormal}>Normal</Text>
              </View>
              <Text style={styles.statusDescription}>
                Nomor Rekening ini belum pernah melalui proses investigasi.
              </Text>
            </View>
            <View style={styles.statusItem}>
              <View style={styles.statusBadgeInvestigation}>
                <Text style={styles.statusTextInvestigation}>Investigasi</Text>
              </View>
              <Text style={styles.statusDescription}>
                Nomor Rekening ini sedang dalam investigasi terkait dugaan
                penipuan.
              </Text>
            </View>
            <View style={styles.statusItem}>
              <View style={styles.statusBadgeBlocked}>
                <Text style={styles.statusTextBlocked}>Peringatan</Text>
              </View>
              <Text style={styles.statusDescription}>
                Nomor Rekening ini mempunyai riwayat laporan terkait penipuan.
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <ButtonPrimary text={"Mengerti"} onPress={closeModal} />
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
  statusContainer: {
    marginTop: 4,
    gap: 16,
  },
  statusItem: {
    gap: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 26,
    alignSelf: "baseline",
    backgroundColor: "#E7F8EF",
    borderRadius: 50,

  },
  statusBadgeInvestigation: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 26,
    alignSelf: "baseline",
    backgroundColor: "#FFF6E6",
    borderRadius: 50,
    
  },
  statusBadgeBlocked: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    height: 26,
    alignSelf: "baseline",
    backgroundColor: "#FBE9ED",
    borderRadius: 50,
    
  },
  statusTextNormal: {
    color: "#10B55A",
    fontSize: 12,
    fontFamily: "PlusJakartaSansBold",
    alignItems: "center",
    justifyContent: "center",
  },
  statusTextInvestigation: {
    color: "#FFA500",
    fontSize: 12,
    fontFamily: "PlusJakartaSansBold",
    alignItems: "center",
    justifyContent: "center",
  },
  statusTextBlocked: {
    color: "#D6264F",
    fontSize: 12,
    fontFamily: "PlusJakartaSansBold",
    alignItems: "center",
    justifyContent: "center",
  },
  statusDescription: {
    fontFamily: "PlusJakartaSansMedium",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
});

export default ModalStatusInformation;
