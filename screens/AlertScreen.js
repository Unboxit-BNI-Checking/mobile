import React, { useState } from "react";
import { View, Button } from "react-native";
import CustomAlertComponent from "../component/alert/CustomAlertComponent";

const AlertScreen = () => {
  const [alertVisibleTransaction, setAlertVisibleTransaction] = useState(false);
  const [alertVisibleData, setAlertVisibleData] = useState(false);
  const [alertVisibleNominal, setAlertVisibleNominal] = useState(false);
  const [alertVisibleNorek, setAlertVisibleNorek] = useState(false);

  const handleOKPress = () => {
    setAlertVisibleTransaction(false);
    setAlertVisibleNominal(false);
    setAlertVisibleData(false);
    setAlertVisibleNorek(false);
    // Lakukan aksi tambahan saat tombol OK ditekan di sini
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Invalid Norek"
        onPress={() => setAlertVisibleTransaction(true)}
      />
      <CustomAlertComponent
        visible={alertVisibleTransaction}
        title="Alert"
        content="Transaksi anda tidak dapat diproses. Nomor rekening yang anda masukkan tidak valid. Silahkan ulangi transaksi anda."
        onPress={handleOKPress}
      />

      <Button
        title="Tampilkan Alert"
        onPress={() => setAlertVisibleData(true)}
      />
      <CustomAlertComponent
        visible={alertVisibleData}
        title="Alert"
        content="Harap isi data dengan benar untuk melanjutkan transaksi"
        onPress={handleOKPress}
      />

      <Button
        title="Tampilkan Alert"
        onPress={() => setAlertVisibleNominal(true)}
      />
      <CustomAlertComponent
        visible={alertVisibleNominal}
        title="Alert"
        content="Silahkan isi nominal dengan benar untuk melanjutkan transaksi!"
        onPress={handleOKPress}
      />

      <Button
        title="Tampilkan Alert"
        onPress={() => setAlertVisibleNorek(true)}
      />
      <CustomAlertComponent
        visible={alertVisibleNorek}
        title="Alert"
        content="Nomor rekening yang anda masukkan tidak valid."
        onPress={handleOKPress}
      />
    </View>
  );
};

export default AlertScreen;
