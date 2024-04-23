import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../component/common/header/ScreenHeaderBtn";

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
    route: "transfer/TransferBNI",
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

export default Transfer;