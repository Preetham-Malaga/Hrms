import {
  Users,
  UserCheck,
  Clock3,
  Briefcase,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-6">

        <h1 className="text-[24px] font-bold text-[#111827]">
          Dashboard
        </h1>

        <p className="text-[14px] text-[#64748b] mt-1">
          Welcome to your HRMS
          platform
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-6">

        {/* Card */}
        <div className="bg-white rounded-[24px] p-5 border border-[#edf2f7]">

          <div className="flex items-center justify-between mb-4">

            <div className="w-11 h-11 rounded-2xl bg-[#eef2ff] flex items-center justify-center">

              <Users
                size={20}
                className="text-[#363b6c]"
              />

            </div>

          </div>

          <p className="text-[13px] text-[#64748b] mb-2">
            Total Employees
          </p>

          <h2 className="text-[28px] font-bold text-[#111827]">
            240
          </h2>

        </div>

        {/* Card */}
        <div className="bg-white rounded-[24px] p-5 border border-[#edf2f7]">

          <div className="flex items-center justify-between mb-4">

            <div className="w-11 h-11 rounded-2xl bg-[#eefbf3] flex items-center justify-center">

              <UserCheck
                size={20}
                className="text-[#16a34a]"
              />

            </div>

          </div>

          <p className="text-[13px] text-[#64748b] mb-2">
            Active Employees
          </p>

          <h2 className="text-[28px] font-bold text-[#16a34a]">
            220
          </h2>

        </div>

        {/* Card */}
        <div className="bg-white rounded-[24px] p-5 border border-[#edf2f7]">

          <div className="flex items-center justify-between mb-4">

            <div className="w-11 h-11 rounded-2xl bg-[#fff8e6] flex items-center justify-center">

              <Clock3
                size={20}
                className="text-[#eab308]"
              />

            </div>

          </div>

          <p className="text-[13px] text-[#64748b] mb-2">
            Pending Approvals
          </p>

          <h2 className="text-[28px] font-bold text-[#eab308]">
            12
          </h2>

        </div>

        {/* Card */}
        <div className="bg-white rounded-[24px] p-5 border border-[#edf2f7]">

          <div className="flex items-center justify-between mb-4">

            <div className="w-11 h-11 rounded-2xl bg-[#eef2ff] flex items-center justify-center">

              <Briefcase
                size={20}
                className="text-[#2563eb]"
              />

            </div>

          </div>

          <p className="text-[13px] text-[#64748b] mb-2">
            Open Positions
          </p>

          <h2 className="text-[28px] font-bold text-[#2563eb]">
            18
          </h2>

        </div>

      </div>

      {/* Activities */}
      <div className="bg-white rounded-[24px] border border-[#edf2f7] p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-[20px] font-bold text-[#111827]">
            Recent Activities
          </h2>

          <button className="h-[40px] px-4 rounded-xl bg-[#363b6c] hover:bg-[#2c315d] text-white text-[13px] font-semibold transition-all">

            View All

          </button>

        </div>

        {/* Activity */}
        <div className="space-y-5">

          <div className="flex items-start justify-between border-b border-[#edf2f7] pb-5">

            <div>

              <h3 className="text-[15px] font-semibold text-[#111827]">
                New Employee Added
              </h3>

              <p className="text-[13px] text-[#64748b] mt-1">
                John Smith joined as HR
                Manager
              </p>

            </div>

            <span className="text-[12px] text-[#94a3b8]">
              2 mins ago
            </span>

          </div>

          {/* Activity */}
          <div className="flex items-start justify-between border-b border-[#edf2f7] pb-5">

            <div>

              <h3 className="text-[15px] font-semibold text-[#111827]">
                Vendor Approved
              </h3>

              <p className="text-[13px] text-[#64748b] mt-1">
                ABC Staffing approved
                successfully
              </p>

            </div>

            <span className="text-[12px] text-[#94a3b8]">
              10 mins ago
            </span>

          </div>

          {/* Activity */}
          <div className="flex items-start justify-between">

            <div>

              <h3 className="text-[15px] font-semibold text-[#111827]">
                Invoice Generated
              </h3>

              <p className="text-[13px] text-[#64748b] mt-1">
                Invoice #INV-2026
                generated
              </p>

            </div>

            <span className="text-[12px] text-[#94a3b8]">
              1 hour ago
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;