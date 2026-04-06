const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md border border-[var(--color-border)] p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;