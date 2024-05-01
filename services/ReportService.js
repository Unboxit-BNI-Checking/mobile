import axios from "axios";
import {API_URL, API_TOKEN} from "@env"
export const checkAccountNumberReportStatus = async (accountNumber) => {
  try {
    const response = await axios.get(
      `${API_URL}/reportedAcc/cekrekening/${accountNumber}`,
      {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
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
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching account data:", error);
    return null;
  }
};
