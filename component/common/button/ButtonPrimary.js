import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";


const ButtonPrimary = ({ text, iconUrl, onPress, dimension }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Image
          source={iconUrl}
          style={styles.btnImg(dimension)}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F15922",
    padding: 14,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginRight: 10,
    fontFamily: "PlusJakartaSansMedium",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  })
});

export default ButtonPrimary;
