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
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

const SertakanLaporan = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const route = useRouter();

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

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
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
          headerTitle: "Sertakan Laporan",
        }}
      />
      <ScrollView>
        <View style={{ padding: 20, gap: 10, marginBottom: 250 }}>
          <View style={{ gap: 4 }}>
            <Text style={styles.headerText}>Rekening Pelapor</Text>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ color: "#6B788E" }}>1818181818</Text>
              <Text style={{ color: "#6B788E" }}>Nama Rekening Pelapor</Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
          <View style={{ gap: 4 }}>
            <Text style={styles.headerText}>Transaksi yang dipilih</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.headerText}>Transfer BNI</Text>
              <Text style={styles.headerText}>Rp-10.0000</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.subHeaderText}>1234567890</Text>
              <Text style={styles.subHeaderText}>19/04/202</Text>
            </View>
            <Text style={styles.subHeaderText}>Nama Pemilik Rek</Text>
          </View>
          <View style={{ height: 8, backgroundColor: "#F5F6F7" }}></View>
          <View style={{ gap: 10 }}>
            <Text style={styles.headerText}>Peristiwa Yang Dilaporkan</Text>
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  color: "#243757",
                  fontFamily: "PlusJakartaSansRegular",
                }}
              >
                Kronologi
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={7}
                  onChangeText={setText}
                  value={text}
                />
              </View>
            </View>
          </View>

          <View style={{ gap: 6 }}>
            <Text
              style={{ color: "#243757", fontFamily: "PlusJakartaSansRegular" }}
            >
              Lampiran
            </Text>

            {images.length === 0 ? (
              <TouchableOpacity onPress={pickImages}>
                <View style={styles.inputImage}>
                  <Image
                    source={icons.icPaste}
                    style={{ height: 24, width: 24 }}
                  />
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      color: "#6B788E",
                      fontSize: 12,
                      fontFamily: "PlusJakartaSansRegular",
                    }}
                  >
                    Tambahkan Bukti Disini
                  </Text>
                  <Text
                    style={{
                      color: "#6B788E",
                      fontSize: 12,
                      fontFamily: "PlusJakartaSansRegular",
                    }}
                  >
                    Anda bisa upload lebih dari 1 file
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View>
                <TouchableOpacity onPress={pickImages}>
                  <View style={styles.addButtonImage}>
                    <MaterialIcons name="add" size={24} color="#F15922" />
                    <Text style={{ fontFamily: "PlusJakartaSansRegular", color: "#F15922" }}  >Tambah Lampiran</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.imagesContainer}>
                  {images.map((image, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <TouchableOpacity
                          onPress={() => handleImageClick(image)}
                        >
                          <Image
                            source={{ uri: image.uri }}
                            style={styles.image}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => deleteImage(index)}
                          style={styles.deleteButton}
                        >
                          <MaterialIcons
                            name="close"
                            size={24}
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <TouchableHighlight
                  onPress={() => setModalVisible(false)}
                  style={{ position: "absolute", top: 20, right: 20 }}
                >
                  <Text style={{ color: "white", fontSize: 20 }}>Close</Text>
                </TouchableHighlight>
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
            route.navigate("/bnichecking/laporan/SertakanLaporanSummary");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
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
  input: {
    flex: 1,
    marginLeft: 10,
  },
  headerText: { color: "#243757", fontFamily: "PlusJakartaSansBold" },
  subHeaderText: {
    color: "#6B788E",
    fontFamily: "PlusJakartaSansRegular",
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
  textArea: {
    fontFamily: "PlusJakartaSansRegular",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
  },

  imagesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 4,
    alignItems: "flex-start",
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
});

export default SertakanLaporan;
