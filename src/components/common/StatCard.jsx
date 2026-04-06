const StatCard = ({ title, value, subtitle, gradient, icon: Icon }) => {
  return (
    <div
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-xl"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <h3 className="text-3xl font-bold text-white mt-2">{value}</h3>
          <p className="text-slate-400 text-sm mt-2">{subtitle}</p>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${gradient}`}
        >
          <Icon className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;