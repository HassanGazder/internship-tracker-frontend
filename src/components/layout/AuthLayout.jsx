import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-4">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.3),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.25),_transparent_30%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-slate-300 mt-2">{subtitle}</p>
        </div>

        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;