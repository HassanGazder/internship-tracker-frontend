import PageHeader from "../../components/ui/PageHeader";
import Card from "../../components/ui/Card";

const ProfilePage = () => {
  return (
    <div>
      <PageHeader
        title="Profile"
        subtitle="Manage your student profile and preferences."
      />
      <Card>
        <p className="text-[var(--color-muted)]">
          Profile settings UI will be built in the next phase.
        </p>
      </Card>
    </div>
  );
};

export default ProfilePage;