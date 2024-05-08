import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import ButtonPrimary from "../../../component/button/ButtonPrimary";
import CheckboxCustom from "../../../component/checkbox/CheckboxCustom";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import CardDataPelaporan from "../../../component/pelaporan/CardDataPelaporan";
import { createNewReport } from "../../../services/ReportService";
import {
  ALERT_TYPE,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import DateFormatComponent from "../../../component/text/DateFormatComponent";
import RupiahFormatComponent from "../../../component/text/RupiahFormatComponent";

const SertakanLaporanSummary = ({ route }) => {
  const { transactionSummary, attachments, chronology } = route.params;
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleSendReport = async () => {
    setLoading(true);
    setDisableButton(true);

    try {
      const success = await createNewReport(
        transactionSummary.transaction_id,
        chronology,
        attachments
      );

      if (success) {
        navigation.replace("LaporanBerhasilTerkirim");
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Perhatian",
        textBody: "Laporan gagal dikirim. Silahkan coba kembali",
      });
    } finally {
      const randomDelay = Math.floor(Math.random() * (1000 - 500)) + 500;
      setTimeout(() => {
        setLoading(false);
        setDisableButton(false);
      }, randomDelay);
    }
  };

  return (
    <AlertNotificationRoot
      toastConfig={{
        titleStyle: {
          fontSize: 16,
          fontFamily: "PlusJakartaSansBold",
        },
        textBodyStyle: {
          fontSize: 14,
          fontFamily: "PlusJakartaSansMedium",
        },
      }}
      colors={[
        {
          card: "#D6264F",
          label: "#FFFFFF",
        },
      ]}
    >
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <CustomAppBar
          title="Sertakan Laporan"
          onLeftPress={() => navigation.goBack()}
          leftIcon={icons.icArrowForward}
          dimension={24}
        />
        <ScrollView>
          <View style={styles.contentContainer}>
            <CardDataPelaporan
              namaRekeningPelapor={transactionSummary.account_name_source}
              nomorRekeningPelapor={transactionSummary.account_number_source}
              namaRekeningDilaporkan={
                transactionSummary.account_name_destination
              }
              // nominalRekeningDilaporkan={transactionSummary.amount}
              nominalRekeningDilaporkan={
                <RupiahFormatComponent value={transactionSummary.amount} />
              }
              nomorRekeningDilaporkan={
                transactionSummary.account_number_destination
              }
              tanggalTransaksiDilaporkan={
                <DateFormatComponent
                  dateString={transactionSummary.transaction_time}
                />
              }
              bankRekeningDilaporkan={"Bank Negara Indonesia"}
              jamTransaksiDilaporkan={
                new Date(
                  transactionSummary.transaction_time
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                }) + " WIB"
              }
            />
            <View style={styles.separator}></View>
            <View style={styles.peristiwaContainer}>
              <Text style={styles.headerText}>Peristiwa Yang Dilaporkan</Text>
              <View style={styles.kronologiContainer}>
                <Text style={styles.label}>Kronologi</Text>
                <View style={styles.inputContainer}>
                  <Text style={styles.input}>{chronology}</Text>
                </View>
              </View>
            </View>

            <View style={styles.lampiranContainer}>
              <Text style={styles.label}>Lampiran</Text>
              <View style={styles.imagesContainer}>
                {attachments &&
                  attachments.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                      <TouchableOpacity onPress={() => handleImageClick(image)}>
                        <Image
                          source={{ uri: image.uri }}
                          style={styles.image}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={styles.modalContainer}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.closeButton}
                  >
                    <MaterialIcons name="close" size={24} color="white" />
                  </TouchableOpacity>
                  <View style={styles.modalContent}>
                    <Image
                      source={{ uri: selectedImage.uri }}
                      style={styles.fullImage}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
          <CheckboxCustom
            label={"Saya menyatakan bahwa data yang saya input\nadalah benar."}
            value={isChecked}
            onValueChange={handleCheckboxChange}
          />

          <ButtonPrimary
            text="Kirim Laporan"
            onPress={() => {
              handleSendReport();
            }}
            disable={!isChecked || disableButton} // Atur apakah tombol dinonaktifkan atau tidak
            loading={loading} // Set loading ke status saat ini
          />
        </View>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    gap: 10,
    marginBottom: 180,
  },
  separator: {
    height: 8,
    backgroundColor: "#F5F6F7",
  },
  peristiwaContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },
  kronologiContainer: {
    gap: 6,
  },
  label: {
    color: "#243757",
    fontFamily: "PlusJakartaSansRegular",
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Menambahkan flexWrap agar teks dapat memanjang secara dinamis
    borderWidth: 0.6,
    borderColor: "#98A1B0",
    backgroundColor: "#F5F6F7",
    borderRadius: 8,
    padding: 10,
    height: "auto", // Mengubah height menjadi "auto" agar kontainer bisa membesar sesuai dengan teksnya
  },
  input: {
    flex: 1,
    color: "#98A1B0",
    fontFamily: "PlusJakartaSansRegular",
    textAlign: "justify",
    // Menghilangkan flex: 1 agar teks bisa memanjang sesuai dengan kebutuhan
  },
  textArea: {
    fontFamily: "PlusJakartaSansRegular",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
  },
  lampiranContainer: {
    paddingHorizontal: 20,
  },
  inputImage: {
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 8,
    justifyContent: "center",
    padding: 16,
    height: 94,
  },
  pasteIcon: {
    height: 24,
    width: 24,
  },
  addText: {
    textDecorationLine: "underline",
    color: "#6B788E",
    fontSize: 12,
    fontFamily: "PlusJakartaSansRegular",
  },
  addTextMore: {
    textDecorationLine: "underline",
    color: "#F15922",
    fontSize: 12,
    fontFamily: "PlusJakartaSansRegular",
  },
  uploadInfo: {
    color: "#6B788E",
    fontSize: 12,
    fontFamily: "PlusJakartaSansRegular",
  },
  addButtonImage: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#F15922",
    borderRadius: 8,
    justifyContent: "center",
    padding: 8,
    gap: 5,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#98A1B0",
    borderRadius: 8,
    padding: 4,
    alignItems: "flex-start",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 20,
    backgroundColor: "#D6264F",
    borderRadius: 50,
  },

  modalContent: {
    width: "90%",
    height: "90%",
    backgroundColor: "black",
    borderRadius: 10,
    overflow: "hidden",
  },
  fullImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "#D6264F",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(204, 204, 204, 0.5)",
    height: 152,
    gap: 20,
  },
  headerText: {
    color: "#243757",
    fontFamily: "PlusJakartaSansBold",
  },
});

export default SertakanLaporanSummary;
