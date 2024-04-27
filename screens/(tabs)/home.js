import { View, ScrollView, Image, StatusBar } from "react-native";
import MenuComponent from "../../component/home/MenuComponent";
import RekeningComponent from "../../component/home/RekeningComponent";
import PromotionComponent from "../../component/home/PromotionComponent";
import CustomAppBar from "../../component/common/header/CustomAppBar";
import icons from "../../constants/icons";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <RekeningComponent />
          <MenuComponent />
          <PromotionComponent />
        </View>
      </ScrollView>
    </View>
  );
}
