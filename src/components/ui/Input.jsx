const Input = ({ label, ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        {...props}
      />
    </div>
  );
};

export default Input;