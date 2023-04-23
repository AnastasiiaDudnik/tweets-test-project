import axios from "axios";

axios.defaults.baseURL = "https://64455cc4914c816083cd1353.mockapi.io/tweets";

export const getUser = async () => {
  try {
    return await axios.get("/users");
  } catch (error) {}
};
