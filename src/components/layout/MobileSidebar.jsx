import { X, GraduationCap } from "lucide-react";
import { navLinks } from "./NavLinks";
import NavItem from "./NavItems";
import { AnimatePresence } from "framer-motion";

const MobileSidebar = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 h-full w-72 bg-slate-950 border-r border-white/10 z-50 p-5 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                  <GraduationCap className="text-white" size={22} />
                </div>
                <div>
                  <h1 className="text-white text-lg font-bold">Internship Tracker</h1>
                  <p className="text-slate-400 text-sm">Student Portal</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-slate-300 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <NavItem
                  key={item.name}
                  to={item.path}
                  icon={item.icon}
                  label={item.name}
                  onClick={onClose}
                />
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;