const EmptyState = ({ title, description }) => {
  return (
    <div className="bg-white rounded-2xl border border-dashed border-[var(--color-border)] p-10 text-center">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-[var(--color-muted)] mt-2">{description}</p>
    </div>
  );
};

export default EmptyState;