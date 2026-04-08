const EmptyState = ({ title, description }) => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-center">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-400">{description}</p>
    </div>
  );
};

export default EmptyState;