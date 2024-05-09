import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the warning icon
import ButtonPrimary from "../button/ButtonPrimary";
import icons from "../../constants/icons";

const ModalNotification = ({
  visible,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
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
          <View style={styles.warningIcon}>
            <Image
              source={icons.icWarning}
              resizeMode="contain"
              style={{ width: 70, height: 70 }}
            />
          </View>
          <TouchableOpacity onPress={onConfirm} style={styles.button}>
            <Text style={styles.text}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
        {/* Warning icon positioned absolutely outside the container */}
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
    position: "relative", // Set the container to relative position
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
    marginTop: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "PlusJakartaSansMedium",
  },
  warningIcon: {
    position: "absolute",
    top: -20,
    right: 100,
    transform: [{ translateX: -25 }, { translateY: -25 }], // Adjust based on icon size
  },
  button: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "50%",
  },
  text: {
    color: "white",
    marginRight: 5,
    fontSize: 14,
    fontFamily: "PlusJakartaSansMedium",
  },
});

export default ModalNotification;
