export const getDaysLeft = (deadline) => {
  if (!deadline) return null;

  const today = new Date();
  const dueDate = new Date(deadline);

  const diffTime = dueDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export const getStatusCount = (applications, status) => {
  return applications.filter((app) => app.status === status).length;
};