import { Text, View, Image } from "react-native";
import icons from "../../../constants/icons";

const LabelStatusComponent = ({ title, subTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
        <Image
          source={icons.icInfoValidasiPayment}
          style={{
            width: 16,
            height: 16,
            marginLeft: 4,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#E7F8EF",
          width: 59,
          height: 26,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#10B55A",
            fontSize: 12,
          }}
        >
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default LabelStatusComponent;
