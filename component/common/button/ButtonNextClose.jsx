import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ButtonNextClose = ({closeName, handlePressModal, nextName}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        marginTop: 20,
      }}
    >
      <TouchableOpacity style={styles.closeButton} onPress={handlePressModal}>
        <Text style={styles.closeButtonText}>{closeName}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={handlePressModal}>
        <Text style={styles.nextButtonText}>{nextName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    flex: 1,
    backgroundColor: "#FEEEE9",
    padding: 10,
    borderRadius: 100,
    width: 160,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#F15922",
    fontSize: 16,
    fontFamily: "PlusJakartaSansMedium",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#F15922",
    padding: 10,
    borderRadius: 100,
    width: 160,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "PlusJakartaSansMedium",
  },
});
export default ButtonNextClose;
