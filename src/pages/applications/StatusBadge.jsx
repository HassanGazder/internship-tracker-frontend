const statusStyles = {
  Applied: "bg-blue-500/15 text-blue-300 border-blue-400/20",
  Interview: "bg-yellow-500/15 text-yellow-300 border-yellow-400/20",
  Offer: "bg-green-500/15 text-green-300 border-green-400/20",
  Rejected: "bg-red-500/15 text-red-300 border-red-400/20",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-slate-500/15 text-slate-300 border-slate-400/20"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;