import axios from 'axios';
import {API_URL} from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getFavouriteData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.API_URL}/favourites`, {
//           headers: {
//             Authorization: `Bearer ${process.env.API_TOKEN}`
//           }
//         }
//       );
//       const responseData = response.data.data;
//       const formattedData = responseData.map((item) => ({
//         label: item.favourite_name,
//         value: item.favourite_id.toString(),
//         accountNumber: item.favourite_account_number,
//       }));
//       return formattedData;
//       // setSelectedAccountId(formattedData[0].value);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };


const getFavouriteData = async () => {
  try {
    const response = await axios.get(`${API_URL}/favourites`, {
      headers: {
        Authorization: `Bearer ${await AsyncStorage.getItem("token")}`
      }
    });
    const responseData = response.data.data;
    const formattedData = responseData.map((item) => ({
      label: item.favourite_name,
      value: item.favourite_id.toString(),
      accountNumber: item.favourite_account_number,
    }));
    return formattedData;
  } catch (error) {
    console.error("Error fetching favorite data:", error);
    return []; // or handle the error in another way
  }
};
export default getFavouriteData;
