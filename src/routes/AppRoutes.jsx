import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ApplicationsPage from "../pages/applications/ApplicationsPage";
import AddApplicationPage from "../pages/applications/AddApplicationPage";
import ApplicationDetailsPage from "../pages/applications/ApplicationDetailsPage";
import EditApplicationPage from "../pages/applications/EditApplicationPage";
import InterviewsPage from "../pages/interviews/InterviewsPage";
import AnalyticsPage from "../pages/analytics/AnalyticsPage";
import AlertsPage from "../pages/alerts/AlertsPage";
import ProfilePage from "../pages/profile/ProfilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route
        path="/login"
        element={
          <PublicRoute>
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <AuthLayout>
              <RegisterPage />
            </AuthLayout>
          </PublicRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ApplicationsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications/new"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AddApplicationPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications/:id"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ApplicationDetailsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications/:id/edit"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <EditApplicationPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <InterviewsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AnalyticsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/alerts"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <AlertsPage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <ProfilePage />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;