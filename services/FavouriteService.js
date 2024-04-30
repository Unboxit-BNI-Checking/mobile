import axios from 'axios';

const getFavouriteData = async () => {
  try {

    const response = await axios.get(`${process.env.API_URL}/favourites/1`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching account data:', error);
    return null;
  }
};

export default getFavouriteData;
