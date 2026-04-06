const statusStyles = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-amber-100 text-amber-700",
  Offer: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-rose-100 text-rose-700",
};

const StatusBadge = ({ status }) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;