import axios from "axios";

axios.defaults.baseURL = "https://64455cc4914c816083cd1353.mockapi.io/tweets";

export const getUser = async (page) => {
  try {
    return await axios.get(`/users?limit=3&page=${page}`);
  } catch (error) {}
};
