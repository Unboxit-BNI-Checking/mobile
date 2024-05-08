import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const StatusRekening = () => {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <Text
        style={{
          color: "#243757",
          fontSize: 16,
          fontFamily: "PlusJakartaSansBold",
        }}
      >
        Status Rekening
      </Text>
      <View style={{ gap: 8 }}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 2,
            height: 26,
            width: 59,
            backgroundColor: "#E7F8EF",
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#10B55A",
              fontSize: 12,
            }}
          >
            Normal
          </Text>
        </View>

        <Text style={styles.statusDescription}>
          Nomor Rekening ini belum pernah melalui proses investigasi.
        </Text>
      </View>
      <View style={{ gap: 8 }}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 2,
            height: 26,
            width: 79,
            backgroundColor: "#FFF6E6",
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#FFA500", fontSize: 12 }}>Investigasi</Text>
        </View>

        <Text style={styles.statusDescription}>
          Nomor Rekening ini pernah menerima laporan {"\n"}dari orang lain dan
          sedang dalam investigasi.
        </Text>
      </View>
      <View style={{ gap: 8 }}>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 2,
            height: 26,
            width: 50,
            backgroundColor: "#FBE9ED",
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#D6264F", fontSize: 12 }}>Blokir</Text>
        </View>

        <Text style={styles.statusDescription}>
          Nomor Rekening ini terindikasi Penipuan dan {"\n"}sudah diblokir.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    gap: 16,
    justifyContent: "center",
  },
  statusDescription: {
    color: "#243757",
    fontSize: 14,
    fontFamily: "PlusJakartaSansRegular",
  },
});

export default StatusRekening;
