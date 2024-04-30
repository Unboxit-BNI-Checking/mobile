import axios from 'axios';

const getFavouriteData = async () => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/favourites`, {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`
          }
        }
      );
      const responseData = response.data.data;
      const formattedData = responseData.map((item) => ({
        label: item.favourite_name,
        value: item.favourite_id.toString(),
        accountNumber: item.favourite_account_number,
      }));
      return formattedData;
      // setSelectedAccountId(formattedData[0].value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

export default getFavouriteData;
