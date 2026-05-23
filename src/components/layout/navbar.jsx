import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-[70px] bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Search */}
      <div className="w-[350px] relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-[#f5f6ff] h-11 rounded-2xl pl-11 pr-4 outline-none text-sm focus:ring-2 focus:ring-[#a8a3e3]"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="w-11 h-11 rounded-2xl bg-[#f5f6ff] flex items-center justify-center hover:bg-[#eaedfe] transition-all relative">

          <Bell size={18} className="text-[#363b6c]" />

          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-[#f5f6ff] px-3 py-2 rounded-2xl cursor-pointer hover:bg-[#eaedfe] transition-all">

          <div className="w-10 h-10 rounded-xl bg-[#363b6c] flex items-center justify-center text-white font-semibold">
            P
          </div>

          <div>

            <h4 className="text-sm font-semibold text-[#363b6c]">
              Preetham
            </h4>

            <p className="text-xs text-gray-500">
              HR Admin
            </p>

          </div>

          <ChevronDown
            size={16}
            className="text-gray-500"
          />

        </div>

      </div>

    </div>
  );
};

export default Navbar;