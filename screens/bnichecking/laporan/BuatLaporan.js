import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import icons from "../../../constants/icons";
import ButtonPrimary from "../../../component/button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import { getUserAccountNumbersData } from "../../../services/UserService";
import {
  getTransactionById,
  getTransactionHistory,
} from "../../../services/TransactionService";
import DateFormatComponent from "../../../component/text/DateFormatComponent";
import RupiahFormatComponent from "../../../component/text/RupiahFormatComponent";
import TimeFormatComponent from "../../../component/text/TimeFormatComponent";

const BuatLaporan = () => {
  const navigation = useNavigation();
  const [selectedTransaction, setSelectedTransaction] = useState(null); // State untuk menyimpan transaksi yang dipilih
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [accountNumbers, setAccountNumbers] = useState([]);

  useEffect(() => {
    const fetchAccountNumbers = async () => {
      getUserAccountNumbersData()
        .then((formattedData) => {
          setAccountNumbers(formattedData);
        })
        .catch((error) => {
          console.error("Error fetching account numbers:", error);
        });
    };

    fetchAccountNumbers();
  }, []);

  const selectAccount = (account) => {
    setSelectedAccount(account); // Memilih rekening yang dipilih
    getTransactionHistory(account)
      .then((response) => {
        setTransactionHistory(response);
      })
      .catch((error) => {
        console.error("Error fetching transaction history:", error);
      });
  };

  const handleMakeReport = async () => {
    navigation.navigate("SertakanLaporan", {
      transactionSummary: await getTransactionById(
        selectedTransaction.transaction_id
      ),
    });
  };

  const selectTransaction = (transaction) => {
    if (!transaction.is_reported) {
      setSelectedTransaction(transaction);
    }
  };

  const transactionComponentColor = (transactionId) => {
    return selectedTransaction &&
      selectedTransaction.transaction_id === transactionId
      ? "#F15922"
      : "#6B788E";
  };

  const renderItem = (transaction) => {
    const isSelected =
      selectedTransaction &&
      selectedTransaction.transaction_id === transaction.transaction_id;
    const borderColor = isSelected ? "#F15922" : "#C2C7D0";
    const textColor = isSelected ? "#F15922" : "#243757";
    const amountColor = transactionComponentColor(transaction.transaction_id);

    return (
      <TouchableOpacity
        key={transaction.transaction_id}
        onPress={() => selectTransaction(transaction)}
      >
        {transaction.is_reported ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              borderWidth: 1,
              borderColor,
              borderRadius: 8,
              padding: 8,
            }}
          >
            <View>
              <Image
                source={icons.icRadioIsReported}
                style={{ width: 20, height: 20 }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "PlusJakartaSansMedium",
                    color: "#6B788E",
                    fontSize: 12,
                  }}
                >
                  <DateFormatComponent
                    dateString={transaction.transaction_time}
                  />
                </Text>

                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 50,
                    backgroundColor: "#EBEDF0",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontFamily: "PlusJakartaSansBold",
                      textAlign: "center",
                      color: "#6B788E",
                    }}
                  >
                    Dilaporkan
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "PlusJakartaSansBold",
                    color: "#6B788E",
                  }}
                >
                  {transaction.account_destination_owner_name}
                </Text>

                <Text
                  style={{
                    fontFamily: "PlusJakartaSansBold",
                    marginRight: 8,
                    textAlign: "right",
                    color: amountColor,
                  }}
                >
                  <RupiahFormatComponent value={"-" + transaction.amount} />
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "PlusJakartaSansMedium",
                    color: "#6B788E",
                  }}
                >
                  {transaction.account_number_destination}
                </Text>

                <Text
                  style={{
                    fontFamily: "PlusJakartaSansMedium",
                    marginRight: 8,
                    textAlign: "right",
                    color: amountColor,
                  }}
                >
                  <TimeFormatComponent
                    timestamp={transaction.transaction_time}
                  />
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "PlusJakartaSansMedium",
                    color: "#6B788E",
                  }}
                >
                  Bank Negara Indonesia
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              borderWidth: 1,
              borderColor,
              borderRadius: 8,
              padding: 8,
            }}
          >
            <Image
              source={isSelected ? icons.icRadioActive : icons.icRadioInactive}
              style={{ width: 20, height: 20 }}
            />
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: "PlusJakartaSansMedium",
                      color: textColor,
                      fontSize: 12,
                    }}
                  >
                    <DateFormatComponent
                      dateString={transaction.transaction_time}
                    />
                  </Text>
                </View>
              </View>
              <Text
                style={{ fontFamily: "PlusJakartaSansBold", color: textColor }}
              >
                {transaction.account_destination_owner_name}
              </Text>
              <Text
                style={{
                  fontFamily: "PlusJakartaSansMedium",
                  color: amountColor,
                }}
              >
                {transaction.account_number_destination}
              </Text>
              <Text
                style={{
                  fontFamily: "PlusJakartaSansMedium",
                  color: amountColor,
                }}
              >
                {"Bank Negara Indonesia"}
              </Text>
            </View>
            <View style={{ flex: 1 }}></View>
            <View style={{}}>
              <Text
                style={{
                  fontFamily: "PlusJakartaSansBold",
                  marginRight: 8,
                  textAlign: "right",
                  color: amountColor,
                }}
              >
                <RupiahFormatComponent value={"-" + transaction.amount} />
              </Text>
              <Text
                style={{
                  fontFamily: "PlusJakartaSansMedium",
                  marginRight: 8,
                  color: "#6B788E",
                  textAlign: "right",
                  color: amountColor,
                }}
              >
                <TimeFormatComponent timestamp={transaction.transaction_time} />
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomAppBar
        title="Pelapor"
        onLeftPress={() => navigation.navigate("Pelaporan")}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <ScrollView>
        <View style={{ padding: 20, marginBottom: 120 }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "PlusJakartaSansBold",
              marginBottom: 8,
            }}
          >
            Rekening Yang Melaporkan
          </Text>
          <View style={{ gap: 8 }}>
            <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
              Rekening Pelapor
            </Text>

            <Dropdown
              style={styles.dropdown}
              data={accountNumbers}
              labelField="label"
              valueField="value"
              placeholder={"Pilih Rekening"}
              placeholderStyle={{
                fontFamily: "PlusJakartaSansMedium",
                color: "#98A1B0",
                fontSize: 14,
              }}
              selectedTextStyle={{
                color: "#5D6B82",
              }}
              searchPlaceholder="Search..."
              value={selectedAccount}
              onChange={(item) => selectAccount(item.value)}
              renderItem={(item) => (
                <View style={styles.item}>
                  <Text style={styles.textItem}>{item.label}</Text>
                </View>
              )}
            />
            {selectedAccount ? (
              transactionHistory.length === 0 ? (
                <View style={{ marginTop: 100 }}>
                  <Image
                    source={icons.icNoReport}
                    style={{ alignSelf: "center", width: 150, height: 150 }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "PlusJakartaSansBold",
                      color: "#6B788E",
                    }}
                  >
                    Belum Ada Transaksi
                  </Text>
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "PlusJakartaSansBold",
                      marginBottom: 10,
                      marginTop: 5,
                    }}
                  >
                    Pilih Transaksi yang ingin dilaporkan
                  </Text>
                  <View style={styles.inputContainer}>
                    <Image source={icons.icSearchCekRekening} />
                    <TextInput
                      style={styles.input}
                      placeholder="Cari Transaksi"
                      placeholderTextColor={"#98A1B0"}
                      value={searchInput}
                      onChangeText={(text) => setSearchInput(text)}
                    />
                  </View>
                </View>
              )
            ) : null}

            {transactionHistory
              .filter((transaction) => {
                return (
                  (selectedAccount
                    ? transaction.account_number_source === selectedAccount
                    : false) &&
                  transaction.account_destination_owner_name.includes(
                    searchInput
                  )
                );
              })
              .sort((a, b) => {
                if (a.is_reported !== b.is_reported) {
                  return a.is_reported ? 1 : -1; // Place true values at the bottom
                } else {
                  return a.transaction_time - b.transaction_time; // Sort by second index of transactionTime
                }
              })
              .map((transaction) => renderItem(transaction))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            handleMakeReport();
          }}
          disable={!selectedTransaction}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "#C2C7D0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: "PlusJakartaSansMedium",
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(204, 204, 204, 0.5)",
    height: 102,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 11,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: "PlusJakartaSansRegular",
  },
});

export default BuatLaporan;
