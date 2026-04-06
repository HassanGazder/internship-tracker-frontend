const InputField = ({ label, type = "text", name, value, onChange, placeholder }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default InputField;