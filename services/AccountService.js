import axios from 'axios';

const getAccountData = async () => {
  try {


    const response = await axios.get(`${process.env.API_URL}/accounts/me`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return null;
  }
};

export default getAccountData;
