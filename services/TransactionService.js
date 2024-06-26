import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "./apiConfig";

export const createNewTransaction = async (
  accountNumberSource,
  accountNumberDestination,
  amount,
  note,
  password
) => {
  try {
    const response = await axios.post(
      `${API_URL}/transaction`,
      {
        account_number_source: accountNumberSource,
        account_number_destination: accountNumberDestination,
        amount: amount,
        note: note,
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw error;
    }
    console.error("Error fetching transaction data:", error);
    return null;
  }
};

export const validateTransaction = async (
  accountNumberSource,
  accountNumberDestination,
  amount,
  note,
  favouriteName,
  isFavourite
) => {
  try {
    const response = await axios.post(
      `${API_URL}/transaction/validate`,
      {
        account_number_source: accountNumberSource,
        account_number_destination: accountNumberDestination,
        amount: amount,
        note: note,
        name: favouriteName,
        is_favourite: isFavourite,
      },
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
};

export const getTransactionHistory = async (accountNumber) => {
  try {
    const response = await axios.get(
      `${API_URL}/transaction/account/${accountNumber}`,
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
};

export const getTransactionById = async (transactionId) => {
  try {
    const response = await axios.get(
      `${API_URL}/transaction/${transactionId}`,
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
};
