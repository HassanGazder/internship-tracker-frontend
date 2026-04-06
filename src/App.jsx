import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Temporary Placeholder Routes */}
      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-950 text-white p-10">
              Applications Page Coming Next...
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/interviews"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-950 text-white p-10">
              Interview Reflections Page Coming Next...
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-950 text-white p-10">
              Analytics Page Coming Next...
            </div>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-slate-950 text-white p-10">
              Profile Page Coming Next...
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;