import { View, Text, Image } from "react-native";
import images from "../../constants/images";

const PromotionComponent = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 30, marginBottom: 140 }}>
      <Text
        style={{
          fontFamily: "PlusJakartaSansBold",
          color: "#243757",
        }}
      >
        Promo & Informasi
      </Text>
      <Image
        source={images.promotion}
        style={{
          width: "100%",
          height: 140,
          resizeMode: "cover",
          borderRadius: 10,
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default PromotionComponent;
