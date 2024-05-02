import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import images from "../constants/images";
import icons from "../constants/icons";
import ButtonPrimary from "../component/button/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import CheckboxCustom from "../component/checkbox/CheckboxCustom";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { userLogin } from "../services/UserService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [mpin, setMpin] = useState("");
  const [showMpin, setShowMpin] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleMpinChange = (text) => {
    setMpin(text);
  };

  const toggleShowMpin = () => {
    setShowMpin(!showMpin);
  };

  const handleLogin = async () => {
    userLogin(userId, mpin)
      .then((response) => {
        AsyncStorage.setItem("token", response.token);
        navigation.replace("Tabs");
      })
      .catch((error) => {
        Alert.alert("Error", "Invalid username or mpin");
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={images.background46}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.logoContainer}>
        <Image source={images.bnilogo} style={styles.logo} />
        {/* <Text style={styles.logoText}>Melayani Negeri Kebanggaan Bangsa</Text> */}
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <ButtonPrimary
            text="Login"
            iconUrl={icons.icBiometricLogin}
            dimension={20}
            onPress={openModal}
          />
        </View>

        <View style={styles.iconRow}>
          <View style={styles.iconColumn}>
            <Image source={icons.icWalletLogin} style={styles.icon} />
            <Text style={styles.iconText}>E-Wallet</Text>
          </View>
          <View style={styles.iconColumn}>
            <Image source={icons.icQrisLogin} style={styles.icon} />
            <Text style={styles.iconText}>QRIS</Text>
          </View>
          <View style={styles.iconColumn}>
            <Image source={icons.icBantuanLogin} style={styles.icon} />
            <Text style={styles.iconText}>Bantuan</Text>
          </View>
          <View style={styles.iconColumn}>
            <Image source={icons.icLainnyaLogin} style={styles.icon} />
            <Text style={styles.iconText}>Lainnya</Text>
          </View>
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
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <View style={styles.row}>
                <MaterialIcons name="close" size={24} color="#6B788E" />
              </View>
            </TouchableOpacity>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>User ID</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Masukan User ID"
                  value={userId}
                  onChangeText={setUserId}
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.label}>MPIN</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Masukan MPIN"
                  secureTextEntry={!showMpin}
                  value={mpin}
                  onChangeText={handleMpinChange}
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={toggleShowMpin}>
                  <Ionicons
                    name={showMpin ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color="#6B788E"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <CheckboxCustom
                onValueChange={setIsChecked}
                label={"Simpan User ID"}
                value={isChecked}
              />
              <Text style={styles.forgotText}>Lupa User ID/MPIN?</Text>
            </View>

            <View style={styles.buttonWrapper}>
              <View style={{ width: "84%" }}>
                <ButtonPrimary
                  text={"Login"}
                  disable={!userId || !mpin}
                  onPress={() => handleLogin()}
                />
              </View>
              <View>
                <Image
                  source={icons.icBiometricLoginForm}
                  style={styles.biometricIcon}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  backgroundImage: {
    width: "100%",
    height: 401,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "30%",
  },
  logo: {
    width: 168,
    height: 48,
  },
  logoText: {
    fontSize: 12,
    fontFamily: "PlusJakartaSansBold",
    color: "#006885",
    marginTop: 12,
  },
  buttonContainer: {
    marginBottom: 143,
    alignItems: "center",
    gap: 40,
  },
  buttonRow: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconRow: {
    flexDirection: "row",
    gap: 25,
  },
  iconColumn: {
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconText: {
    fontSize: 12,
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputWrapper: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 10,
    color: "#243757",
    fontFamily: "PlusJakartaSansRegular",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C2C7D0",
    borderRadius: 8,
    height: 48,
    padding: 14,
  },
  input: {
    flex: 1,
    fontFamily: "PlusJakartaSansRegular",
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  forgotText: {
    color: "#006885",
    fontFamily: "PlusJakartaSansRegular",
    fontSize: 12,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  biometricIcon: {
    width: 48,
    height: 48,
  },
});

export default LoginScreen;
