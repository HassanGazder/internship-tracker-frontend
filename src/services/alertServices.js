import api from "./api";

export const getDeadlineAlerts = async () => {
  const response = await api.get("/alerts/deadlines");
  return response.data;
};
