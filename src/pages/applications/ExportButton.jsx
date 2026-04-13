import { Download } from "lucide-react";

const ExportButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition"
    >
      <Download size={16} />
      Export CSV
    </button>
  );
};

export default ExportButton;