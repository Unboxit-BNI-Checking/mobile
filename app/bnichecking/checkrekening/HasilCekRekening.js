import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";
import ButtonNextClose from "../../../component/common/button/ButtonNextClose";

const HasilCekRekening = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleNextButtonClick = () => {
    route.replace("/bnichecking/checkrekening/CekRekening");
  };

  const handleCloseButtonClick = () => {
    route.replace("(tabs)");
  };
  const route = useRouter();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
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
          headerTitle: "Hasil Cek Rekening",
        }}
      />
      <View style={styles.rekeningInfoContainer}>
        <View style={styles.rekeningInfo}>
          <Text style={styles.name}>Jeon Wonwoo</Text>
          <Text style={styles.bank}>Bank Negara Indonesia</Text>
          <Text style={styles.accountNumber}>1234567890</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.statusContainer}>
          <TouchableOpacity onPress={openModal}>
            <View
              style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            >
              <Text>Status Rekening</Text>
              <Image
                source={icons.icInfoHasilCekRekening}
                style={styles.infoIcon}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 79,
              height: 26,
              borderRadius: 50,
              backgroundColor: "#FFF6E6",
            }}
          >
            <Text style={styles.buttonText}>Investigasi</Text>
          </View>
        </View>
      </View>
      <View style={styles.reportContainer}>
        <View style={styles.report}>
          <Text style={styles.reportNumber}>3</Text>
          <Text style={styles.reportText}>Laporan Nasabah</Text>
        </View>
        <View style={styles.report}>
          <Text style={styles.reportNumber}>7</Text>
          <Text style={styles.reportText}>Laporan Sosial {"\n"}Media</Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.bottomSheet}>
            <View style={styles.row}>
              <Text style={styles.titleText}>Status Rekening</Text>
            </View>
            <View style={{ gap: 16, marginTop: 4 }}>
              <View style={{ gap: 8 }}>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    height: 26,
                    width: 59,
                    backgroundColor: "#E7F8EF",
                    borderRadius: 50,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#10B55A",
                      fontSize: 12,
                    }}
                  >
                    Normal
                  </Text>
                </View>

                <Text style={styles.statusDescription}>
                  Nomor Rekening ini belum pernah melalui proses investigasi.
                </Text>
              </View>
              <View style={{ gap: 8 }}>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    height: 26,
                    width: 79,
                    backgroundColor: "#FFF6E6",
                    borderRadius: 50,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#FFA500", fontSize: 12 }}>
                    Investigasi
                  </Text>
                </View>

                <Text style={styles.statusDescription}>
                  Nomor Rekening ini sedang dalam investigasi.
                </Text>
              </View>
              <View style={{ gap: 8 }}>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    height: 26,
                    width: 50,
                    backgroundColor: "#FBE9ED",
                    borderRadius: 50,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#D6264F", fontSize: 12 }}>Blokir</Text>
                </View>

                <Text style={styles.statusDescription}>
                  Nomor Rekening ini terindikasi Penipuan dan {"\n"}sudah
                  diblokir.
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 5, marginBottom: 10 }}></View>
            <ButtonPrimary text={"Mengerti"} onPress={closeModal} />
          </View>
        </View>
      </Modal>
      <View style={styles.bottomButtonContainer}>
        <ButtonNextClose
          nextName="Cek Rekening Lagi"
          closeName="Kembali Ke Home"
          handleNextButtonClick={handleNextButtonClick}
          handleCloseButtonClick={handleCloseButtonClick}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 20,
  },
  rekeningInfoContainer: {
    width: 335,
    height: 150,
    backgroundColor: "#FFF",
    padding: 14,
    elevation: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  rekeningInfo: {
    marginBottom: 8,
    gap: 4,
  },
  name: {
    color: "#243757",
    fontFamily: "PlusJakartaSansBold",
    fontSize: 14,
  },
  bank: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 14,
  },
  accountNumber: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 14,
  },
  divider: {
    width: 307,
    height: 1,
    backgroundColor: "#F5F6F7",
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "space-between",
  },
  infoIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 79,
    height: 26,
    borderRadius: 50,
    backgroundColor: "#FFF6E6",
    marginLeft: 100,
  },
  buttonText: {
    color: "#FFA500",
    fontSize: 12,
  },
  reportContainer: {
    flexDirection: "row",
    width: 335,
    justifyContent: "space-between",
  },
  report: {
    width: 160.5,
    padding: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 14,
    elevation: 10,
    borderRadius: 8,
  },
  reportNumber: {
    color: "#F15922",
    fontSize: 32,
    fontFamily: "PlusJakartaSansBold",
    justifyContent: "center",
  },
  reportText: {
    color: "#6B788E",
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  titleText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSansBold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
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
});

export default HasilCekRekening;
