import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import icons from "../../../constants/icons";

// Impor dummy transaction data

const dataRekening = [
  { label: "123144142", value: "123144142" },
  { label: "12839405948", value: "12839405948" },
];

const dummyTransactionHistory = [
  {
    date: "19/04/2024",
    type: "TransferBNI",
    accountNumber: "123144142",
    accountNumberDestination : "12839405948",
    accountOwner: "Nama Pemilik Rekening",
    amount: -10000,
  },
  {
    date: "20/04/2024",
    type: "TransferBCA",
    accountNumber: "123144142",
    accountNumberDestination : "9999999999",
    accountOwner: "Nama Pemilik Rekening",
    amount: -15000,
  },
  {
    date: "21/04/2024",
    type: "Top Up",
    accountNumber: "123456789",
    accountNumberDestination : "888888",
    accountOwner: "Nama Pemilik Rekening",
    amount: 20000,
  },
  // Add more transactions as needed
];

const BuatLaporan = () => {
  const [valueRekening, setValueRekening] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // State untuk menyimpan transaksi yang dipilih

  const [selectedAccount, setSelectedAccount] = useState(null);
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
            {transaction.type}
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
            {transaction.accountOwner}
          </Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View>
          <Text style={{ fontFamily: "PlusJakartaSansBold", marginRight: 8 }}>
            {transaction.amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 20 }}>
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
          placeholder={dataRekening[0].label}
          searchPlaceholder="Search..."
          value={selectedAccount}
          onChange={(item) => selectAccount(item.value)}
          renderItem={(item) => (
            <View style={styles.item}>
              <Text style={styles.textItem}>{item.label}</Text>
            </View>
          )}
        />

        {/* Tampilkan item transaksi */}
        {dummyTransactionHistory
          .filter((transaction) => {
            return selectedAccount
              ? transaction.accountNumber === selectedAccount
              : true;
          })
          .map((transaction) => renderItem(transaction))}
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
});

export default BuatLaporan;
