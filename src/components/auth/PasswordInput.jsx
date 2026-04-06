import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label, name, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 pr-12 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;