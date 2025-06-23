import axios from "axios";

let accessToken = "";

export const setAccessToken = (token) => {
  accessToken = token;
};

export const Log = async (stack, level, pkg, message) => {
  const payload = {
    stack,     // "frontend"
    level,     // "info", "debug", "error", "warn"
    package: pkg, // "controller", "service", etc.
    message
  };

  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      payload,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    console.log(" Log sent:", response.status);
  } catch (error) {
    console.error(" Log failed:", error.response?.data || error.message);
  }
};
