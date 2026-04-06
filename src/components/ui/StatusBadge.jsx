const statusColors = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-yellow-100 text-yellow-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const StatusBadge = ({ status = "Applied" }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
        statusColors[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;