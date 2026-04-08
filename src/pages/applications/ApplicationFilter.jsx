const ApplicationFilters = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <input
        type="text"
        placeholder="Search by company or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none"
      >
        <option value="All">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="deadline">Deadline</option>
      </select>
    </div>
  );
};

export default ApplicationFilters;