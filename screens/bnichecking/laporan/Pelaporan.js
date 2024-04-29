import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CardPelaporan from "../../../component/pelaporan/CardPelaporan";
import ButtonPrimary from "../../../component/button/ButtonPrimary";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";

const dataLaporan = [
  { idlaporan: 1343232432, status: "Dilaporkan", tanggal: "10/10/2022" },
  { idlaporan: 2324324324, status: "Diproses", tanggal: "10/10/2022" },
  { idlaporan: 3324324324, status: "Selesai", tanggal: "10/10/2022" },
  { idlaporan: 4324234324, status: "Dilaporkan", tanggal: "10/10/2022" },
];
const Pelaporan = () => {
  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState("Dilaporkan");
  const [activeTabContent, setActiveTabContent] = useState("Dilaporkan");

  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomAppBar
        title="Pelaporan"
        onLeftPress={() => navigation.goBack()}
        leftIcon={icons.icArrowForward}
        dimension={24}
      />
      {/* TOPBAR DAFTAR FAVORIT */}
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.tabRekTujuan}>
          {/* TAB DAFTAR FAVORIT DAN INPUT BARU */}
          <TouchableOpacity
            style={[
              styles.textRekTujuan,
              activeButton === "Dilaporkan" && styles.activeTab,
              {
                borderBottomColor:
                  activeButton === "Dilaporkan"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 0.5)",
                borderBottomWidth: activeButton === "Dilaporkan" ? 3 : 2,
              },
            ]}
            onPress={() => handleTabPress("Dilaporkan")}
          >
            <Text
              style={{
                fontSize: 14,
                color:
                  activeButton === "Dilaporkan"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 1)",
                    fontFamily:
                  activeButton === "Dilaporkan"
                    ? "PlusJakartaSansBold"
                    : "PlusJakartaSansMedium",
              }}
            >
              Dilaporkan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.textRekTujuan,
              activeButton === "Diproses" && styles.activeTab,
              {
                borderBottomColor:
                  activeButton === "Diproses"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 0.5)",
                borderBottomWidth: activeButton === "Diproses" ? 3 : 2,
              },
            ]}
            onPress={() => handleTabPress("Diproses")}
          >
            <Text
              style={{
                fontSize: 14,
                color:
                  activeButton === "Diproses"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 1)",
                fontFamily:
                  activeButton === "Diproses"
                    ? "PlusJakartaSansBold"
                    : "PlusJakartaSansMedium",
              }}
            >
              Diproses
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.textRekTujuan,
              activeButton === "Selesai" && styles.activeTab,
              {
                borderBottomColor:
                  activeButton === "Selesai"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 0.5)",
                borderBottomWidth: activeButton === "Selesai" ? 3 : 2,
              },
            ]}
            onPress={() => handleTabPress("Selesai")}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: activeButton === "Selesai"
                ? "PlusJakartaSansBold"
                : "PlusJakartaSansMedium",
                color:
                  activeButton === "Selesai"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 1)",
                    
              }}
            >
              Selesai
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* CONTENT YANG AKTIF SESUAI DENGAN TAB YANG AKTIF */}
      {activeTabContent === "Dilaporkan" &&
        dataLaporan
          .filter((item) => item.status === "Dilaporkan")
          .map((item) => (
            <Pressable
              key={item.idlaporan} // Move key to the outermost JSX element
              onPress={() => navigation.navigate("RingkasanLaporan")}
            >
              <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <CardPelaporan
                  titleIdLaporan={item.idlaporan}
                  dateLaporan={item.tanggal}
                  status={item.status}
                />
              </View>
            </Pressable>
          ))}
      {activeTabContent === "Diproses" &&
        dataLaporan
          .filter((item) => item.status === "Diproses")
          .map((item) => (
            <Pressable
              key={item.idlaporan} // Move key to the outermost JSX element
              onPress={() => navigation.navigate("RingkasanLaporan")}
            >
              <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <CardPelaporan
                  titleIdLaporan={item.idlaporan}
                  dateLaporan={item.tanggal}
                  status={item.status}
                />
              </View>
            </Pressable>
          ))}
      {activeTabContent === "Selesai" &&
        dataLaporan
          .filter((item) => item.status === "Selesai")
          .map((item) => (
            <Pressable
              key={item.idlaporan} // Move key to the outermost JSX element
              onPress={() => navigation.navigate("RingkasanLaporan")}
            >
              <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <CardPelaporan
                  titleIdLaporan={item.idlaporan}
                  dateLaporan={item.tanggal}
                  status={item.status}
                />
              </View>
            </Pressable>
          ))}
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary
          text="Buat Laporan"
          onPress={() => {
            navigation.navigate("BuatLaporan");
          }}
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
  tabRekTujuan: {
    flexDirection: "row",
  },
  textRekTujuan: {
    flex: 1,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
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

export default Pelaporan;
