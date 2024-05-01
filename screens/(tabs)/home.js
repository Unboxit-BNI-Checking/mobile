import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Modal,
  FlatList,
} from "react-native";
import icons from "../../constants/icons";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getAccountData } from "../../services/AccountService";
import { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import images from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/header/CustomAppBar";

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
    <View style={{ paddingHorizontal: 20, marginTop: 20, marginBottom: 150 }}>
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


const dummyData = {
  success: true,
  data: [
    {
      account_id: 2,
      account_number: "2234567890",
      user_id: 2,
      customer_name: "Renata Rizki Rafi Athallah",
      balance: 12300,
      blocked: false,
      created_at: "2024-05-01T13:19:00.434435",
      updated_at: "2024-05-01T13:19:00.434435",
      deleted_at: null,
    },
    {
      account_id: 3,
      account_number: "3234567890",
      user_id: 2,
      customer_name: "Renata Rizki Rafi Athallah",
      balance: 12300,
      blocked: false,
      created_at: "2024-05-01T13:19:00.443433",
      updated_at: "2024-05-01T13:19:00.443433",
      deleted_at: null,
    },
  ],
  error: null,
};

export default function Home() {
  const [accountData, setAccountData] = useState(null);
  const [showBalance, setShowBalance] = useState(false);
  const [refreshing, setRefreshing] = useState(false);


  // MODAL
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    // Set selected account to the first account in the array when component mounts
    if (dummyData.data.length > 0) {
      setSelectedAccount(dummyData.data[0]);
    }
  }, []);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
    setModalVisible(false); // Close the modal after selecting an account
  };

  useEffect(() => {
    const getAccount = async () => {
      setAccountData(await getAccountData());
    };

    getAccount();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(async () => {
      const getAccount = async () => {
        setAccountData(await getAccountData());
        setRefreshing(false);
      };
      getAccount();
    }, 500);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F37548" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
          <Image
            source={icons.icBni}
            style={{ width: 80, height: 50 }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 18 }}>
          <Image
            source={icons.icNotification}
            style={{ width: 24, height: 24 }}
          />
          <Image source={icons.icListen} style={{ width: 24, height: 24 }} />
        </View>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>
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
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
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
                        {accountData &&
                          `Rp${new Intl.NumberFormat("id-ID").format(
                            accountData.data.balance
                          )}`}
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
                          Rp******
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
                  <TouchableOpacity onPress={() => setModalVisible(true)}>                 
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
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <MenuComponent />
            <PromotionComponent />
          </View>
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end", // Align the modal to the bottom
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 15,
                fontFamily: "PlusJakartaSansBold",
              }}
            >
              Pilih Rekening
            </Text>
            <FlatList
              data={dummyData.data}
              keyExtractor={(item) => item.account_id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleAccountSelect(item)}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 15,
                    }}
                  >
                    <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
                      {item.account_number}
                    </Text>
                    <Image
                      source={
                        item === selectedAccount
                          ? icons.icRadioActive
                          : icons.icRadioInactive
                      }
                      style={{ width: 22, height: 22 }}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
