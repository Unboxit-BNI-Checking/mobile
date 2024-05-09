import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  StatusBar,
  ToastAndroid,
} from "react-native";
import ButtonPrimary from "../../component/button/ButtonPrimary";
import { Dropdown } from "react-native-element-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckboxCustom from "../../component/checkbox/CheckboxCustom";
import icons from "../../constants/icons";
import { getUserAccountNumbersData } from "../../services/UserService";
import getFavouriteData from "../../services/FavouriteService";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../component/header/CustomAppBar";
import ModalStatusCheck from "../../component/modal/ModalStatusCheck";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateTransaction } from "../../services/TransactionService";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Dialog,
} from "react-native-alert-notification";
import { parseIndonesianCurrency } from "../../util/parseIndonesianCurrency";

const TransferBNI = ({ navigation }) => {
  const [showSaldo, setShowSaldo] = useState(false);
  const [activeButton, setActiveButton] = useState("Daftar Favorit");
  const [activeTabContent, setActiveTabContent] = useState("Daftar Favorit");
  const [dataNomorRekening, setDataNomorRekening] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedModal, setIsCheckedModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(1);
  const [nominal, setNominal] = useState("");
  const [note, setNote] = useState("");

  // HANDLE DROPDOWN API INTERGRATION
  const [dataRekening, setDataRekening] = useState([]);
  const [selectedAccountId, setSelectedAccountId] = useState(null);
  const [accountNumberSource, setAccountNumberSource] = useState(null);
  const [accountNumberDestination, setAccountNumberDestination] =
    useState(null);
  const [selectedBalance, setSelectedBalance] = useState(null);
  const [favouriteName, setFavouriteName] = useState(null);

  useEffect(() => {
    async function getData() {
      setDataRekening(await getFavouriteData());
      setDataNomorRekening(await getUserAccountNumbersData());
    }
    getData();
  }, []);
  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
    resetValues();
  };
  const handleDropdownChange = (item) => {
    setSelectedAccountId(item.value);
    setAccountNumberDestination(item.accountNumber);
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  const openModal = async () => {
    validateTransaction(
      accountNumberSource,
      accountNumberDestination,
      parseIndonesianCurrency(nominal),
      note,
      favouriteName ? favouriteName.trim() : "",
      isChecked
    )
      .then((transactionSummary) => {
        setStatus(transactionSummary.account_number_destination_status ?? 1);
        if (isChecked) {
          // isChecked = true
          // 4. nomer rekening sama dan nama sama persis dia langsung (0)
          // 7. nomer rekening tidak ada dan nama tidak ada maka dia nge save (1)
          // 5. nomer rekening sama tapi nama beda maka dia alert nomer rekening ada (2)
          // 6. nomer rekening beda tapi ada nama yang sama maka dia alert nama sudah terdaftar (3)
          if (
            transactionSummary.is_favourite === 0 &&
            transactionSummary.account_number_destination_status === 1
          ) {
            navigation.replace("TransferConfirm", {
              summary: transactionSummary,
            });
          } else if (transactionSummary.is_favourite === 1) {
            // ToastAndroid.show("Favorit sudah ditambahkan", ToastAndroid.SHORT);
            setModalVisible(true);
            return;
          } else if (transactionSummary.is_favourite === 2) {
            Dialog.show({
              type: ALERT_TYPE.WARNING,
              title: "Perhatian",
              textBody:
                "Nomor rekening sudah terdaftar dengan nama yang berbeda",
              button: "Tutup",
            });
            return;
          } else if (transactionSummary.is_favourite === 3) {
            Dialog.show({
              type: ALERT_TYPE.WARNING,
              title: "Perhatian",
              textBody:
                "Nama favorit sudah pernah terdaftar dengan nomor akun yang berbeda",
              button: "Tutup",
            });
            return;
          } else {
            setModalVisible(true);
            return;
          }
        } else {
          // isChecked = false
          // 1. dia kalau ada di daftar favorite maka langsung (0)
          // 2. kalau dia input baru tanpa dia tidak centang dia akan pop up (4)
          // 3. kalau dia input baru nomer rekening ada difavorite (2)
          if (
            transactionSummary.account_number_destination_status === 1 &&
            (transactionSummary.is_favourite === 0 ||
              transactionSummary.is_favourite === 2)
          ) {
            navigation.replace("TransferConfirm", {
              summary: transactionSummary,
            });
          } else {
            setModalVisible(true);
            return;
          }
        }
      })
      .catch((error) => {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: "Perhatian",
          textBody:
            "Transaksi anda tidak dapat diproses. Nomor rekening yang anda masukkan tidak valid. Silahkan ulangi transaksi anda.",
          button: "Tutup",
        });
      });
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNextButtonClick = async () => {
    let transactionSummary = await validateTransaction(
      accountNumberSource,
      accountNumberDestination,
      parseIndonesianCurrency(nominal),
      note,
      favouriteName ? favouriteName.trim() : "",
      isChecked
    );

    navigation.navigate("TransferConfirm", {
      summary: transactionSummary,
    });
    closeModal();
  };

  const handleCloseButtonClick = () => {
    setModalVisible(!modalVisible);
    AsyncStorage.setItem("isWarningOn", "1");
    setIsCheckedModal(false);
  };

  const handleCheckboxChange = () => {
    setIsCheckedModal(!isCheckedModal);
    if (!isCheckedModal) {
      AsyncStorage.setItem("isWarningOn", "0");
    } else {
      AsyncStorage.setItem("isWarningOn", "1");
    }
  };

  const formatCurrency = (value) => {
    // Hapus semua karakter kecuali angka
    let formattedValue = value.replace(/[^0-9]/g, "");

    // Format sebagai mata uang Rupiah
    if (formattedValue) {
      formattedValue =
        "Rp" + parseInt(formattedValue, 10).toLocaleString("id-ID");
    }

    return formattedValue;
  };

  const handleNominalChange = (value) => {
    // Format input saat berubah
    const formattedValue = formatCurrency(value);
    setNominal(formattedValue);
  };

  const handleNoteChange = (text) => {
    setNote(text); // Perbarui state nominal dengan nilai input
  };

  const handleNextButtonPrimary = async () => {
    AsyncStorage.getItem("isWarningOn").then(async (isWarningOn) => {
      if (isWarningOn === "1") {
        if (parseIndonesianCurrency(nominal) < 1) {
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: "Perhatian",
            textBody:
              "Silahkan isi nominal dengan benar untuk melanjutkan transaksi.",
            button: "Tutup",
          });
        } else if (selectedBalance < parseIndonesianCurrency(nominal)) {
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: "Perhatian",
            textBody:
              "Saldo pada rekening Anda tidak cukup. Pastikan saldo Anda tersedia dan silahkan ulangi transaksi Anda.",
            button: "Tutup",
          });
        } else if (accountNumberDestination.length !== 10) {
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: "Perhatian",
            textBody:
              "Transaksi anda tidak dapat diproses. Nomor rekening yang anda masukkan tidak valid. Silahkan ulangi transaksi Anda.",
            button: "Tutup",
          });
        } else {
          openModal();
        }
      } else {
        await handleNextButtonClick();
      }
    });
  };

  const resetValues = () => {
    setSelectedAccountId(null);
    setAccountNumberDestination(null);
    setNominal(null);
    setNote(null);
    setIsChecked(false);
    setFavouriteName(null);
  };

  return (
    <AlertNotificationRoot theme="light">
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar backgroundColor={"white"} barStyle="dark-content" />
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
              <Text
                style={{ fontSize: 14, fontFamily: "PlusJakartaSansMedium" }}
              >
                Rekening Debet
              </Text>
              <Dropdown
                style={styles.dropdown}
                data={dataNomorRekening}
                labelField="label"
                valueField="value"
                placeholder={"Pilih Rekening"}
                selectedTextStyle={{
                  fontFamily: "PlusJakartaSansMedium",
                  fontSize: 14,
                }}
                searchPlaceholder="Search..."
                value={accountNumberSource}
                onChange={(item) => {
                  setAccountNumberSource(item.value);
                  setSelectedBalance(item.balance);
                }}
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
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
                    {showSaldo
                      ? `Rp${new Intl.NumberFormat("id-ID").format(
                          selectedBalance
                        )}`
                      : "Rp *******"}
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
                    borderBottomWidth:
                      activeButton === "Daftar Favorit" ? 3 : 2,
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
                <Text
                  style={{ fontSize: 16, fontFamily: "PlusJakartaSansBold" }}
                >
                  Rekening Tujuan
                </Text>
                <Text style={{ fontFamily: "PlusJakartaSansRegular" }}>
                  Nama
                </Text>
                <Dropdown
                  style={styles.dropdown}
                  data={dataRekening}
                  search
                  maxHeight={300}
                  labelField="label"
                  selectedTextStyle={{
                    fontFamily: "PlusJakartaSansRegular",
                    fontSize: 14,
                  }}
                  valueField="value"
                  placeholder="Pilih Nama"
                  placeholderStyle={{
                    fontFamily: "PlusJakartaSansRegular",
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
                  value={accountNumberDestination} // Gunakan accountNumberDestination sebagai value
                  onChangeText={setAccountNumberDestination}
                />
              </View>
            </View>
          )}
          {activeTabContent === "Input Baru" && (
            <View style={styles.activeTabContent}>
              <View style={styles.DaftarFavorit}>
                <Text
                  style={{ fontFamily: "PlusJakartaSansMedium", fontSize: 14 }}
                >
                  Rekening Tujuan
                </Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Masukan Nomor Rekening"
                  placeholderTextColor={"#98A1B0"}
                  keyboardType="numeric"
                  value={null}
                  onChangeText={setAccountNumberDestination}
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
                  value={favouriteName}
                  onChangeText={(text) => {
                    setFavouriteName(text);
                  }}
                />
              </View>
            </View>
          )}
          <View
            style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", height: 5 }}
          ></View>

          <View style={{ alignItems: "center", marginBottom: 120 }}>
            <View style={styles.Nominal}>
              <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
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
              <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
                Keterangan
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Tulis Keterangan Transaksi (Optional)"
                placeholderStyle={{
                  fontFamily: "PlusJakartaSansRegular",
                }}
                placeholderTextColor={"#98A1B0"}
                onChangeText={handleNoteChange}
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
            accountNumberDestination={accountNumberDestination}
            accountNumberSource={accountNumberSource}
            nominal={nominal}
            note={note}
          />
        </ScrollView>

        <View style={styles.bottomButtonContainer}>
          <ButtonPrimary
            text="Selanjutnya"
            onPress={() => {
              handleNextButtonPrimary();
            }}
            disable={
              !nominal || !accountNumberDestination || !accountNumberSource
            }
          />
        </View>
      </SafeAreaView>
    </AlertNotificationRoot>
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
    fontFamily: "PlusJakartaSansRegular",
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    fontFamily: "PlusJakartaSansRegular",
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
    fontFamily: "PlusJakartaSansMedium",
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
