import { View, Platform, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Riwayat from "./riwayat";
import Qris from "./qris";
import Favorite from "./favorite";
import Pengaturan from "./pengaturan";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import icons from "../../constants/icons";
import { FontAwesome6 } from "@expo/vector-icons";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        })}
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
      <Tab.Screen
        name="Qris"
        component={Qris}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        })}
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

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        })}
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
      <Tab.Screen
        name="Pengaturan"
        component={Pengaturan}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
          },
        })}
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
    </Tab.Navigator>
  );
};

export default Tabs;
