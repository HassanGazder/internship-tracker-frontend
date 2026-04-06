import { useEffect, useState } from "react";
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../services/ApplicationServices";

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getApplications();
      setApplications(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  const addApplication = async (formData) => {
    const newApp = await createApplication(formData);
    setApplications((prev) => [newApp, ...prev]);
  };

  const editApplication = async (id, formData) => {
    const updated = await updateApplication(id, formData);
    setApplications((prev) =>
      prev.map((app) => (app._id === id ? updated : app))
    );
  };

  const removeApplication = async (id) => {
    await deleteApplication(id);
    setApplications((prev) => prev.filter((app) => app._id !== id));
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return {
    applications,
    loading,
    error,
    fetchApplications,
    addApplication,
    editApplication,
    removeApplication,
  };
};