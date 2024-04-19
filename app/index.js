import { View, SafeAreaView, ScrollView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import icons from "../constants/icons";
import MenuComponent from "../component/home/MenuComponent";
import RekeningComponent from "../component/home/RekeningComponent";
import PromotionComponent from "../component/home/PromotionComponent";
import ScreenHeaderBtn from "../component/common/header/ScreenHeaderBtn";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
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
      />
      <ScrollView showsVerticalScrollIndicator={true}>
        {/* <View style={{ flex: 1, padding: SIZES.medium }}>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </View> */}

        <View>
          <RekeningComponent />
          <MenuComponent />
          <PromotionComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
