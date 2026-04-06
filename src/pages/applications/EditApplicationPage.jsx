import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const EditApplicationPage = () => {
  return (
    <div>
      <PageHeader
        title="Edit Application"
        subtitle="Update your internship application details."
      />
      <Card>
        <p className="text-[var(--color-muted)]">
          Edit form will be built in the next phase.
        </p>
      </Card>
    </div>
  );
};

export default EditApplicationPage;