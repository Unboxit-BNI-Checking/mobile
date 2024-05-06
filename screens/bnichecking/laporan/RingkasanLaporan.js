import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import ProgressBarComponent from "../../../component/progress/ProgressBarComponent";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import StatusRingkasanPelaporan from "../../../component/pelaporan/StatusRingkasanPelaporan";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import CardDataPelaporan from "../../../component/pelaporan/CardDataPelaporan";
import { useNavigation } from "@react-navigation/native";
import DateFormatComponent from "../../../component/text/DateFormatComponent";
import RupiahFormatComponent from "../../../component/text/RupiahFormatComponent";

const RingkasanLaporan = ({ route }) => {
  const { reportData } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const status = reportData.status_int;
  const handleImageClick = (imageId) => {
    setSelectedImageId(imageId);
    setModalVisible(true);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <CustomAppBar
        title="Ringkasan Laporan"
        onLeftPress={() => navigation.goBack()}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      <ScrollView>
        <View style={styles.contentContainer}>
          <ProgressBarComponent currentStep={Math.min(status, 3)} />
          <StatusRingkasanPelaporan status={status} />
          <View style={styles.separator}></View>
          <View style={{ paddingHorizontal: 20 }}>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text
                style={{ color: "#6B788E", fontFamily: "PlusJakartaSansBold" }}
              >
                ID Laporan
              </Text>
              <Text
                style={{
                  color: "#6B788E",
                  fontFamily: "PlusJakartaSansRegular",
                }}
              >
                {reportData.reports_id}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text
                style={{ color: "#6B788E", fontFamily: "PlusJakartaSansBold" }}
              >
                Tanggal Laporan
              </Text>
              <Text
                style={{
                  color: "#6B788E",
                  fontFamily: "PlusJakartaSansRegular",
                }}
              >
                {/* {new Date(reportData.created_at_report).toLocaleDateString()} */}
                {
                  <DateFormatComponent
                    dateString={reportData.created_at_report}
                  />
                }
              </Text>
            </View>
          </View>
          <View style={styles.line}></View>

          <CardDataPelaporan
            namaRekeningPelapor={reportData.account_number_source_username}
            nomorRekeningPelapor={reportData.account_number_source}
            namaRekeningDilaporkan={
              reportData.account_number_destination_username
            }
            nominalRekeningDilaporkan={<RupiahFormatComponent value={reportData.amount} />}
            nomorRekeningDilaporkan={reportData.account_number_destination}
            
            tanggalTransaksiDilaporkan={
              <DateFormatComponent
                dateString={reportData.created_at_transaction}
              />
            }
            bankRekeningDilaporkan={"Bank Negara Indonesia"}
            jamTransaksiDilaporkan={new Date(
              reportData.created_at_transaction
            ).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          />
          <View style={styles.separator}></View>
          <View style={styles.peristiwaContainer}>
            <Text style={styles.headerText}>Peristiwa Yang Dilaporkan</Text>
            <View style={styles.kronologiContainer}>
              <Text style={styles.label}>Kronologi</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.input}>{reportData.chronology}</Text>
              </View>
            </View>
          </View>

          <View style={styles.lampiranContainer}>
            <Text style={styles.label}>Lampiran</Text>
            <View style={styles.imagesContainer}>
              {reportData.attachment &&
                reportData.attachment.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => handleImageClick(index)}>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {loading && (
                          <ActivityIndicator size="large" color="#F37548" />
                        )}

                        <Image
                          source={{ uri: image }}
                          style={styles.image}
                          onLoad={handleLoad}
                        />
                      </View>
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
                    source={{ uri: reportData.attachment[selectedImageId] }}
                    style={styles.fullImage}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    gap: 15,
    marginBottom: 80,
  },
  separator: {
    height: 8,
    backgroundColor: "#F5F6F7",
  },
  line: {
    height: 1,
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
    top: 15,
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

export default RingkasanLaporan;
