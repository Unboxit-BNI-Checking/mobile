import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProgressBarComponent = ({ currentStep }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.stepContainer}>
          <View style={[styles.step, currentStep >= 1 && styles.activeStep]}>
            {currentStep >= 1 ? (
              <MaterialIcons name="check" size={24} color="white" />
            ) : (
              <Text style={styles.stepText}>1</Text>
            )}
          </View>
          <Text style={styles.stepLabel}>Laporan</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.stepContainer}>
        <View style={[styles.step, currentStep >= 2 && styles.activeStep]}>
          {currentStep >= 2 ? (
            <MaterialIcons name="check" size={24} color="white" />
          ) : (
            <View>
              <Text style={styles.stepText}>2</Text>
            </View>
          )}
        </View>
        <Text style={styles.stepLabel}>Proses</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.stepContainer}>
        <View style={[styles.step, currentStep >= 3 && styles.activeStep]}>
          {currentStep >= 3 ? (
            <MaterialIcons name="check" size={24} color="white" />
          ) : (
            <Text style={styles.stepText}>3</Text>
          )}
        </View>
        <Text style={styles.stepLabel}>Selesai</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  
  },
  stepContainer: {
    alignItems: "center",
  },
  step: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeStep: {
    backgroundColor: "#F15922",
  },
  stepText: {
    color: "white",
    fontSize: 18,
  },
  stepLabel: {
    marginTop: 5,
  },
  line: {
    flex: 1,
    height: 2,
    marginTop: 20,
    backgroundColor: "#F15922",
  },
});

export default ProgressBarComponent;
