import { View, SafeAreaView, ScrollView, Image, StatusBar } from "react-native";
import MenuComponent from "../../component/home/MenuComponent";
import RekeningComponent from "../../component/home/RekeningComponent";
import PromotionComponent from "../../component/home/PromotionComponent";
import ScreenHeaderBtn from "../../component/common/header/ScreenHeaderBtn";
import icons from "../../constants/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <ScreenStack
        options={{
          headerStyle: { backgroundColor: "#F37548" },
          headerShadowVisible: false,
         
          headerLeft: () => (
           <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 18 }}>
             <Image
              source={icons.icBni}
              style={{ width: 80, height: 50 }}
              resizeMode="contain"
            />
           </View>
          ),

          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 18 }}>
              <ScreenHeaderBtn
                iconUrl={icons.icNotification}
                dimension={24}
              
                handlePress={() => {}}
              />
              <ScreenHeaderBtn
                iconUrl={icons.icListen}
                dimension={38}
                handlePress={() => {}}
              />
            </View>
          ),

          headerTitle: "",
        }}
      /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <RekeningComponent />
          <MenuComponent />
          <PromotionComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
