import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, TOKEN } from "./apiConfig";

export const userLogin = async (username, mPin) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      username: username,
      mpin: mPin,
    });
    return response.data.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw error;
    }

    console.error("Something has exploded:", error);
    return null;
  }
};

export const getUserAccountNumbersData = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/accountNumber`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
    });

    const formattedData = response.data.data.account.map((item) => ({
      label: item.account_number,
      value: item.account_number,
      balance: item.balance,
    }));

    return formattedData;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return []; // or handle the error in another way
  }
};
