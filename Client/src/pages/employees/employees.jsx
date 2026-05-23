import { useEffect, useState } from "react";

import {
  Search,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

import AddEmployeeModal from "./AddEmployeeModal";

import {
  getEmployees,
  deleteEmployee,
} from "../../services/employeeService";

const Employees = () => {

  const [employees, setEmployees] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [modalOpen, setModalOpen] =
    useState(false);

  // Fetch Employees
  const fetchEmployees = async () => {

    try {

      setLoading(true);

      const data =
        await getEmployees();

      setEmployees(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchEmployees();

  }, []);

  // Delete Employee
  const handleDelete = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete this employee?"
      );

    if (!confirmDelete) return;

    try {

      await deleteEmployee(id);

      fetchEmployees();

    } catch (error) {

      console.log(error);

    }
  };

  // Search
  const filteredEmployees =
    employees.filter((employee) =>
      employee.full_name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // Initials
  const getInitials = (name) => {

    if (!name) return "U";

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  };

  return (

    <div className="w-full">

      {/* Header */}
      <div className="flex items-start justify-between mb-6">

        <div>

          <h1 className="text-[24px] font-bold text-[#363b6c]">

            Employees

          </h1>

          <p className="text-[14px] text-[#6b7280] mt-1">

            Manage your team members

          </p>

        </div>

        {/* Add Button */}
        <button
          onClick={() =>
            setModalOpen(true)
          }
          className="h-[44px] px-5 rounded-2xl bg-[#363b6c] hover:bg-[#2d325f] text-white font-semibold text-[14px] flex items-center gap-2 shadow-sm transition-all"
        >

          <Plus size={16} />

          Add Employee

        </button>

      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[28px] border border-[#edf2f7] p-5">

        {/* Top */}
        <div className="flex items-center justify-between mb-5">

          <h2 className="text-[20px] font-bold text-[#363b6c]">

            All Employees (
            {filteredEmployees.length}
            )

          </h2>

          {/* Search */}
          <div className="relative w-[260px]">

            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
            />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full h-[42px] rounded-xl border border-[#dbe1ea] bg-[#f8fafc] pl-10 pr-4 outline-none text-[13px]"
            />

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-[#edf2f7]">

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Employee ID

                </th>

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Name

                </th>

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Email

                </th>

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Designation

                </th>

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Department

                </th>

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Status

                </th>

                <th className="text-left pb-4 text-[13px] font-semibold text-[#64748b]">

                  Actions

                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan="7"
                    className="py-10 text-center text-[13px] text-[#6b7280]"
                  >

                    Loading employees...

                  </td>

                </tr>

              ) : filteredEmployees.length ===
                0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="py-10 text-center text-[13px] text-[#6b7280]"
                  >

                    No employees found

                  </td>

                </tr>

              ) : (

                filteredEmployees.map(
                  (employee) => (

                    <tr
                      key={employee.id}
                      className="border-b border-[#edf2f7] hover:bg-[#f8f9ff] transition-all"
                    >

                      {/* Employee ID */}
                      <td className="py-4">

                        <span className="px-3 py-1 rounded-full bg-[#eef2ff] text-[#363b6c] text-[11px] font-semibold">

                          {
                            employee.employee_id
                          }

                        </span>

                      </td>

                      {/* Name */}
                      <td className="py-4">

                        <div className="flex items-center gap-3">

                          <div className="w-[34px] h-[34px] rounded-full bg-[#eef2ff] flex items-center justify-center text-[12px] font-bold text-[#363b6c]">

                            {getInitials(
                              employee.full_name
                            )}

                          </div>

                          <h3 className="text-[13px] font-semibold text-[#363b6c]">

                            {
                              employee.full_name
                            }

                          </h3>

                        </div>

                      </td>

                      {/* Email */}
                      <td className="text-[13px] text-[#6b7280]">

                        {
                          employee.email
                        }

                      </td>

                      {/* Designation */}
                      <td className="text-[13px] text-[#363b6c] font-medium">

                        {
                          employee.designation
                        }

                      </td>

                      {/* Department */}
                      <td className="text-[13px] text-[#363b6c] font-medium">

                        {
                          employee.department
                        }

                      </td>

                      {/* Status */}
                      <td>

                        <span className="px-3 py-1 rounded-full bg-[#363b6c] text-white text-[11px] font-semibold">

                          {
                            employee.status
                          }

                        </span>

                      </td>

                      {/* Actions */}
                      <td>

                        <div className="flex items-center gap-4">

                          <button className="text-[#363b6c]">

                            <Pencil size={15} />

                          </button>

                          <button
                            onClick={() =>
                              handleDelete(
                                employee.id
                              )
                            }
                            className="text-red-500"
                          >

                            <Trash2 size={15} />

                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Modal */}
      <AddEmployeeModal
        isOpen={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        fetchEmployees={
          fetchEmployees
        }
        employees={employees}
      />

    </div>
  );
};

export default Employees;