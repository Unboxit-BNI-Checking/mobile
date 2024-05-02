import axios from "axios";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkAccountNumberReportStatus = async (accountNumber) => {
  try {
    const response = await axios.get(
      `${API_URL}/reportedAcc/cekrekening/${accountNumber}`,
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data.status;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};

export const checkAccountNumberReport = async (accountNumber) => {
  try {
    const response = await axios.get(
      `${API_URL}/reportedAcc/cekrekening/${accountNumber}`,
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};

export const createNewReport = async (transactionId, chronology, files) => {
  const formData = new FormData();
  formData.append("transaction_id", transactionId);
  formData.append("chronology", chronology);
  files.forEach(file => {
    formData.append('file', file);
  });

  try {
    const response = await axios.post(`${API_URL}/reports`, formData, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};
