import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";
import { loginUser } from "../../services/authservice";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await loginUser(formData);

      login(data.user, data.token);

      toast.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to manage your internship applications."
    >
      <AuthCard>
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 text-white py-3 rounded-2xl font-semibold shadow-lg"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-slate-300 mt-6 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Sign Up
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;