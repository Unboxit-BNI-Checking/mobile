import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import icons from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/common/header/CustomAppBar";

const data = [
  {
    id: 1,
    name: "Cek\nRekening",
    route: "CekRekening",
    image: icons.icBniChecking,
  },
  {
    id: 2,
    name: "Pelaporan",
    route: "Pelaporan",
    image: icons.icPelaporan,
  },
];
const BniChecking = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomAppBar
        title="BNI Checking"
        onLeftPress={() => navigation.reset({ routes: [{ name: "Tabs" }] })}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <View style={styles.container}>
        {data.map((item) => (
          <View style={styles.contentMenu} key={item.id}>
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate(item.route)}
            >
              <View>
                <Image source={item.image} style={styles.imageMenu} />
                <Text style={{ textAlign: "center" }} numberOfLines={2}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },
  contentMenu: {
    width: "25%",
    alignItems: "center",
  },
  imageMenu: {
    width: 60,
    height: 60,
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default BniChecking;
