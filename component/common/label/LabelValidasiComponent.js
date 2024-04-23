import { Text, View } from "react-native";

const LabelValidasiComponent = ({ title, subTitle }) => {
  return (
    <View
      style={{
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
      <Text style={{ fontSize: 14, color: "#006885" }}>{subTitle}</Text>
    </View>
  );
};

export default LabelValidasiComponent;
