export const exportApplicationsToCSV = (applications, fileName = "applications") => {
  if (!applications || applications.length === 0) return;

  const headers = [
    "Company Name",
    "Job Title",
    "Location",
    "Application Date",
    "Deadline",
    "Status",
    "Salary",
    "Notes",
    "Job Post Link",
  ];

  const rows = applications.map((app) => [
    app.companyName || "",
    app.jobTitle || "",
    app.location || "",
    app.applicationDate ? new Date(app.applicationDate).toLocaleDateString() : "",
    app.deadline ? new Date(app.deadline).toLocaleDateString() : "",
    app.status || "",
    app.salary || "",
    app.notes || "",
    app.jobPostLink || "",
  ]);

  const csvContent =
    [headers, ...rows]
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};