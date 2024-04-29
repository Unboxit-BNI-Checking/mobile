import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import icons from "../../../constants/icons";

const CheckboxCustom = ({ value, onValueChange, label }) => {
  return (
    <TouchableOpacity onPress={() => onValueChange(!value)}>
      <View style={styles.checkboxContainer}>
        {value ? (
          <Image source={icons.icCheckboxActive} style={[styles.checkbox]} />
        ) : (
          <Image source={icons.icCheckboxInactive} style={styles.checkbox} />
        )}
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  label: {
    fontSize: 12,
    fontFamily: "PlusJakartaSansMedium",
  },
});

export default CheckboxCustom;
