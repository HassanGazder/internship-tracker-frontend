import {
  LayoutDashboard,
  BriefcaseBusiness,
  BarChart3,
  UserCircle,
  ClipboardPenLine,
} from "lucide-react";

export const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    path: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    name: "Interview Reflections",
    path: "/interviews",
    icon: ClipboardPenLine,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: UserCircle,
  },
];