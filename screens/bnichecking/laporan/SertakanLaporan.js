import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";

import ButtonPrimary from "../../../component/button/ButtonPrimary";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import CardDataPelaporan from "../../../component/pelaporan/CardDataPelaporan";
import DateFormatComponent from "../../../component/text/DateFormatComponent";
import RupiahFormatComponent from "../../../component/text/RupiahFormatComponent";

const SertakanLaporan = ({ route }) => {
  const { transactionSummary } = route.params;
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const selectedImages = result.assets || [];
      setImages((prevImages) => [...prevImages, ...selectedImages]);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleConfirmMakeReport = () => {
    navigation.navigate("SertakanLaporanSummary", {
      transactionSummary: transactionSummary,
      attachments: images,
      chronology: text,
    });
  };

  return (
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
            namaRekeningDilaporkan={transactionSummary.account_name_destination}
            // nominalRekeningDilaporkan={transactionSummary.amount}
            nominalRekeningDilaporkan={
              <RupiahFormatComponent value={transactionSummary.amount} />
            }
            nomorRekeningDilaporkan={
              transactionSummary.account_number_destination
            }
            // tanggalTransaksiDilaporkan={new Date(
            //   transactionSummary.transaction_time
            // ).toLocaleDateString()}
            tanggalTransaksiDilaporkan={
              <DateFormatComponent
                dateString={transactionSummary.transaction_time}
              />
            }
            bankRekeningDilaporkan={"Bank Negara Indonesia"}
            jamTransaksiDilaporkan={
              new Date(transactionSummary.transaction_time).toLocaleTimeString(
                [],
                {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                }
              ) + " WIB"
            }
          />
          <View style={styles.separator}></View>
          <View style={styles.peristiwaContainer}>
            <Text style={styles.headerText}>Peristiwa Yang Dilaporkan</Text>
            <View style={styles.kronologiContainer}>
              <Text style={styles.label}>Kronologi</Text>
              <TextInput
                style={styles.textArea}
                numberOfLines={5}
                multiline={true}
                placeholder="Tulis Kronologi Peristiwa Yang Dilaporkan"
                placeholderTextColor={"#98A1B0"}
                onChangeText={setText}
                value={text}
              />
            </View>
          </View>

          <View style={styles.lampiranContainer}>
            <Text style={styles.label}>Lampiran</Text>
            <TouchableOpacity onPress={pickImages}>
              <View style={styles.inputImage}>
                <Image
                  source={icons.icTambahkanLaporan}
                  style={styles.pasteIcon}
                />
                <Text style={styles.addText}>Tambahkan Lampiran</Text>
                <Text style={styles.uploadInfo}>
                  Anda bisa upload lebih dari 1 file
                </Text>
              </View>
            </TouchableOpacity>
            {images.length === 0 ? null : (
              <View style={styles.imagesContainer}>
                {images.map((image, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => handleImageClick(image)}>
                      <Image source={{ uri: image.uri }} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteImage(index)}
                      style={styles.deleteButton}
                    >
                      <MaterialIcons name="close" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}

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
                    source={{ uri: selectedImage?.uri }}
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
        <ButtonPrimary
          text="Selanjutnya"
          onPress={() => {
            handleConfirmMakeReport();
          }}
          disable={text.length === 0 || images.length === 0}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  contentContainer: {
    gap: 10,
    marginBottom: 150,
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

  textArea: {
    fontFamily: "PlusJakartaSansRegular",
    borderWidth: 1,
    borderColor: "#C2C7D0",
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
  },
  lampiranContainer: {
    gap: 6,
    paddingHorizontal: 20,
  },
  inputImage: {
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#C2C7D0",
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
    fontFamily: "PlusJakartaSansMedium",
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
    fontFamily: "PlusJakartaSansMedium",
  },
  addButtonImage: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#C2C7D0",
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
    borderColor: "#C2C7D0",
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
    height: 102,
    alignItems: "center",
  },
  headerText: {
    color: "#243757",
    fontFamily: "PlusJakartaSansBold",
  },
});

export default SertakanLaporan;
