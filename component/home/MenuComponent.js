import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import icons from "../../constants/icons";

const data = [
  {
    id: 1,
    name: "Transfer",
    image: icons.icTransfer,
  },
  {
    id: 2,
    name: "E-Wallet",
    image: icons.icEwallet,
  },
  {
    id: 3,
    name: "Pembayaran",
    image: icons.icPembayaran,
  },
  {
    id: 4,
    name: "Pembelian",
    image: icons.icPembelian,
  },
  {
    id: 5,
    name: "Investasi",
    image: icons.icInvestasi,
  },
  {
    id: 6,
    name: "Rekeningku",
    image: icons.icRekeningku,
  },
  {
    id: 7,
    name: "BNI Checking",
    image: icons.icKredible,
  },
  {
    id: 8,
    name: "Lainnya",
    image: icons.icLainnya,
  },
];
const MenuComponent = () => {
  router = useRouter();
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View style={styles.contentMenu} key={item.id}>
          <TouchableOpacity
            key={item.id}
            // onPress={() => sampleCallback(item.name)}\
            onPress={() => router.push('/' + item.name)}
          >
            <View>
              <Image source={item.image} style={styles.imageMenu} />
              <Text style={{ textAlign: "center" }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  contentMenu: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageMenu: {
    width: 60,
    height: 60,
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default MenuComponent;
