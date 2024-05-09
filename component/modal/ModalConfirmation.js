import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import ButtonNextClose from "../button/ButtonNextClose";

const ModalConfirmation = ({
  visible,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.dialog}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <ButtonNextClose
            nextName={confirmText}
            closeName={cancelText}
            handleNextButtonClick={onConfirm}
            handleCloseButtonClick={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontFamily: "PlusJakartaSansBold",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "PlusJakartaSansMedium",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ModalConfirmation;
