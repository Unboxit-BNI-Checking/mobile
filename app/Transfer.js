import { View, StyleSheet } from "react-native";
import React from "react";
import TransferComponent from "../component/transfer/TransferComponent";

const Transfer = () => {
  return (
    <View style={styles.container}>
      <TransferComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Transfer;
