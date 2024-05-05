import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";

const ButtonPrimary = ({
  text,
  iconUrl,
  onPress,
  dimension,
  disable,
  loading,
}) => {
  const buttonStyles = disable
    ? [styles.button, styles.disabledButton]
    : styles.button;
  const textStyles = disable ? [styles.text, styles.disabledText] : styles.text;

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} disabled={disable}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color="white"
            style={styles.loadingIndicator}
          />
        ) : (
          <>
            <Text style={textStyles}>{text}</Text>
            <Image
              source={iconUrl}
              style={styles.btnImg(dimension)}
              resizeMode="contain"
            />
          </>
        )}
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
  disabledButton: {
    backgroundColor: "#CCCCCC", // Change to gray color
  },
  disabledText: {
    color: "#999999", // Change to gray color
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
  loadingIndicator: {
    marginRight: 10, // Adjust margin to separate loading indicator from text
  },
});

export default ButtonPrimary;
