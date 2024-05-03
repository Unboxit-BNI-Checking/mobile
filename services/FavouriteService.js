import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "./apiConfig";

const getFavouriteData = async () => {
  try {
    const response = await axios.get(`${API_URL}/favourites/user_id`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
    });
    const responseData = response.data;
    const formattedData = responseData.map((item) => ({
      label: item.favourite_name,
      value: item.favourite_id.toString(),
      accountNumber: item.favourite_account_number,
    }));
    return formattedData;
  } catch (error) {
    console.error("Error fetching favorite data:", error);
    return []; // or handle the error in another way
  }
};
export default getFavouriteData;
