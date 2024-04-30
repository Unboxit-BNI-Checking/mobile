import axios from 'axios';

const getAccountData = async () => {
  try {
    const response = await axios.get('http://192.168.178.104:8080/api/accounts/me');
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return null;
  }
};

export default getAccountData;
