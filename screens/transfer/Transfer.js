import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/header/CustomAppBar";

const data = [
  {
    id: 1,
    name: "Rekening Sendiri",
    route: "TransferRekeningSendiri",
    image: icons.icRekeningSendiri,
  },
  {
    id: 2,
    name: "BNI",
    route: "TransferBNI",
    image: icons.icTransferBni,
  },
  {
    id: 3,
    name: "Antarbank",
    route: "TransferAntarbank",
    image: icons.icTransferAntarbank,
  },
  {
    id: 4,
    name: "Dana Pensiun / BNI SImponi",
    route: "TransferDanaPensiun",
    image: icons.icDanaPensiun,
  },
  {
    id: 5,
    name: "Virtual Account Bil",
    route: "TransferVirtualAccountBill",
    image: icons.icVirtualAccountBill,
  },
  {
    id: 6,
    name: "International Remittence",
    route: "TransferInternationalRemitance",
    image: icons.icInternationalRemitance,
  },
  {
    id: 7,
    name: "Transfer Valas Antar BNI",
    route: "TransferValas",
    image: icons.icTransferValas,
  },
];
const Transfer = () => {
  const navigation = useNavigation();
  const handleButtonMenu = (item) => {
    if (item.route === "TransferBNI") {
      navigation.navigate("TransferBNI");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
       <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <CustomAppBar
        title="Transfer"
        onLeftPress={() => navigation.reset({ routes: [{ name: "Tabs" }] })}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <View style={styles.container}>
        {data.map((item) => (
          <View style={styles.contentMenu} key={item.id}>
            <TouchableOpacity
              key={item.id}
              // onPress={() => sampleCallback(item.name)}\
              onPress={() => handleButtonMenu(item)}
            >
              <View>
                <Image source={item.image} style={styles.imageMenu} />
                <Text style={{ textAlign: "center", fontFamily: "PlusJakartaSansMedium", fontSize: 13 }} numberOfLines={2}>
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

export default Transfer;
