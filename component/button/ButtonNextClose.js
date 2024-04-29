import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ButtonNextClose = ({
  nextName,
  closeName,
  handleNextButtonClick,
  handleCloseButtonClick,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={handleCloseButtonClick}
      >
        <Text style={styles.closeButtonText}>{closeName}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextButtonClick}
      >
        <Text style={styles.nextButtonText}>{nextName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },

  closeButton: {
    flex: 1,
    padding: 14,
    backgroundColor: "#FEEEE9",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#F15922",

    fontFamily: "PlusJakartaSansMedium",
  },
  nextButton: {
    flex: 1,
    backgroundColor: "#F15922",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  nextButtonText: {
    color: "white",

    fontFamily: "PlusJakartaSansMedium",
  },
});
export default ButtonNextClose;
