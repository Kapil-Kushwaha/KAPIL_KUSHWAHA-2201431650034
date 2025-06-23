import axios from "axios";

export const getToken = async (clientId, clientSecret) => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/auth", {
      clientId,
      clientSecret
    });
    return response.data.access_token;
  } catch (error) {
    console.error(" Token fetch failed:", error.response?.data || error.message);
  }
};
