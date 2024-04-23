import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CardPelaporan from "../../../component/common/pelaporan/CardPelaporan";
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";
import icons from "../../../constants/icons";
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const Pelaporan = () => {

  const route = useRouter()
  const [activeButton, setActiveButton] = useState("Dilaporkan");
  const [activeTabContent, setActiveTabContent] = useState("Dilaporkan");

  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
  };
  return (
    <View style={styles.container}>
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
              }}
            >
              Dilaporkan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.textRekTujuan,
              activeButton === "Proses" && styles.activeTab,
              {
                borderBottomColor:
                  activeButton === "Proses"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 0.5)",
                borderBottomWidth: activeButton === "Proses" ? 3 : 2,
              },
            ]}
            onPress={() => handleTabPress("Proses")}
          >
            <Text
              style={{
                fontSize: 14,
                color:
                  activeButton === "Proses"
                    ? "rgb(241, 89, 34)"
                    : "rgba(204, 204, 204, 1)",
              }}
            >
              Proses
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
      {activeTabContent === "Dilaporkan" && (
        <View style={{ padding: 20 }}>
          <CardPelaporan />
        </View>
      )}
      {activeTabContent === "Proses" && <Text>Proses</Text>}
      {activeTabContent === "Selesai" && <Text>Selesai</Text>}
      <View style={styles.bottomButtonContainer}>
        <ButtonPrimary text="Buat Laporan" onPress={() => {
          route.push("/bnichecking/laporan/BuatLaporan")
        } }/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
