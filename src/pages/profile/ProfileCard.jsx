const ProfileCard = ({ user }) => {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-2xl font-bold text-slate-950">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{user?.name || "User"}</h2>
            <p className="text-slate-400">{user?.email || "No email found"}</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Full Name</p>
            <p className="mt-1 text-white">{user?.name || "-"}</p>
          </div>
  
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Email Address</p>
            <p className="mt-1 text-white">{user?.email || "-"}</p>
          </div>
  
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">University</p>
            <p className="mt-1 text-white">{user?.university || "Not added yet"}</p>
          </div>
  
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-400">Member Since</p>
            <p className="mt-1 text-white">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;