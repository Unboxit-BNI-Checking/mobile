import axios from 'axios';
import { API_URL } from "@env"

export const userLogin = async (username, mPin) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`,
            {
                username: username,
                mpin: mPin,
            }
        );
        return response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw error
        }

        console.error('Something has exploded:', error);
        return null
    }
};