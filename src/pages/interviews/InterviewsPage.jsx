import DashboardLayout from "../../components/layout/DashboardLayout";

function InterviewsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Interview Reflections</h1>
        <p className="text-slate-400">
          This page will show your interview notes, questions asked, feedback, and self-reflections.
        </p>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
          <p className="text-slate-300">Interview module connected next.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default InterviewsPage;