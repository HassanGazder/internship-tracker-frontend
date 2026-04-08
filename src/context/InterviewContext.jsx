import { useEffect, useState } from "react";
import {
  getInterviews,
  createInterview,
  updateInterview,
  deleteInterview,
} from "../services/interviewServices";
import { InterviewContext } from "./InterviewContextObject";
import { useAuth } from "./useAuthContext";

export const InterviewProvider = ({ children }) => {
  const { user } = useAuth();
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInterviews = async () => {
    try {
      setLoading(true);
      const data = await getInterviews();
      setInterviews(data);
    } catch (error) {
      console.error("Error fetching interviews:", error);
      setInterviews([]);
    } finally {
      setLoading(false);
    }
  };

  const addInterview = async (formData) => {
    try {
      const newInterview = await createInterview(formData);
      setInterviews((prev) => [newInterview, ...prev]);
      return { success: true };
    } catch (error) {
      console.error("Error adding interview:", error);
      return {
        success: false,
        message: error?.response?.data?.message || "Failed to add interview",
      };
    }
  };

  const editInterview = async (id, formData) => {
    try {
      const updated = await updateInterview(id, formData);
      setInterviews((prev) =>
        prev.map((item) => (item._id === id ? updated : item))
      );
      return { success: true };
    } catch (error) {
      console.error("Error updating interview:", error);
      return {
        success: false,
        message: error?.response?.data?.message || "Failed to update interview",
      };
    }
  };

  const removeInterview = async (id) => {
    try {
      await deleteInterview(id);
      setInterviews((prev) => prev.filter((item) => item._id !== id));
      return { success: true };
    } catch (error) {
      console.error("Error deleting interview:", error);
      return {
        success: false,
        message: error?.response?.data?.message || "Failed to delete interview",
      };
    }
  };

  useEffect(() => {
    if (!user?._id) {
      setInterviews([]);
      setLoading(false);
      return;
    }

    fetchInterviews();
  }, [user?._id]);

  return (
    <InterviewContext.Provider
      value={{
        interviews,
        loading,
        fetchInterviews,
        addInterview,
        editInterview,
        removeInterview,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};