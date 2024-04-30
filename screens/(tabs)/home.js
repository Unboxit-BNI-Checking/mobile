import {
  View,
  ScrollView,
  Image,
  StatusBar,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import icons from "../../constants/icons";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getAccountData } from "../../services/AccountService";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import images from "../../constants/images";

const RekeningComponent = () => {
  const [accountData, setAccountData] = useState(null);
  const [showBalance, setShowBalance] = useState(false);
  useEffect(() => {
    const getAccount = async () => {
      setAccountData(await getAccountData());
    };

    getAccount();

  }, []);
  return (
    <View style={{ height: 260 }}>
      <View
        style={{
          backgroundColor: "#F37548",
          height: "82%",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <View style={{ marginHorizontal: 16, marginTop: 14 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "PlusJakartaSansMedium",
              fontSize: 16,
            }}
          >
            Halo,
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "PlusJakartaSansBold",
              fontSize: 16,
            }}
          >
            {accountData && accountData.data.customer_name}
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "blue" }}>
        <View
          style={{
            marginHorizontal: 16,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            marginTop: -130,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: "white",
            borderRadius: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 18,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "PlusJakartaSansBold",
                color: "#5D6B82",
              }}
            >
              BNI Taplus Muda
            </Text>
            <View
              style={{
                height: 26,
                backgroundColor: "#F5F6F7",
                flexDirection: "row",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 50,
              }}
            >
              <Image
                source={icons.icPoinHome}
                style={{
                  height: 15,
                  width: 32,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: "#F15922",
                  fontSize: 12,
                  fontFamily: "PlusJakartaSansBold",
                }}
              >
                3.165
              </Text>
              <Image
                source={icons.icArrowRightPoin}
                style={{
                  height: 10,
                  width: 10,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text
              style={{
                color: "#5D6B82",
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              {accountData && accountData.data.account_number}
            </Text>
            <Octicons name="copy" size={16} color="#98A1B0" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 14,
            }}
          >
            {showBalance ? (
              <Text
                style={{
                  fontFamily: "PlusJakartaSansBold",
                  fontSize: 16,
                  color: "#5D6B82",
                }}
              >
                Rp.{accountData && accountData.data.balance}
              </Text>
            ) : (
              <TouchableOpacity onPress={() => setShowBalance(true)}>
                <Text
                  style={{
                    fontFamily: "PlusJakartaSansBold",
                    fontSize: 16,
                    color: "#5D6B82",
                  }}
                >
                  Rp.******
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => setShowBalance(!showBalance)}
              style={{ marginTop: 4 }}
            >
              <Ionicons
                name={showBalance ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#5D6B82"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: "#E5E5E5",
              borderBottomWidth: 1,
              marginTop: 14,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "PlusJakartaSansRegular",
                color: "#5D6B82",
              }}
            >
              Semua Rekeningmu
            </Text>
            <Ionicons name="chevron-down" size={18} color="#5D6B82" />
          </View>
        </View>
      </View>
    </View>
  );
};

const data = [
  {
    id: 1,
    name: "Transfer",
    route: "Transfer",
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
    route: "BNIChecking",
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
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View style={styles.contentMenu} key={item.id}>
          <TouchableOpacity
            key={item.id}
            // onPress={() => sampleCallback(item.name)}\
            onPress={() => navigation.navigate(item.route)}
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

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <RekeningComponent />
          <MenuComponent />
          <PromotionComponent />
        </View>
      </ScrollView>
    </View>
  );
}
