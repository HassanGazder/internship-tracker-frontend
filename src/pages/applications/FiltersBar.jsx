import { Search } from "lucide-react";
import { ApplicationStatuses } from "../../data/ApplicationStatuses";

const FiltersBar = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="mb-6 grid gap-4 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm md:grid-cols-3">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          placeholder="Search by company or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
        />
      </div>

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
      >
        <option value="">All Statuses</option>
        {ApplicationStatuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="deadline">Deadline</option>
        <option value="company">Company Name</option>
      </select>
    </div>
  );
};

export default FiltersBar;