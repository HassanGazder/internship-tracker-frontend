import { useMemo, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useInterviews } from "../../context/useInterviewsContext";
import InterviewCard from "./InterviewCard";
import InterviewFormModal from "./InterviewFormModal";
import InterviewEmptyState from "./InterviewEmtpyState";
import { Plus, MessageSquareQuote, Star, TrendingUp } from "lucide-react";

const InterviewsPage = () => {
  const {
    interviews,
    loading,
    addInterview,
    editInterview,
    removeInterview,
  } = useInterviews();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInterview, setEditingInterview] = useState(null);

  const averageRating = useMemo(() => {
    if (!interviews.length) return 0;
    const total = interviews.reduce((sum, item) => sum + Number(item.rating || 0), 0);
    return (total / interviews.length).toFixed(1);
  }, [interviews]);

  const improvementCount = useMemo(() => {
    return interviews.filter((i) => i.improvements?.trim()).length;
  }, [interviews]);

  const handleCreate = async (formData) => {
    const result = await addInterview(formData);
    if (result.success) {
      setIsModalOpen(false);
    } else {
      alert(result.message);
    }
  };

  const handleUpdate = async (formData) => {
    const result = await editInterview(editingInterview._id, formData);
    if (result.success) {
      setEditingInterview(null);
      setIsModalOpen(false);
    } else {
      alert(result.message);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this interview reflection?");
    if (!confirmDelete) return;

    const result = await removeInterview(id);
    if (!result.success) {
      alert(result.message);
    }
  };

  const openAddModal = () => {
    setEditingInterview(null);
    setIsModalOpen(true);
  };

  const openEditModal = (interview) => {
    setEditingInterview(interview);
    setIsModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
              Interview Reflections
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white">
              Learn From Every Interview
            </h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              Track what happened, what you answered well, and where you need
              improvement to become more confident over time.
            </p>
          </div>

          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-500"
          >
            <Plus className="h-4 w-4" />
            Add Reflection
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Total Reflections</p>
              <MessageSquareQuote className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="mt-4 text-4xl font-black text-white">{interviews.length}</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Average Confidence</p>
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <h3 className="mt-4 text-4xl font-black text-white">{averageRating}/10</h3>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Improvement Entries</p>
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-4xl font-black text-white">{improvementCount}</h3>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-slate-300">
            Loading interview reflections...
          </div>
        ) : interviews.length === 0 ? (
          <InterviewEmptyState onAdd={openAddModal} />
        ) : (
          <div className="grid gap-6">
            {interviews.map((interview) => (
              <InterviewCard
                key={interview._id}
                interview={interview}
                onEdit={openEditModal}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <InterviewFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingInterview(null);
          }}
          onSubmit={editingInterview ? handleUpdate : handleCreate}
          initialData={editingInterview}
        />
      </div>
    </DashboardLayout>
  );
};

export default InterviewsPage;