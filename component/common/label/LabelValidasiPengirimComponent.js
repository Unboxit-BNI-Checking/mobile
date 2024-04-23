import { Text, View } from "react-native";

const LabelValidasiPengirimComponent = ({ title, subTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: "#243757",
          fontSize: 14,
          fontFamily: "PlusJakartaSansBold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#243757",
          fontFamily: "PlusJakartaSansRegular",
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export default LabelValidasiPengirimComponent;
