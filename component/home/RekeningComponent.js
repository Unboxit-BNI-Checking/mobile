import { View, Text, Image } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import icons from "../../constants/icons";

const RekeningComponent = () => {
  return (
    <View style={{ height: 260 }}>
      <View
        style={{
          backgroundColor: "#F37548",
          height: "82%",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <View style={{ marginHorizontal: 16, marginTop: 14 }}>
          <Text
            style={{
              color: "white",
              fontFamily: "PlusJakartaSansMedium",
              fontSize: 16,
            }}
          >
            Halo,
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "PlusJakartaSansBold",
              fontSize: 16,
            }}
          >
            Amelia Qatrunnada
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "blue" }}>
        <View
          style={{
            marginHorizontal: 16,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            marginTop: -130,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: "white",
            borderRadius: 16,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 18,
            elevation: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "PlusJakartaSansBold",
                color: "#5D6B82",
              }}
            >
              BNI Taplus Muda
            </Text>
            <View
              style={{
                height: 26,

                backgroundColor: "#F5F6F7",
                flexDirection: "row",
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 50,
              }}
            >
              <Image
                source={icons.icPoinHome}
                style={{
                  height: 15,
                  width: 32,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: "#F15922",
                  fontSize: 12,
                  fontFamily: "PlusJakartaSansBold",
                }}
              >
                3.165
              </Text>
              <Image
                source={icons.icArrowRightPoin}
                style={{
                  height: 10,
                  width: 10,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <Text
              style={{
                color: "#5D6B82",
                fontFamily: "PlusJakartaSansRegular",
              }}
            >
              1818181818
            </Text>
            <Octicons name="copy" size={16} color="#98A1B0" />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "PlusJakartaSansBold",
                fontSize: 16,
                color: "#5D6B82",
              }}
            >
              Rp *******
            </Text>
            <Ionicons name="eye-off-outline" size={18} color="#5D6B82" />
          </View>

          <View
            style={{
              borderBottomColor: "#E5E5E5",
              borderBottomWidth: 1,
              marginTop: 14,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "PlusJakartaSansRegular",
                color: "#5D6B82",
              }}
            >
              Semua Rekeningmu
            </Text>
            <Ionicons name="chevron-down" size={18} color="#5D6B82" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RekeningComponent;
