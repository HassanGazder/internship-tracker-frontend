const DeleteApplicationDialog = ({ application, onClose, onConfirm }) => {
  if (!application) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-slate-900">Delete Application</h2>
        <p className="mt-2 text-slate-600">
          Are you sure you want to delete your application for{" "}
          <span className="font-semibold">{application.jobTitle}</span> at{" "}
          <span className="font-semibold">{application.companyName}</span>?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(application._id)}
            className="rounded-2xl bg-rose-600 px-5 py-3 font-semibold text-white hover:bg-rose-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteApplicationDialog;