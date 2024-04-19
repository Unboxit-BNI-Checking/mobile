import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.btnContainer}>
      <Image  source={iconUrl} style={styles.btnImg(dimension)}  resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
  
});

export default ScreenHeaderBtn;
