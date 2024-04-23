import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";
import icons from "../../../constants/icons";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";


const data = [
  {
    id: 1,
    name: "BNI\nChecking",
    route: "bnichecking/checkrekening/CekRekening",
    image: icons.icBniChecking,
  },
  {
    id: 2,
    name: "Laporan",
    route: "bnichecking/laporan/Pelaporan",
    image: icons.icPelaporan,
  },
  
];
const BniChecking = () => {
  router = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitleStyle: {
            color: "#243757",
          },

          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.icArrowForward}
              dimension={24}
              handlePress={() => {
                router.back();
              }}
            />
          ),
          headerTitle: "Transfer",
        }}
      />
      {data.map((item) => (
        <View style={styles.contentMenu} key={item.id}>
          <TouchableOpacity
            key={item.id}
            // onPress={() => sampleCallback(item.name)}\
            onPress={() => router.push("/" + item.route)}
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
