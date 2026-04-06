const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`w-full bg-[var(--color-primary)] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;