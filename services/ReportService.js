import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL, TOKEN } from "./apiConfig";

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
  formData.append("transactionId", transactionId);
  formData.append("chronology", chronology);
  if (files != null) {    
    files.forEach((file) => {
      formData.append("files", {
        uri: file.uri,
        type: file.mimeType,
        name: file.fileName
      });
    });
  }

  try {
    const response = await axios.post(`${API_URL}/reports`, formData, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        'Content-Type': 'multipart/form-data'
      },
    });
    return response.data.success;
  } catch (error) {
    console.error(error)
    if (error.response) {
      console.log("error data: ", error.response.data)
    } 
    return null;
  }
};

export const getAllReportsMadeByCurrentUser = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/reports/me`,
      {
        headers: {
          Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};
