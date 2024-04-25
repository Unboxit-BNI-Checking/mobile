  
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View, Platform, Image } from "react-native";
import icons from "../../constants/icons";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          background: "#fff",
        },
      }}
      tabBarStyle={{
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: {
            fontFamily: "PlusJakartaSansMedium",
            fontSize: 12,
            textTransform: "none",
          },
          tabBarActiveTintColor: "#F37548",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Foundation
                  name="home"
                  size={24}
                  color={focused ? "#F37548" : "#B3B9C4"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="riwayat"
        options={{
          title: "Riwayat",
          tabBarLabelStyle: {
            fontFamily: "PlusJakartaSansMedium",
            fontSize: 12,
            textTransform: "none",
          },
          tabBarActiveTintColor: "#F37548",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons
                  name="library-books"
                  size={24}
                  color={focused ? "#F37548" : "#B3B9C4"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="qris"
        options={{
          title: "",
          tabBarLabelStyle: {
            fontFamily: "PlusJakartaSansMedium",
            fontSize: 12,
            textTransform: "none",
            marginBottom: 8,
          },
          tabBarActiveTintColor: "#F37548",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: Platform.OS === "ios" ? 50 : 60,
                  height: Platform.OS === "ios" ? 50 : 60,
                  borderRadius: Platform.OS === "ios" ? 25 : 30,
                  backgroundColor: focused ? "#F37548" : "#fff",
                  top: Platform.OS === "ios" ? 5 : -20,
                }}
              >
                <Image
                  source={icons.icQris}
                  style={{ width: 70, height: 70 }}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          tabBarLabelStyle: {
            fontFamily: "PlusJakartaSansMedium",
            fontSize: 12,
            textTransform: "none",
          },
          tabBarActiveTintColor: "#F37548",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Octicons
                  name="star-fill"
                  size={24}
                  color={focused ? "#F37548" : "#B3B9C4"}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="pengaturan"
        options={{
          title: "Pengaturan",
          tabBarLabelStyle: {
            fontFamily: "PlusJakartaSansMedium",
            fontSize: 12,
            textTransform: "none",
          },
          tabBarActiveTintColor: "#F37548",
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <FontAwesome6
                  name="gear"
                  size={22}
                  color={focused ? "#F37548" : "#B3B9C4"}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
