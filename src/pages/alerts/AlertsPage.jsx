import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const AlertsPage = () => {
  return (
    <div>
      <PageHeader
        title="Deadline Alerts"
        subtitle="Keep track of upcoming deadlines and reminders."
      />
      <Card>
        <p className="text-[var(--color-muted)]">
          Smart alerts UI will be built in a later phase.
        </p>
      </Card>
    </div>
  );
};

export default AlertsPage;