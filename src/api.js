import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const fetchApplications = async () => {
  const response = await axios.get(`${BASE_URL}/applications`);
  return response.data;
};
