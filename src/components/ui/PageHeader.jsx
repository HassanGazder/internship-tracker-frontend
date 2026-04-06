const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="text-[var(--color-muted)] mt-2">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;