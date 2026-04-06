const SectionCard = ({ title, subtitle, action, children }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>

      {children}
    </div>
  );
};

export default SectionCard;