import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API_URL from "./apiConfig";

export const getAccountData = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      throw new Error("Token not found");
    }

    const response = await axios.get(
      `${API_URL}/users/accountNumber/2`,
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
