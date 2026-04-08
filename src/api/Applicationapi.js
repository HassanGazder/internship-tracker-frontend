import axiosInstance from "../lib/axios";

export const getApplications = async () => {
  const response = await axiosInstance.get("/applications");
  return response.data;
};

export const createApplication = async (applicationData) => {
  const response = await axiosInstance.post("/applications", applicationData);
  return response.data;
};

export const updateApplication = async (id, applicationData) => {
  const response = await axiosInstance.put(`/applications/${id}`, applicationData);
  return response.data;
};

export const deleteApplication = async (id) => {
  const response = await axiosInstance.delete(`/applications/${id}`);
  return response.data;
};