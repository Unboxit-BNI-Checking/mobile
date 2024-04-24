import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import icons from "../../constants/icons";

const data = [
  {
    id: 1,
    name: "Transfer",
    route: "transfer/Transfer",
    image: icons.icTransfer,
  },
  {
    id: 2,
    name: "E-Wallet",
    route: "transfer/TransferEwallet",
    image: icons.icEwallet,
  },
  {
    id: 3,
    name: "Pembayaran",
    route: "transfer/TransferPembayaran",
    image: icons.icPembayaran,
  },
  {
    id: 4,
    name: "Pembelian",
    route: "transfer/TransferPembelian",
    image: icons.icPembelian,
  },
  {
    id: 5,
    name: "Investasi",
    route: "transfer/TransferInvestasi",
    image: icons.icInvestasi,
  },
  {
    id: 6,
    name: "Rekeningku",
    route: "transfer/TransferRekeningku",
    image: icons.icRekeningku,
  },
  {
    id: 7,
    name: "BNI\nChecking",
    route: "bnichecking/checkrekening/BniChecking",
    image: icons.icKredible,
  },
  {
    id: 8,
    name: "Lainnya",
    route: "transfer/TransferLainnya",
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
            onPress={() => router.push("/" + item.route)}
          >
            <View>
              <Image source={item.image} style={styles.imageMenu} />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "PlusJakartaSansMedium",
                  fontSize: 13,
                }}
              >
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

export default MenuComponent;
