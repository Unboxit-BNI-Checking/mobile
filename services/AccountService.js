import axios from 'axios';
import {API_URL, API_TOKEN} from "@env"

export const getAccountData = async () => {
  try {
    const response = await axios.get(`${API_URL}/accounts/me`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return null;
  }
};

// export const getAccountsData = async () => {
//   try {
//     const response = await axios.get(`${process.env.API_URL}/accounts`, {
//       headers: {
//         Authorization: `Bearer ${process.env.API_TOKEN}`
//       }
//     });
    
//     const formattedData = response.data.data.map((item) => ({
//       label: item.account_number,
//       value: item.account_number,
//       balance: item.balance
//     }));
    
//     return formattedData;
//   } catch (error) {
//     console.error('Error fetching account data:', error);
//     return null;
//   }
// };

export const getAccountsData = async () => {
  try {
    const response = await axios.get(`${API_URL}/accounts`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });
    
    const formattedData = response.data.data.map((item) => ({
      label: item.account_number,
      value: item.account_number,
      balance: item.balance
    }));
    
    return formattedData;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return []; // or handle the error in another way
  }
};