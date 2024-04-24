import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import CardPelaporan from "../../../component/common/pelaporan/CardPelaporan";
import ButtonPrimary from "../../../component/common/button/ButtonPrimary";
import icons from "../../../constants/icons";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../../../component/common/header/ScreenHeaderBtn";

const dataLaporan = [
  { idlaporan: 1343232432, status: "Dilaporkan", tanggal: "10/10/2022" },
  { idlaporan: 2324324324, status: "Proses", tanggal: "10/10/2022" },
  { idlaporan: 3324324324, status: "Selesai", tanggal: "10/10/2022" },
  { idlaporan: 4324234324, status: "Dilaporkan", tanggal: "10/10/2022" },
];
const Pelaporan = () => {
  const route = useRouter();
  const [activeButton, setActiveButton] = useState("Dilaporkan");
  const [activeTabContent, setActiveTabContent] = useState("Dilaporkan");

  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
  };
  return (
    <View style={styles.container}>
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
          headerTitle: "Pelaporan",
        }}
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
      {activeTabContent === "Dilaporkan" &&
        dataLaporan
          .filter((item) => item.status === "Dilaporkan")
          .map((item) => (
            <Pressable
              key={item.idlaporan} // Move key to the outermost JSX element
              onPress={() =>
                route.push("/bnichecking/laporan/RingkasanLaporan")
              }
            >
              <View style={{ paddingHorizontal: 20, paddingVertical: 10, }}>
                <CardPelaporan
                  titleIdLaporan={item.idlaporan}
                  dateLaporan={item.tanggal}
                  status={item.status}
                />
              </View>
            </Pressable>
          ))}
      {activeTabContent === "Proses" &&
       dataLaporan
       .filter((item) => item.status === "Proses")
       .map((item) => (
         <Pressable
           key={item.idlaporan} // Move key to the outermost JSX element
           onPress={() =>
             route.push("/bnichecking/laporan/RingkasanLaporan")
           }
         >
           <View style={{ paddingHorizontal: 20, paddingVertical: 10, }}>
             <CardPelaporan
               titleIdLaporan={item.idlaporan}
               dateLaporan={item.tanggal}
               status={item.status}
             />
           </View>
         </Pressable>
       ))}
      {activeTabContent === "Selesai" &&  dataLaporan
          .filter((item) => item.status === "Selesai")
          .map((item) => (
            <Pressable
              key={item.idlaporan} // Move key to the outermost JSX element
              onPress={() =>
                route.push("/bnichecking/laporan/RingkasanLaporan")
              }
            >
              <View style={{ paddingHorizontal: 20, paddingVertical: 10, }}>
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
            route.navigate("/bnichecking/laporan/BuatLaporan");
          }}
        />
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
