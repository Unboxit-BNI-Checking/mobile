import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import images from "../constants/images";
import icons from "../constants/icons";
import Checkbox from "expo-checkbox";
import ButtonNextClose from "../component/common/button/ButtonNextClose";

const AlertTest = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.bottomSheet}>
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Image
                source={icons.icStatusGreen}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.bottomSheetText}>Rekening Asing</Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "PlusJakartaSansMedium",
                  color: "#243757",
                }}
              >
                Hati-hati dalam bertransaksi dengan Nomor Rekening Asing ini.
              </Text>
              <Text
                style={{
                  fontFamily: "PlusJakartaSansMedium",
                  color: "#F15922",
                  textDecorationLine: "underline",
                }}
              >
                Cek No Rek Disini
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? "#F15922" : undefined}
              />
              <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
                Jangan tunjukan ini lagi hari ini
              </Text>
            </View>
            <ButtonNextClose
              closeName="Close"
              handlePressModal={() => setModalVisible(false)}
              nextName="Lanjutkan"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
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
  bottomSheetText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSansBold",
  },
});

export default AlertTest;
