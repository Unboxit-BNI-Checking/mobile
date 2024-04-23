import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const dataFavorite = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const rekeningPelapor = [
  { label: "11111111111", value: "1" },
  { label: "12839405948", value: "2" },
];

const BuatLaporan = () => {
  const [valueRekening, setValueRekening] = useState(null);
  const [showSelectedDropdown, setShowSelectedDropdown] = useState(false);
  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
    </View>
  );

  useEffect(() => {
    const rekeningValue = rekeningPelapor.map((item) => item.value);
    if (rekeningValue.includes(valueRekening)) {
      setShowSelectedDropdown(true);
    } else {
      setShowSelectedDropdown(false);
    }
  }, [valueRekening]);

  return (
    <View style={{ padding: 20 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontFamily: "PlusJakartaSansMedium" }}>
          Rekening Pelapor
        </Text>
        {showSelectedDropdown ? (
          <View>
            <Button
              title="Pilih Rekening"
              onPress={() => setShowSelectedDropdown(false)}
            ></Button>
            <Text>Dropdown telah dipilih</Text>
          </View>
        ) : (
          <Dropdown
            style={styles.dropdown}
            data={rekeningPelapor}
            labelField="label"
            valueField="value"
            placeholder={rekeningPelapor[0].label}
            searchPlaceholder="Search..."
            value={valueRekening}
            search
            onChange={(item) => setValueRekening(item.value)}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: "#C2C7D0",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    fontFamily: "PlusJakartaSansMedium",
  },
});
export default BuatLaporan;
