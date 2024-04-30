import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import ButtonPrimary from "../../component/button/ButtonPrimary";
import { Dropdown } from "react-native-element-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckboxCustom from "../../component/checkbox/CheckboxCustom";
import icons from "../../constants/icons";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/header/CustomAppBar";
import ModalStatusCheck from "../../component/modal/ModalStatusCheck";
import axios from "axios";

const dataNomorRekening = [
  { label: "1818181818", value: "1" },
  { label: "12839405948", value: "2" },
];

const TransferBNI = () => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [activeButton, setActiveButton] = useState("Daftar Favorit");
  const [activeTabContent, setActiveTabContent] = useState("Daftar Favorit");
  const [valueRekening, setValueRekening] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedModal, setIsCheckedModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(1);
  const [nominal, setNominal] = useState("");
  const navigation = useNavigation();
  
  
  // HANDLE DROPDOWN API INTERGRATION
  const [dataRekening, setDataRekening] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [selectedAccountNumber, setSelectedAccountNumber] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://unboxit.50soa.my.id/api/favourites", {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTQ0NDIwNTUsImV4cCI6MTc0NTk3ODA1NX0.o9osnraTWrCLzVE-UtN5wCrAO1OovDX5wsjM2gMt2OI`
          }
        }
      );
      const responseData = response.data.data;
      const formattedData = responseData.map((item) => ({
        label: item.favourite_name,
        value: item.favourite_id.toString(),
        accountNumber: item.favourite_account_number,
      }));
      setDataRekening(formattedData);
      // setSelectedAccountId(formattedData[0].value);
      console.log(formattedData);
      console.log(responseData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDropdownChange = (item) => {
    setSelectedAccountId(item.value);
    setSelectedAccountNumber(item.accountNumber);
    console.log(item.accountNumber);
    console.log(item.value);
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );
 
  
  const openModal = (newStatus) => {
    setStatus(newStatus);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNextButtonClick = () => {
    navigation.replace("TransferConfirm");
  };

  const handleCloseButtonClick = () => {
    setModalVisible(!modalVisible);
  };

  const handleCheckboxChange = () => {
    setIsCheckedModal(!isCheckedModal);
  };

  const handleNominalChange = (text) => {
    setNominal(text); // Perbarui state nominal dengan nilai input
  };

  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomAppBar
        title="Transfer Antar BNI"
        onLeftPress={() => navigation.goBack()}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <ScrollView>
        {/* Rekening, Saldo */}
        <View style={{ alignItems: "center" }}>
          <View style={styles.Rekening}>
            <Text style={{ fontSize: 14, fontFamily: "PlusJakartaSansMedium" }}>
              Rekening Debet
            </Text>
            <Dropdown
              style={styles.dropdown}
              data={dataNomorRekening}
              labelField="label"
              valueField="value"
              placeholder={"Pilih Rekening"}
              searchPlaceholder="Search..."
              value={valueRekening}
              onChange={(item) => setValueRekening(item.value)}
              placeholderStyle={{
                fontFamily: "PlusJakartaSansMedium",
                color: "#98A1B0",
                fontSize: 14,
              }}
              renderItem={renderItem}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontFamily: "PlusJakartaSansBold" }}>Saldo</Text>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
                  {showSaldo ? "Rp 300.478" : "Rp *******"}
                </Text>
                <TouchableOpacity onPress={() => setShowSaldo(!showSaldo)}>
                  {showSaldo ? (
                    <Ionicons name="eye-outline" size={18} color="#F37548" />
                  ) : (
                    <Ionicons
                      name="eye-off-outline"
                      size={18}
                      color="#F37548"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* SPACING */}
        <View
          style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", height: 5 }}
        ></View>
        {/* TOPBAR DAFTAR FAVORIT */}
        <View>
          <View style={styles.tabRekTujuan}>
            {/* TAB DAFTAR FAVORIT DAN INPUT BARU */}
            <TouchableOpacity
              style={[
                styles.textRekTujuan,
                activeButton === "Daftar Favorit" && styles.activeTab,
                {
                  borderBottomColor:
                    activeButton === "Daftar Favorit"
                      ? "rgb(241, 89, 34)"
                      : "rgba(204, 204, 204, 0.5)",
                  borderBottomWidth: activeButton === "Daftar Favorit" ? 3 : 2,
                },
              ]}
              onPress={() => handleTabPress("Daftar Favorit")}
            >
              <Text
                style={{
                  fontFamily:
                    activeButton === "Daftar Favorit"
                      ? "PlusJakartaSansBold"
                      : "PlusJakartaSansMedium",
                  color:
                    activeButton === "Daftar Favorit"
                      ? "rgb(241, 89, 34)"
                      : "rgba(204, 204, 204, 1)",
                }}
              >
                Daftar Favorit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.textRekTujuan,
                activeButton === "Input Baru" && styles.activeTab,
                {
                  borderBottomColor:
                    activeButton === "Input Baru"
                      ? "rgb(241, 89, 34)"
                      : "rgba(204, 204, 204, 0.5)",
                  borderBottomWidth: activeButton === "Input Baru" ? 3 : 2,
                },
              ]}
              onPress={() => handleTabPress("Input Baru")}
            >
              <Text
                style={{
                  fontFamily:
                    activeButton === "Input Baru"
                      ? "PlusJakartaSansBold"
                      : "PlusJakartaSansMedium",
                  color:
                    activeButton === "Input Baru"
                      ? "rgb(241, 89, 34)"
                      : "rgba(204, 204, 204, 1)",
                }}
              >
                Input Baru
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* CONTENT YANG AKTIF SESUAI DENGAN TAB YANG AKTIF */}
        {activeTabContent === "Daftar Favorit" && (
          <View style={styles.activeTabContent}>
            <View style={styles.DaftarFavorit}>
              <Text style={{ fontSize: 16, fontFamily: "PlusJakartaSansBold" }}>
                Rekening Tujuan
              </Text>
              <Text style={{ fontFamily: "PlusJakartaSansRegular" }}>Nama</Text>
              <Dropdown
                style={styles.dropdown}
                data={dataRekening}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Pilih Nama"
                placeholderStyle={{
                  fontFamily: "PlusJakartaSansMedium",
                  color: "#98A1B0",
                  fontSize: 14,
                }}
                searchPlaceholder="Search..."
                value={selectedAccountId} // Gunakan selectedAccountId sebagai value
                onChange={handleDropdownChange}
                renderItem={renderItem}
              />

              <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
                Rekening Tujuan
              </Text>
              <TextInput
                style={[styles.NamaRekening, styles.disabledInput]}
                editable={false}
                placeholder="Nomor Rekening"
                placeholderTextColor="#98A1B0"
                value={selectedAccountNumber} // Gunakan selectedAccountNumber sebagai value
                onChangeText={setSelectedAccountNumber} // Jika ingin dapat diedit, ganti dengan onChangeText
              />
            </View>
          </View>
        )}
        {activeTabContent === "Input Baru" && (
          <View style={styles.activeTabContent}>
            <View style={styles.DaftarFavorit}>
              <Text style={{ fontFamily: "PlusJakartaSansBold" }}>
                Rekening Tujuan
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Masukan Nomor Rekening"
                placeholderTextColor={"#98A1B0"}
                keyboardType="numeric"
              />

              <CheckboxCustom
                value={isChecked}
                onValueChange={setIsChecked}
                label="Simpan ke Daftar Favorit"
              />
              <TextInput
                style={[
                  styles.NamaRekening,
                  !isChecked && styles.disabledInput,
                ]}
                editable={isChecked}
                placeholder={!isChecked ? "(max 30 karakter)" : null}
                placeholderTextColor={"#98A1B0"}
              />
            </View>
          </View>
        )}
        <View
          style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", height: 5 }}
        ></View>

        <View style={{ alignItems: "center", marginBottom: 120 }}>
          <View style={styles.Nominal}>
            <Text style={{ fontFamily: "PlusJakartaSansRegular" }}>
              Nominal
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Rp0"
              value={nominal} // Mengikat nilai ke state nominal
              onChangeText={handleNominalChange}
              placeholderTextColor={"#98A1B0"}
              keyboardType="numeric"
            />
            <Text style={{ fontFamily: "PlusJakartaSansRegular" }}>
              Keterangan
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Tulis Keterangan Transaksi (Optional)"
              placeholderTextColor={"#98A1B0"}
            />
          </View>
        </View>

        <ModalStatusCheck
          closeModal={closeModal}
          status={status}
          modalVisible={modalVisible}
          handleNextButtonClick={handleNextButtonClick}
          handleCloseButtonClick={handleCloseButtonClick}
          isChecked={isCheckedModal}
          handleCheckboxChange={handleCheckboxChange}
        />
      </ScrollView>

      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            openModal(1);
          }}
          disable={!nominal}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? 40 : 0,
    backgroundColor: "#fff",
  },
  Rekening: {
    height: 144,
    width: "90%",
    justifyContent: "center",
    gap: 10,
  },
  textRekTujuan: {
    width: "50%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  tabRekTujuan: {
    flexDirection: "row",
  },
  activeTab: {
    backgroundColor: "#ffffff",
  },
  activeTabContent: {
    // backgroundColor: 'red',
  },
  DaftarFavorit: {
    gap: 10,
    padding: 20,
  },
  textInput: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#C2C7D0",
    fontFamily: "PlusJakartaSansMedium",
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    fontFamily: "PlusJakartaSansMedium",
  },
  Nominal: {
    height: 198,
    width: "90%",
    justifyContent: "center",
    gap: 10,
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
  },
  NamaRekening: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#C2C7D0",
  },
});

export default TransferBNI;
