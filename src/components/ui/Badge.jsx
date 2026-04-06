const Badge = ({ children, className = "" }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;