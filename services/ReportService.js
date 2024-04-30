import axios from 'axios';

export const checkAccountNumberReportStatus = async (accountNumber) => {
  try {

    const response = await axios.get(`${process.env.API_URL}/reportedAcc/cekrekening/${accountNumber}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    });
    return response.data.status;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return null;
  }
};

export const checkAccountNumberReport = async (accountNumber) => {
    try {
  
      const response = await axios.get(`${process.env.API_URL}/reportedAcc/cekrekening/${accountNumber}`, {
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
