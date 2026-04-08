import { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";
import ApplicationFilters from "../../pages/applications/ApplicationFilter";
import ApplicationsTable from "../../pages/applications/ApplicationsTable";
import ApplicationFormModal from "../../pages/applications/ApplicationFormModal";
import { useApplications } from "../../context/useApplicationsContext";
import { Plus } from "lucide-react";

const ApplicationsPage = () => {
  const {
    applications = [],
    loading,
    addApplication,
    editApplication,
    removeApplication,
  } = useApplications();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const filteredApplications = useMemo(() => {
    let filtered = [...applications];

    if (search) {
      filtered = filtered.filter(
        (app) =>
          app.companyName?.toLowerCase().includes(search.toLowerCase()) ||
          app.jobTitle?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "deadline") {
      filtered.sort((a, b) => new Date(a.deadline || 0) - new Date(b.deadline || 0));
    }

    return filtered;
  }, [applications, search, statusFilter, sortBy]);

  const handleAddOrEdit = async (formData) => {
    if (editData) {
      await editApplication(editData._id, formData);
      setEditData(null);
    } else {
      await addApplication(formData);
    }
  };

  const handleEdit = (app) => {
    setEditData(app);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this application?");
    if (confirmDelete) {
      await removeApplication(id);
    }
  };

  return (
    <DashboardLayout>
      <PageHeader
        title="Applications"
        subtitle="Track, manage, and organize your internship applications."
        action={
          <button
            onClick={() => {
              setEditData(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            <Plus size={18} />
            Add Application
          </button>
        }
      />

      <ApplicationFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {loading ? (
        <Loader />
      ) : filteredApplications.length === 0 ? (
        <EmptyState
          title="No applications found"
          description="Start by adding your first internship application."
        />
      ) : (
        <ApplicationsTable
          applications={filteredApplications}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <ApplicationFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditData(null);
        }}
        onSubmit={handleAddOrEdit}
        editData={editData}
      />
    </DashboardLayout>
  );
};

export default ApplicationsPage;