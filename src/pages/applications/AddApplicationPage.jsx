import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const AddApplicationPage = () => {
  return (
    <div>
      <PageHeader
        title="Add Application"
        subtitle="Create a new internship application record."
      />
      <Card>
        <p className="text-[var(--color-muted)]">
          Application form UI will be built in Phase 2.
        </p>
      </Card>
    </div>
  );
};

export default AddApplicationPage;