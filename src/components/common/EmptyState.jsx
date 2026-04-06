const EmptyState = ({ title, description }) => {
  return (
    <div className="text-center py-12 border border-dashed border-white/10 rounded-3xl bg-white/5">
      <h4 className="text-white text-lg font-semibold">{title}</h4>
      <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;