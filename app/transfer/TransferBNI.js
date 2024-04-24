import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import ButtonPrimary from "../../component/common/button/ButtonPrimary";
import { Dropdown } from "react-native-element-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckboxCustom from "../../component/common/checkbox/CheckboxCustom";
import { Stack, useRouter } from "expo-router";
import icons from "../../constants/icons";
import ScreenHeaderBtn from "../../component/common/header/ScreenHeaderBtn";
import ModalCustom from "../../component/common/modal/ModalCustom";

const dataFavorite = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const dataRekening = [
  { label: "11111111111", value: "1" },
  { label: "12839405948", value: "2" },
];

const TransferBNI = () => {
  const route = useRouter();
  const [showSaldo, setShowSaldo] = useState(false);
  const [activeButton, setActiveButton] = useState("Daftar Favorit");
  const [activeTabContent, setActiveTabContent] = useState("Daftar Favorit");
  const [valueRekening, setValueRekening] = useState(null);
  const [valueFavorite, setValueFavorite] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedModal, setIsCheckedModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState(1);

  const openModal = (newStatus) => {
    setStatus(newStatus);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNextButtonClick = () => {
   route.replace("/transfer/TransferConfirm");
  };

  const handleCloseButtonClick = () => {
    setModalVisible(!modalVisible);
  };

  const handleCheckboxChange = () => {
    setIsCheckedModal(!isCheckedModal);
  };

  const modalContent = {
    1: {
      linkText: "Cek No Rek Disini",
      mediumText:
        "Hati-hati dalam bertransaksi dengan Nomor Rekening Asing ini.",
      titleText: "Rekening Asing",
      iconStatus: icons.icStatusGreen,
    },
    2: {
      linkText: "Investigate Details",
      mediumText:
        "We are investigating this account. Please refrain from transactions.",
      titleText: "Investigate",
      iconStatus: icons.icStatusYellow,
    },
    3: {
      linkText: "Block Details",
      mediumText: "This account has been blocked. Transactions are prohibited.",
      titleText: "Blocked Account",
      iconStatus: icons.icStatusRed,
    },
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          // headerStyle: { backgroundColor: "red" },
          headerTitleStyle: {
            color: "#243757",
           
            
          },
          headerShadowVisible: false,

          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.icArrowForward}
              dimension={24}
              handlePress={() => {
                route.back();
              }}
            />
          ),
          headerTitle: "Transfer Antar BNI",
        }}
      />
      <ScrollView>
        {/* Rekening, Saldo */}
        <View style={{ alignItems: "center" }}>
          <View style={styles.Rekening}>
            <Text>Rekening Debet</Text>
            <Dropdown
              style={styles.dropdown}
              data={dataRekening}
              labelField="label"
              valueField="value"
              placeholder={dataRekening[0].label}
              searchPlaceholder="Search..."
              value={valueRekening}
              onChange={(item) => setValueRekening(item.value)}
              renderItem={renderItem}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>Saldo</Text>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Text>{showSaldo ? "Rp. 300.478" : "Rp. *******"}</Text>
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
                  fontSize: 14,
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
                  fontSize: 14,
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
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Rekening Tujuan
              </Text>
              <Text style={{ fontSize: 14 }}>Nama</Text>
              <Dropdown
                style={styles.dropdown}
                data={dataFavorite}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder=""
                searchPlaceholder="Search..."
                value={valueFavorite}
                onChange={(item) => setValueFavorite(item.value)}
                renderItem={renderItem}
              />

              <Text style={{}}>Rekening Tujuan</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
        )}
        {activeTabContent === "Input Baru" && (
          <View style={styles.activeTabContent}>
            <View style={styles.DaftarFavorit}>
              <Text style={{ fontSize: 14 }}>Rekening Tujuan</Text>
              <TextInput style={styles.textInput} />

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
              />
            </View>
          </View>
        )}
        <View
          style={{ backgroundColor: "rgba(204, 204, 204, 0.5)", height: 5 }}
        ></View>

        <View style={{ alignItems: "center", marginBottom: 120 }}>
          <View style={styles.Nominal}>
            <Text style={{}}>Nominal</Text>
            <TextInput style={styles.textInput} />
            <Text style={{}}>Keterangan</Text>
            <TextInput style={styles.textInput} />
          </View>
        </View>

        <ModalCustom
          modalVisible={modalVisible}
          closeModal={closeModal}
          linkText={status == 3 ? null : modalContent[status].linkText}
          mediumText={modalContent[status].mediumText}
          titleText={modalContent[status].titleText}
          iconStatus={modalContent[status].iconStatus}
          handleNextButtonClick={handleNextButtonClick}
          handleCloseButtonClick={handleCloseButtonClick}
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isCheckedModal}
          showCheckbox={status != 1 ? false : true}
          showCloseButton={status == 3 ? false : true}
        />
      </ScrollView>

      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Konfirmasi"
          onPress={() => {
            openModal(2);
          }}
        />
      </View>
    </View>
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
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
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
