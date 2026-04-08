import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";

const InterviewsPage = () => {
  return (
    <DashboardLayout>
      <PageHeader
        title="Interview Reflections"
        subtitle="Track your interview experiences and improve over time."
      />

      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-slate-300">
        <h2 className="mb-4 text-2xl font-bold text-white">Coming in Next Phase</h2>
        <p>
          This section will let students save interview reflections like:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-400">
          <li>Questions asked in interview</li>
          <li>What went well</li>
          <li>What needs improvement</li>
          <li>Confidence rating</li>
          <li>Interview preparation notes</li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default InterviewsPage;