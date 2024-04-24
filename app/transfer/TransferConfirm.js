import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import icons from "../../constants/icons";
import LabelValidasiComponent from "../../component/common/label/LabelValidasiComponent";
import LabelValidasiPengirimComponent from "../../component/common/label/LabelValidasiPengirimComponent";
import LabelStatusComponent from "../../component/common/label/LabelStatusComponent";
import ButtonPrimary from "../../component/common/button/ButtonPrimary";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../component/common/header/ScreenHeaderBtn";
import Ionicons from "@expo/vector-icons/Ionicons";

const TransferConfirm = () => {
  const route = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          headerTitle: "Validasi",
        }}
      />
      <ScrollView>
        <View
          style={{
            gap: 10,
            marginHorizontal: 20,
            marginBottom: 140,
            marginTop: 20,
          }}
        >
          <LabelValidasiComponent
            title={"Rekening Tujuan"}
            subTitle={"1234567890"}
          />
          <LabelValidasiComponent
            title={"Nama Penerima"}
            subTitle={"Sdr Jeon Wonwoo"}
          />

          <LabelValidasiComponent title={"Email Penerima"} subTitle={""} />
          <LabelValidasiComponent title={"Bank Tujuan"} subTitle={"BNI"} />
          <LabelStatusComponent title={"Status Rekening"} subTitle={"Normal"} />
          <View style={{ height: 1, backgroundColor: "#F5F6F7" }}></View>
          <LabelValidasiPengirimComponent
            title={"Nama Pengirim"}
            subTitle={"Amelia Qatrunnada"}
          />
          <LabelValidasiPengirimComponent
            title={"Rekening Pengirim"}
            subTitle={"1818181818"}
          />
          <LabelValidasiPengirimComponent
            title={"Nominal"}
            subTitle={"10.000"}
          />
          <LabelValidasiPengirimComponent title={"Fee"} subTitle={"0"} />
          <View
            style={{
              backgroundColor: "#F5F6F7",

              height: 48,
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <LabelValidasiPengirimComponent
              title={"Total"}
              subTitle={"10.000"}
            />
          </View>
          <View style={{ height: 48, gap: 6, marginTop: 10 }}>
            <Text style={{ fontSize: 14, color: "#243757" }}>
              Password Transaksi
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Masukan Nomor Rekening"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={toggleShowPassword}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="#6B788E"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Konfirmasi"
          onPress={() => {
            route.replace("/transfer/TransferSuccess");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});
export default TransferConfirm;
