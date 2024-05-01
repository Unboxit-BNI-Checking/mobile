import axios from 'axios';
import {API_URL, API_TOKEN} from "@env"

export const createNewTransaction = async ( accountNumberSource, accountNumberDestination, amount, note) => {
  try {
    const response = await axios.post(`${API_URL}/transaction`, 
    {
        account_number_source: accountNumberSource,
        account_number_destination: accountNumberDestination,
        amount: amount,
        note : note
    },
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    return null;
  }
};

export const validateTransaction = async ( accountNumberSource, accountNumberDestination, amount, note) => {
  try {
    const response = await axios.post(`${API_URL}/transaction/validate`, 
    {
        account_number_source: accountNumberSource,
        account_number_destination: accountNumberDestination,
        amount: amount,
        note : note
    },
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    return null;
  }
};
