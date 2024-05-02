import axios from "axios";
import { API_URL, USER_ID } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccountData = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }

    const response = await axios.get(
      `https://unboxit.50soa.my.id/api/users/accountNumber/2`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return response.data.data;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};
