const LoadingSpinner = ({ text = "Loading..." }) => {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-slate-300">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400"></div>
        <p className="text-sm tracking-wide text-slate-400">{text}</p>
      </div>
    );
  };
  
  export default LoadingSpinner;