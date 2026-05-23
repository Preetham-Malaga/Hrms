import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-[#eaedfe]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-hidden flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">

          {children}

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;