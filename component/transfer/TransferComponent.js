import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import icons from "../../constants/icons";

const data = [
  {
    id: 1,
    name: "Rekening Sendiri",
    image: icons.icRekeningSendiri,
  },
  {
    id: 2,
    name: "BNI",
    image: icons.icTransferBni,
  },
  {
    id: 3,
    name: "Antarbank",
    image: icons.icTransferAntarbank,
  },
  {
    id: 4,
    name: "Dana Pensiun / BNI SImponi",
    image: icons.icDanaPensiun,
  },
  {
    id: 5,
    name: "Virtual Account Bil",
    image: icons.icVirtualAccountBill,
  },
  {
    id: 6,
    name: "International Remittence",
    image: icons.icInternationalRemitance,
  },
  {
    id: 7,
    name: "Transfer Valas Antar BNI",
    image: icons.icTransferValas,
  },
];
const TransferComponent = () => {
  router = useRouter();
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View style={styles.contentMenu} key={item.id}>
          <TouchableOpacity
            key={item.id}
            // onPress={() => sampleCallback(item.name)}\
            onPress={() => router.push("/" + item.name)}
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

export default TransferComponent;
