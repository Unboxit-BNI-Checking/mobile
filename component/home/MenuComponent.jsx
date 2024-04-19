import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import images from "../../constants/images";

const data = [
  {
    id: 1,
    name: "Transfer",
    image: images.transfer,
  },
  {
    id: 2,
    name: "E-Wallet",
    image: images.ewallet,
  },
  {
    id: 3,
    name: "Pembayaran",
    image: images.pembayaran,
  },
  {
    id: 4,
    name: "Pembelian",
    image: images.pembelian,
  },
  {
    id: 5,
    name: "Investasi",
    image: images.investasi,
  },
  {
    id: 6,
    name: "Rekeningku",
    image: images.rekeningku,
  },
  {
    id: 7,
    name: "Kredible",
    image: images.kredible,
  },
  {
    id: 8,
    name: "Lainnya",
    image: images.lainnya,
  },
];
const MenuComponent = () => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View style={styles.contentMenu} key={item.id}>
          <TouchableOpacity
            key={item.id}
            // onPress={() => sampleCallback(item.name)}\
            onPress={() => console.log(item.name)}
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
