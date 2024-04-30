import axios from 'axios';

export const createNewTransaction = async ( accountNumberSource, accountNumberDestination, amount, note) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/transaction`, 
    {
        account_number_source: accountNumberSource,
        account_number_destination: accountNumberDestination,
        amount: amount,
        note : note
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    return null;
  }
};
