import axiosInstance from "./axiosInstance";
import { API_PATH } from "./apiPaths";

const getUser = async () => {
  try {
    const response = await axiosInstance.get(API_PATH.AUTH.GET_USER_INFO);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};

export default getUser;