import { Text, View } from "react-native";

const LabelValidasiComponent = ({ title, subTitle }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "#006885",
          fontSize: 14,
          fontFamily: "PlusJakartaSansBold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "#006885",
          fontFamily: "PlusJakartaSansRegular",
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export default LabelValidasiComponent;
