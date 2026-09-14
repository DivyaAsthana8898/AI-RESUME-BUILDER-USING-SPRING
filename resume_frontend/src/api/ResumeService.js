import axios from "axios";

export const baseURL = "https://ai-resume-builder-using-spring.onrender.com";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

export const generateResume = async (description) => {
  const response = await axiosInstance.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};
