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

  const selectTransaction = (transaction) => {
    if (!transaction.is_reported) {
      setSelectedTransaction(transaction); // Memilih transaksi yang dipilih
    }
  };

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

  transactionComponentColor = (transactionId) => {
    return selectedTransaction &&
      selectedTransaction.transaction_id === transactionId
      ? "#F15922"
      : "#6B788E";
  };

  const renderItem = (transaction) => (
    <TouchableOpacity
      key={transaction.transaction_id}
      onPress={() => selectTransaction(transaction)} // Memanggil fungsi untuk memilih transaksi yang dipilih
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          borderWidth: 1,
          borderColor:
            selectedTransaction &&
            selectedTransaction.transaction_id === transaction.transaction_id // Memeriksa apakah transaksi saat ini dipilih
              ? "#F15922"
              : "#C2C7D0",
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Image
          source={
            selectedTransaction &&
            selectedTransaction.transaction_id === transaction.transaction_id // Menetapkan gambar radio sesuai dengan apakah transaksi saat ini dipilih atau tidak
              ? icons.icRadioActive
              : icons.icRadioInactive
          }
          style={{ width: 20, height: 20 }}
        />
        <View>
          <Text
            style={{
              fontFamily: "PlusJakartaSansMedium",
              color:
                selectedTransaction &&
                selectedTransaction.transaction_id ===
                  transaction.transaction_id // Menetapkan warna teks sesuai dengan apakah transaksi saat ini dipilih atau tidak
                  ? "#F15922"
                  : "#243757",
              fontSize: 12,
            }}
          >
            {new Date(transaction.transaction_time).toLocaleDateString()}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansBold",
              color:
                selectedTransaction &&
                selectedTransaction.transaction_id ===
                  transaction.transaction_id
                  ? "#F15922"
                  : "#243757",
            }}
          >
            {transaction.account_destination_owner_name}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansMedium",
              color: transactionComponentColor(transaction.transaction_id),
            }}
          >
            {transaction.account_number_destination}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansMedium",
              color: transactionComponentColor(transaction.transaction_id),
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
              color: transactionComponentColor(transaction.transaction_id),
            }}
          >
            {"-" + transaction.amount}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansMedium",
              marginRight: 8,
              color: "#6B788E",
              textAlign: "right",
              color: transactionComponentColor(transaction.transaction_id),
            }}
          >
            {new Date(transaction.transaction_time).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </Text>

          <Text
            style={{
              textAlign: "right",
              color: transaction.is_reported ? "red" : "green",
            }}
          >
            {transaction.is_reported ? "Sudah dilaporkan" : "Belum dilaporkan"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

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
              Rekening Pelaporan
            </Text>

            <Dropdown
              style={styles.dropdown}
              data={accountNumbers}
              labelField="label"
              valueField="value"
              placeholder={"Pilih Rekening"}
              selectedTextStyle={{ color: "#5D6B82" }}
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
