import { useState } from "react";

import { X } from "lucide-react";

import { createEmployee } from "../../services/employeeService";

const AddEmployeeModal = ({
  isOpen,
  onClose,
  fetchEmployees,
  employees,
}) => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      full_name: "",
      email: "",
      designation: "",
      department: "",
      status: "Active",
    });

  if (!isOpen) return null;

  // Generate Employee ID
  const generateEmployeeId = () => {

    const count =
      employees?.length || 0;

    const nextNumber =
      String(count + 1).padStart(
        3,
        "0"
      );

    return `EMP-${nextNumber}`;

  };

  const employeeId =
    generateEmployeeId();

  // Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  // Submit
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    // Validation
    if (
      !formData.full_name ||
      !formData.email ||
      !formData.designation ||
      !formData.department
    ) {

      return;

    }

    try {

      setLoading(true);

      await createEmployee({
        ...formData,
        employee_id:
          employeeId,
      });

      // REFRESH TABLE
      await fetchEmployees();

      // CLOSE MODAL
      onClose();

      // RESET FORM
      setFormData({
        full_name: "",
        email: "",
        designation: "",
        department: "",
        status: "Active",
      });

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-[900px] bg-white rounded-[28px] overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-[#edf2f7]">

          <div>

            <h2 className="text-[26px] font-bold text-[#363b6c]">

              Add Employee

            </h2>

            <p className="text-[14px] text-[#6b7280] mt-1">

              Create employee profile

            </p>

          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl hover:bg-[#f8fafc] flex items-center justify-center"
          >

            <X
              size={20}
              className="text-[#363b6c]"
            />

          </button>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8"
        >

          <div className="grid grid-cols-2 gap-5">

            {/* Full Name */}
            <div>

              <label className="block text-[13px] font-semibold text-[#363b6c] mb-2">

                Full Name *

              </label>

              <input
                type="text"
                name="full_name"
                value={
                  formData.full_name
                }
                onChange={
                  handleChange
                }
                placeholder="Enter full name"
                className="w-full h-[50px] rounded-2xl border border-[#dbe1ea] bg-[#f8fafc] px-4 outline-none text-[14px]"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-[13px] font-semibold text-[#363b6c] mb-2">

                Email *

              </label>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Enter email"
                className="w-full h-[50px] rounded-2xl border border-[#dbe1ea] bg-[#f8fafc] px-4 outline-none text-[14px]"
              />

            </div>

            {/* Employee ID */}
            <div>

              <label className="block text-[13px] font-semibold text-[#363b6c] mb-2">

                Employee ID

              </label>

              <input
                type="text"
                value={employeeId}
                disabled
                className="w-full h-[50px] rounded-2xl border border-[#dbe1ea] bg-[#eef2ff] px-4 outline-none text-[14px] text-[#363b6c] font-semibold"
              />

            </div>

            {/* Designation */}
            <div>

              <label className="block text-[13px] font-semibold text-[#363b6c] mb-2">

                Designation *

              </label>

              <input
                type="text"
                name="designation"
                value={
                  formData.designation
                }
                onChange={
                  handleChange
                }
                placeholder="Enter designation"
                className="w-full h-[50px] rounded-2xl border border-[#dbe1ea] bg-[#f8fafc] px-4 outline-none text-[14px]"
              />

            </div>

            {/* Department */}
            <div>

              <label className="block text-[13px] font-semibold text-[#363b6c] mb-2">

                Department *

              </label>

              <select
                name="department"
                value={
                  formData.department
                }
                onChange={
                  handleChange
                }
                className="w-full h-[50px] rounded-2xl border border-[#dbe1ea] bg-[#f8fafc] px-4 outline-none text-[14px]"
              >

                <option value="">
                  Select Department
                </option>

                <option value="HR">
                  HR
                </option>

                <option value="Engineering">
                  Engineering
                </option>

                <option value="Finance">
                  Finance
                </option>

                <option value="Sales">
                  Sales
                </option>

                <option value="Marketing">
                  Marketing
                </option>

              </select>

            </div>

            {/* Status */}
            <div>

              <label className="block text-[13px] font-semibold text-[#363b6c] mb-2">

                Status

              </label>

              <select
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
                className="w-full h-[50px] rounded-2xl border border-[#dbe1ea] bg-[#f8fafc] px-4 outline-none text-[14px]"
              >

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 mt-8">

            <button
              type="button"
              onClick={onClose}
              className="h-[48px] px-6 rounded-2xl border border-[#dbe1ea] text-[#363b6c] font-semibold text-[14px]"
            >

              Cancel

            </button>

            <button
              type="submit"
              disabled={loading}
              className="h-[48px] px-7 rounded-2xl bg-[#363b6c] hover:bg-[#2d325f] text-white font-semibold text-[14px]"
            >

              {loading
                ? "Saving..."
                : "Save Employee"}

            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddEmployeeModal;