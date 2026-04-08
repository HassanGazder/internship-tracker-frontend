import { useEffect, useState } from "react";
import api from "../lib/axios";
import { ApplicationsContext } from "./ApplicationsContext";

export const ApplicationsProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all applications
  const fetchApplications = async () => {
    try {
      setLoading(true);
      const res = await api.get("/applications");
      // Normalize backend response shape so UI always receives an array
      const normalized = Array.isArray(res.data)
        ? res.data
        : Array.isArray(res.data?.applications)
          ? res.data.applications
          : [];
      setApplications(normalized);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add new application
  const addApplication = async (applicationData) => {
    try {
      const res = await api.post("/applications", applicationData);
      const created = res.data?.application ?? res.data;
      setApplications((prev) => [created, ...prev]);
      return { success: true };
    } catch (error) {
      console.error("Error adding application:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to add application",
      };
    }
  };

  // Update application
  const updateApplication = async (id, updatedData) => {
    try {
      const res = await api.put(`/applications/${id}`, updatedData);
      const updated = res.data?.application ?? res.data;
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? updated : app))
      );
      return { success: true };
    } catch (error) {
      console.error("Error updating application:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to update application",
      };
    }
  };

  // Delete application
  const deleteApplication = async (id) => {
    try {
      await api.delete(`/applications/${id}`);
      setApplications((prev) => prev.filter((app) => app._id !== id));
      return { success: true };
    } catch (error) {
      console.error("Error deleting application:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Failed to delete application",
      };
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchApplications();
    }
  }, []);

  return (
    <ApplicationsContext.Provider
      value={{
        applications,
        loading,
        fetchApplications,
        addApplication,
        updateApplication,
        deleteApplication,
        // Backward-compatible aliases used in some pages
        editApplication: updateApplication,
        removeApplication: deleteApplication,
      }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};