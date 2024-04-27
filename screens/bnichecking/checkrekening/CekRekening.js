import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import icons from "../../../constants/icons";
import { AntDesign } from "@expo/vector-icons";
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";
import { StackActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/common/header/CustomAppBar";

const CekRekening = () => {

  const navigation = useNavigation();
  const [rekening, setRekening] = useState("")
  return (
    <SafeAreaView style={styles.container}>
      <CustomAppBar
        title="Cek Rekening"
        onLeftPress={() => navigation.navigate("BNIChecking")}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      
      <View style={{ padding: 20 }}>
        <View style={{ gap: 8 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "PlusJakartaSansBold",
              color: "#243757",
            }}
          >
            Cek Rekening
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "PlusJakartaSansRegular",
              color: "#6B788E",
            }}
          >
            Identifikasi apakah seseorang berpotensi {"\n"}melakukan penipuan
            sebelum bertransaksi.
          </Text>
        </View>
        <View
          style={{
            gap: 15,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "PlusJakartaSansRegular",
              color: "#243757",
            }}
          >
            No Rekening
          </Text>

          <View style={styles.inputContainer}>
            <Image source={icons.icSearchCekRekening} />
            <TextInput
              style={styles.input}
              placeholder="Masukan Nomor Rekening"
              value={rekening}
              onChangeText={setRekening}
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View>

      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Cek Rekening"
          onPress={() => {
            navigation.navigate("HasilCekRekening");
          }}
          disable={!rekening}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 14,
  },
  input: {
    flex: 1,
    marginLeft: 10,
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

export default CekRekening;
