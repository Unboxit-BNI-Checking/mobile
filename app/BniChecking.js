import { View, Text, SafeAreaView, Image } from "react-native";
import icons from "../constants/icons";

const BniChecking = () => {
  return (
    <SafeAreaView
      style={{
        marginTop:30,
        flex: 1,
        flexDirection: "row",
        gap: 21,
      }}
    >
      <View
        style={{
          flexDirection: "column",
          gap: 6,
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Image
          source={icons.icBniChecking}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            alignItems: "center",
            textAlign: "center",
            fontFamily: "PlusJakartaSansRegular",
          }}
        >
          Cek {"\n"} Rekening
        </Text>
      </View>
      <View style={{ flexDirection: "column", gap: 6, alignItems: "center" }}>
        <Image
          source={icons.icPelaporan}
          style={{
            width: 50,
            height: 50,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            alignItems: "center",
            textAlign: "center",
            fontFamily: "PlusJakartaSansRegular",
          }}
        >
          Pelaporan
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default BniChecking;
