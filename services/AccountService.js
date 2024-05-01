import axios from "axios";
import { API_URL, USER_ID } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccountData = async () => {
  try {
    const response = await axios.get(`${API_URL}/accounts/me`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};
