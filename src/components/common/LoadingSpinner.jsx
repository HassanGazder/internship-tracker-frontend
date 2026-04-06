const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-indigo-600"></div>
    </div>
  );
};

export default LoadingSpinner;