import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CardPelaporan from "../../../component/pelaporan/CardPelaporan";
import icons from "../../../constants/icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomAppBar from "../../../component/header/CustomAppBar";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { getAllReportsMadeByCurrentUser } from "../../../services/ReportService";
import { reportStatus } from "../../../constants/reportStatus";
import DateFormatComponent from "../../../component/text/DateFormatComponent";
import TimeFormatComponent from "../../../component/text/TimeFormatComponent";

const Pelaporan = () => {
  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState("Dilaporkan");
  const [activeTabContent, setActiveTabContent] = useState("Dilaporkan");
  const [dataLaporan, setDataLaporan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getAllReports = async () => {
    try {
      const reports = await getAllReportsMadeByCurrentUser();
      const formattedReports = formatReports(reports);
      setDataLaporan(formattedReports);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching reports:", error);
      // Handle error as needed
    }
  };

  const formatReports = (reports) => {
    return reports.map((report) => ({
      report_id: report.reports_id,
      status:
        report.status === 3 || report.status === 4 || report.status === 5
          ? "Selesai"
          : reportStatus[report.status - 1],
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
    }));
  };

  useEffect(() => {
    getAllReports();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getAllReports(); // Refresh data
    }, 500);
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
        onLeftPress={() => navigation.replace("BNIChecking")}
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
      <ScrollView
        contentContainerStyle={
          isLoading ? { flexGrow: 1, justifyContent: "center" } : null
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? ( // Display loading indicator if isLoading is true
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" color="#F37548" />
          </View>
        ) : (
          <>
            {(activeTabContent === "Dilaporkan" || activeTabContent === "Diproses" ||
              activeTabContent === "Selesai") &&
              (dataLaporan.filter((item) => item.status === activeTabContent)
                .length > 0 ? (
                dataLaporan
                  .filter((item) => item.status === activeTabContent)
                  .sort((a, b) => new Date(b.created_at_report) - new Date(a.created_at_report))
                  .map((item) => (
                    <Pressable
                      key={item.report_id}
                      onPress={() => {
                        handleSeeReportDetail(item);
                      }}
                    >
                      <View
                        style={{ paddingHorizontal: 20, paddingVertical: 10 }}
                      >
                        <CardPelaporan
                          titleReportId={item.report_id}
                          dateLaporan={
                            <DateFormatComponent
                              dateString={item.created_at_report}
                            />
                          }
                          timeLaporan={<TimeFormatComponent timestamp={item.created_at_report} />}
                          status={item.status}
                        />
                      </View>
                    </Pressable>
                  ))
              ) : (
                <View style={{ marginTop: 100 }}>
                  <Image
                    source={icons.icNoReport}
                    style={{ alignSelf: "center", width: 150, height: 150 }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontFamily: "PlusJakartaSansBold",
                      color: "#6B788E",
                    }}
                  >
                    Belum Ada Pelaporan
                  </Text>
                </View>
              ))}
          </>
        )}
      </ScrollView>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("BuatLaporan")}
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
