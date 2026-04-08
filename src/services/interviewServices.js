import api from "./api";

export const getInterviews = async () => {
  const res = await api.get("/interviews");
  return res.data;
};

export const createInterview = async (data) => {
  const res = await api.post("/interviews", data);
  return res.data;
};

export const updateInterview = async (id, data) => {
  const res = await api.put(`/interviews/${id}`, data);
  return res.data;
};

export const deleteInterview = async (id) => {
  const res = await api.delete(`/interviews/${id}`);
  return res.data;
};