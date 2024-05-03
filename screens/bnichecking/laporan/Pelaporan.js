import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import CardPelaporan from "../../../component/pelaporan/CardPelaporan";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { getAllReportsMadeByCurrentUser } from "../../../services/ReportService";
import { reportStatus } from "../../../constants/reportStatus";

const Pelaporan = () => {
  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState("Dilaporkan");
  const [activeTabContent, setActiveTabContent] = useState("Dilaporkan");
  const [dataLaporan, setDataLaporan] = useState([]);

  useEffect(() => {
    getAllReports = async () => {
      reports = await getAllReportsMadeByCurrentUser();
      formattedReports = reports.map((report) => {
        return {
          report_id: report.reports_id,
          status: reportStatus[report.status - 1],
          status_int: report.status,
          created_at_report: report.created_at_reports,
          chronology: report.chronology,
          amount: report.amount,
          reports_id: report.reports_id,
          created_at_reports: report.created_at_reports,
          account_number_source: report.account_number_source,
          account_number_source_username: report.account_number_source_username,
          account_number_destination: report.account_number_destination,
          account_number_destination_username:
            report.account_number_destination_username,
          created_at_transaction: report.created_at_transaction,
          attachment: report.attachment,
        };
      });
      setDataLaporan(formattedReports);
    };

    getAllReports();
  }, []);

  const handleTabPress = (tab) => {
    setActiveButton(tab);
    setActiveTabContent(tab);
  };

  const handleSeeReportDetail = (report) => {
    navigation.navigate("RingkasanLaporan", {
      reportData: report,
    });
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
                fontFamily:
                  activeButton === "Selesai"
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

      <ScrollView>
        <View>
          {activeTabContent === "Dilaporkan" &&
            dataLaporan
              .filter((item) => item.status === "Dilaporkan")
              .map((item) => (
                <Pressable
                  key={item.report_id} // Move key to the outermost JSX element
                  onPress={() => {
                    handleSeeReportDetail(item);
                  }}
                >
                  <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <CardPelaporan
                      titleReportId={item.report_id}
                      dateLaporan={new Date(
                        item.created_at_report
                      ).toLocaleDateString()}
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
                  key={item.report_id} // Move key to the outermost JSX element
                  onPress={() => handleSeeReportDetail(item)}
                >
                  <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <CardPelaporan
                      titleReportId={item.report_id}
                      dateLaporan={item.created_at_report}
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
                  key={item.report_id} // Move key to the outermost JSX element
                  onPress={() => handleSeeReportDetail(item)}
                >
                  <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <CardPelaporan
                      titleReportId={item.report_id}
                      dateLaporan={item.created_at_report}
                      status={item.status}
                    />
                  </View>
                </Pressable>
              ))}
        </View>
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BuatLaporan")}
        >
          <View style={{ flexDirection: "row", gap: 8 }}>
            <MaterialIcon name="add" size={24} color="#fff" />
            <Text style={styles.text}>Buat Laporan</Text>
          </View>
        </TouchableOpacity>
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
  
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "rgba(204, 204, 204, 0.5)",
    height: 102,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#F15922",
    padding: 14,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: "white",
    marginRight: 10,
    fontFamily: "PlusJakartaSansMedium",
  },
});

export default Pelaporan;
