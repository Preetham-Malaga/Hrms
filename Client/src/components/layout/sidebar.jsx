import {
  LayoutDashboard,
  Users,
  UserCheck,
  Building2,
  Briefcase,
  ClipboardList,
  FileText,
  Clock3,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Employees",
      icon: Users,
      path: "/employees",
    },
    {
      title: "Consultants",
      icon: UserCheck,
      path: "/consultants",
    },
    {
      title: "Vendors",
      icon: Building2,
      path: "/vendors",
    },
    {
      title: "Clients",
      icon: Briefcase,
      path: "/clients",
    },
    {
      title: "Onboarding",
      icon: ClipboardList,
      path: "/onboarding",
    },
    {
      title: "Invoices",
      icon: FileText,
      path: "/invoices",
    },
    {
      title: "Timesheets",
      icon: Clock3,
      path: "/timesheets",
    },
    {
      title: "Reports",
      icon: BarChart3,
      path: "/reports",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <div className="w-[260px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between px-5 py-6">

      {/* TOP */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">

          <div className="w-12 h-12 rounded-2xl bg-[#363b6c] flex items-center justify-center text-white text-xl font-bold shadow-lg">
            P
          </div>

          <div>
            <h1 className="text-lg font-bold text-[#363b6c]">
              PeopleX
            </h1>

            <p className="text-xs text-gray-400">
              HRMS Platform
            </p>
          </div>

        </div>

        {/* Menu */}
        <div className="space-y-2">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-sm font-medium ${
                    isActive
                      ? "bg-[#363b6c] text-white shadow-lg"
                      : "text-gray-600 hover:bg-[#f5f6ff]"
                  }`
                }
              >
                <Icon size={18} />

                {item.title}
              </NavLink>
            );
          })}

        </div>

      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">

        <LogOut size={18} />

        Logout

      </button>

    </div>
  );
};

export default Sidebar;