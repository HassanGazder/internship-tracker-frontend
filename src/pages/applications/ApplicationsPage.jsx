import PageHeader from "../../components/ui/PageHeader";
import EmptyState from "../../components/feedback/EmptyState";

const ApplicationsPage = () => {
  return (
    <div>
      <PageHeader
        title="Applications"
        subtitle="View and manage all your internship applications."
      />
      <EmptyState
        title="No applications yet"
        description="Once you start adding applications, they will appear here."
      />
    </div>
  );
};

export default ApplicationsPage;