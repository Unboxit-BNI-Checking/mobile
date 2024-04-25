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
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";

import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";
import { useNavigation } from "@react-navigation/native";

// Impor dummy transaction data

const dataRekening = [
  { label: "123144142", value: "123144142" },
  { label: "12839405948", value: "12839405948" },
];

const dummyTransactionHistory = [
  {
    date: "19/04/2024_1",
    time : "18:23:28",
    type: "Bank Negara Indonesia",
    accountNumber: "123144142",
    accountNumberDestination: "12839405948",
    accountOwner: "Nama Pemilik Rekening",
    amount: -10000,
  },
  {
    date: "20/04/2024",
    time : "18:23:28",
    type: "Bank Negara Indonesia",
    accountNumber: "123144142",
    accountNumberDestination: "9999999999",
    accountOwner: "Nama Pemilik Rekening",
    amount: -15000,
  }
];

const BuatLaporan = () => {
  const navigation = useNavigation();
  const [selectedTransaction, setSelectedTransaction] = useState(null); // State untuk menyimpan transaksi yang dipilih
  const [selectedAccount, setSelectedAccount] = useState(dataRekening[0]);
  const [searchInput, setSearchInput] = useState("");
  const selectTransaction = (transaction) => {
    setSelectedTransaction(transaction); // Memilih transaksi yang dipilih
  };

  const selectAccount = (account) => {
    setSelectedAccount(account); // Memilih rekening yang dipilih
  };

  const renderItem = (transaction) => (
    <TouchableOpacity
      key={transaction.date}
      onPress={() => selectTransaction(transaction)} // Memanggil fungsi untuk memilih transaksi yang dipilih
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          borderWidth: 1,
          borderColor:
            selectedTransaction && selectedTransaction.date === transaction.date // Memeriksa apakah transaksi saat ini dipilih
              ? "#F15922"
              : "#C2C7D0",
          borderRadius: 8,
          padding: 8,
        }}
      >
        <Image
          source={
            selectedTransaction && selectedTransaction.date === transaction.date // Menetapkan gambar radio sesuai dengan apakah transaksi saat ini dipilih atau tidak
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
                selectedTransaction.date === transaction.date // Menetapkan warna teks sesuai dengan apakah transaksi saat ini dipilih atau tidak
                  ? "#F15922"
                  : "#243757",
              fontSize: 12,
            }}
          >
            {transaction.date}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansBold",
              color:
                selectedTransaction &&
                selectedTransaction.date === transaction.date
                  ? "#F15922"
                  : "#243757",
            }}
          >
            {transaction.accountOwner}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansMedium",
              color:
                selectedTransaction &&
                selectedTransaction.date === transaction.date
                  ? "#F15922"
                  : "#6B788E",
            }}
          >
            {transaction.accountNumberDestination}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansMedium",
              color:
                selectedTransaction &&
                selectedTransaction.date === transaction.date
                  ? "#F15922"
                  : "#6B788E",
            }}
          >
            {transaction.type}
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={{}} >
          <Text style={{ fontFamily: "PlusJakartaSansBold", marginRight: 8, textAlign: "right",  color:
                selectedTransaction &&
                selectedTransaction.date === transaction.date
                  ? "#F15922"
                  : "#6B788E", }} >
            {transaction.amount}
          </Text>
          <Text style={{ fontFamily: "PlusJakartaSansMedium", marginRight: 8, color: "#6B788E", textAlign: "right", color:
                selectedTransaction &&
                selectedTransaction.date === transaction.date
                  ? "#F15922"
                  : "#6B788E" }}>
            {transaction.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    setSelectedAccount(dataRekening[0]);
  }, []);

  const filteredTransactionsByAccount = dummyTransactionHistory.filter((transaction) => {
    return selectedAccount ? transaction.accountNumber === selectedAccount.value : true;
  });
  
  {/* Filter transaksi berdasarkan pencarian jika akun sudah dipilih */}
  const filteredTransactionsBySearch = filteredTransactionsByAccount.filter((transaction) => {
    return searchInput === "" || transaction.accountNumberDestination.includes(searchInput);
  });
  return (


    <View style={{ flex: 1, backgroundColor: "white" }}>
     
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
              data={dataRekening}
              labelField="label"
              valueField="value"
              placeholder={"Pilih Rekening"}
              searchPlaceholder="Search..."
              value={selectedAccount}
              onChange={(item) => selectAccount(item.value)}
              renderItem={(item) => (
                <View style={styles.item}>
                  <Text style={styles.textItem}>{item.label}</Text>
                </View>
              )}
            />

            <View style={styles.inputContainer}>
              <Image source={icons.icSearchCekRekening} />
              <TextInput
                style={styles.input}
                placeholder="Cari Transaksi"
                value={searchInput}
                onChangeText={(text) => setSearchInput(text)}
                keyboardType="number-pad"
              />
            </View>

            {dummyTransactionHistory
              .filter((transaction) => {
                return selectedAccount
                  ? transaction.accountNumber === selectedAccount
                  : true;
              })
              .map((transaction) => renderItem(transaction))}

              
            {/* {filteredTransactionsBySearch.map((transaction) => 
              renderItem(transaction)
            )} */}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            navigation.navigate("SertakanLaporan");
          }}
        />
      </View>
    </View>
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
