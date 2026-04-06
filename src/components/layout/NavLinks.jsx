import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  MessageSquareText,
  BarChart3,
  Bell,
  User,
} from "lucide-react";

export const navLinks = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Applications", path: "/applications", icon: Briefcase },
  { name: "Add Application", path: "/applications/new", icon: PlusCircle },
  { name: "Interviews", path: "/interviews", icon: MessageSquareText },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Alerts", path: "/alerts", icon: Bell },
  { name: "Profile", path: "/profile", icon: User },
];