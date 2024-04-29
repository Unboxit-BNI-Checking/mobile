import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons atau ikon lainnya sesuai kebutuhan
import icons from "../../../constants/icons";

const CustomAppBar = ({
  title,
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
  dimension,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onLeftPress} style={styles.btnContainer}>
        <Image
          source={leftIcon}
          style={styles.btnImg(dimension)}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onRightPress} style={styles.btnContainer}>
        <Image
          source={rightIcon}
          style={styles.btnImg(dimension)}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 56,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily : "PlusJakartaSansBold",
  },
  iconContainer: {
    // padding: 8,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
};

export default CustomAppBar;
