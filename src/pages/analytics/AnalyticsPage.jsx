import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const AnalyticsPage = () => {
  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Visualize your internship application performance."
      />
      <Card>
        <p className="text-[var(--color-muted)]">
          Charts and analytics dashboard will be built in the next phase.
        </p>
      </Card>
    </div>
  );
};

export default AnalyticsPage;