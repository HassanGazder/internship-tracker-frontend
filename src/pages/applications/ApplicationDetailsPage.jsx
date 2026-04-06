import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const ApplicationDetailsPage = () => {
  return (
    <div>
      <PageHeader
        title="Application Details"
        subtitle="Detailed view of one internship application."
      />
      <Card>
        <p className="text-[var(--color-muted)]">
          Full details view will be built in the next phase.
        </p>
      </Card>
    </div>
  );
};

export default ApplicationDetailsPage;