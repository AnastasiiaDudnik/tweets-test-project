import axios from "axios";

axios.defaults.baseURL = "https://64455cc4914c816083cd1353.mockapi.io/tweets";

export const getUser = async () => {
  const pagination = "limit=3&page=1";

  try {
    return await axios.get(`/users?${pagination}`);
  } catch (error) {}
};
