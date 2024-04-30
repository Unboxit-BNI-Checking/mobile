import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

const CustomAlertComponent = ({ visible, title, content, onPress }) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            padding: 20,
            borderRadius: 8,
            height: "auto",
            width: "auto",
            marginHorizontal: 32,
          }}
        >
          <Text
            style={{
              fontFamily: "PlusJakartaSansBold",
              textAlign: "center",
              color: "#243757",
              fontSize: 18,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontFamily: "PlusJakartaSansRegular",
              textAlign: "center",
              color: "#243757",
              marginTop: 6,
            }}
          >
            {content}
          </Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={onPress}
              style={{
                backgroundColor: "#F15922",
                height: 38,
                width: 114,
                borderRadius: 100,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 12,
                  fontFamily: "PlusJakartaSansRegular",
                }}
              >
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlertComponent;
