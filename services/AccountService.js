import axios from 'axios';
import {API_URL} from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccountData = async () => {
  try {
    const response = await axios.get(`${API_URL}/accounts/me`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
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
//         Authorization: `Bearer ${process.env.await AsyncStorage.getItem("token")}`
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
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
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