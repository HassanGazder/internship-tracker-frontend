import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import InputField from "../../components/auth/InputField";
import PasswordInput from "../../components/auth/PasswordInput";
import { registerUser } from "../../services/authservice";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    university: "",
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
      await registerUser(formData);
      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Start tracking your internship journey smarter."
    >
      <AuthCard>
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <InputField
            label="University"
            name="university"
            value={formData.university}
            onChange={handleChange}
            placeholder="Enter your university"
          />

          <PasswordInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 text-white py-3 rounded-2xl font-semibold shadow-lg"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-slate-300 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default RegisterPage;