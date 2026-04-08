import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import ProfileCard from "../../pages/profile/ProfileCard";
import { useAuth } from "../../context/useAuthContext";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <PageHeader
        title="Profile"
        subtitle="Your student account and personal details."
      />

      <ProfileCard user={user} />
    </DashboardLayout>
  );
};

export default ProfilePage;