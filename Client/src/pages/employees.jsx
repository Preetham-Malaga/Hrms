import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

function Employees() {

  // EMPLOYEE DATA

  const [employees, setEmployees] = useState([]);

  // MODAL

  const [showModal, setShowModal] = useState(false);

  // FORM STATES

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("Active");
  const [salary, setSalary] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  // FETCH EMPLOYEES

  const fetchEmployees = async () => {

    const { data, error } = await supabase
      .from("employees")
      .select("*");

    if (error) {

      console.log(error);

    } else {

      setEmployees(data);

    }
  };

  // LOAD EMPLOYEES

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ADD EMPLOYEE

  const addEmployee = async () => {

    const { error } = await supabase
      .from("employees")
      .insert([
        {
          first_name: name,
          last_name: lastName,
          email: email,
          designation: role,
          department: department,
          salary: salary,
          phone_number: phoneNumber,
          joining_date: joiningDate,
          status: status,
        },
      ]);

    if (error) {

      console.log(error);

    } else {

      // REFRESH DATA

      fetchEmployees();

      // CLEAR FORM

      setName("");
      setLastName("");
      setEmail("");
      setRole("");
      setDepartment("");
      setStatus("Active");
      setSalary("");
      setPhoneNumber("");
      setJoiningDate("");

      // CLOSE MODAL

      setShowModal(false);
    }
  };

  // DELETE EMPLOYEE

  const deleteEmployee = async (id) => {

    await supabase
      .from("employees")
      .delete()
      .eq("id", id);

    fetchEmployees();
  };

  return (

    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Employees
          </h1>

          <p className="text-gray-500 mt-1 text-sm">
            Manage your team members
          </p>

        </div>

        {/* ADD BUTTON */}

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-xl font-medium shadow-sm transition"
        >

          + Add Employee

        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">

        {/* TABLE HEADER */}

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-slate-800">

            All Employees ({employees.length})

          </h2>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search..."
            className="w-80 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none"
          />

        </div>

        {/* TABLE */}

        <table className="w-full">

          <thead>

            <tr className="text-left text-gray-500 text-sm border-b border-gray-200">

              <th className="pb-4">First Name</th>
              <th className="pb-4">Last Name</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Designation</th>
              <th className="pb-4">Department</th>
              <th className="pb-4">Salary</th>
              <th className="pb-4">Phone Number</th>
              <th className="pb-4">Joining Date</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Actions</th>

            </tr>

          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr
                key={employee.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >

                {/* FIRST NAME */}

                <td className="py-5 text-sm font-medium">

                  {employee.first_name}

                </td>

                {/* LAST NAME */}

                <td className="text-sm">

                  {employee.last_name}

                </td>

                {/* EMAIL */}

                <td className="text-sm">

                  {employee.email}

                </td>

                {/* DESIGNATION */}

                <td className="text-sm">

                  {employee.designation}

                </td>

                {/* DEPARTMENT */}

                <td className="text-sm">

                  {employee.department}

                </td>

                {/* SALARY */}

                <td className="text-sm">

                  ₹ {employee.salary}

                </td>

                {/* PHONE */}

                <td className="text-sm">

                  {employee.phone_number}

                </td>

                {/* JOINING DATE */}

                <td className="text-sm">

                  {employee.joining_date}

                </td>

                {/* STATUS */}

                <td>

                  <span
                    className={
                      employee.status === "Active"
                        ? "bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold"
                        : "bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold"
                    }
                  >

                    {employee.status}

                  </span>

                </td>

                {/* DELETE */}

                <td>

                  <button
                    onClick={() =>
                      deleteEmployee(employee.id)
                    }
                    className="text-red-500 text-sm font-medium"
                  >

                    Delete

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-[1000px] rounded-3xl p-8">

            {/* MODAL HEADER */}

            <div className="mb-8 border-b border-gray-200 pb-5">

              <h1 className="text-3xl font-bold text-slate-800">
                Add Employee
              </h1>

              <p className="text-gray-500 mt-2 text-sm">
                Fill all employee details below
              </p>

            </div>

            {/* FORM */}

            <div className="grid grid-cols-2 gap-5">

              {/* FIRST NAME */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Enter first name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* LAST NAME */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Phone Number
                </label>

                <input
                  type="number"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* DESIGNATION */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Designation
                </label>

                <input
                  type="text"
                  placeholder="Enter designation"
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* DEPARTMENT */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Department
                </label>

                <input
                  type="text"
                  placeholder="Enter department"
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* SALARY */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Salary
                </label>

                <input
                  type="number"
                  placeholder="Enter salary"
                  value={salary}
                  onChange={(e) =>
                    setSalary(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* JOINING DATE */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Joining Date
                </label>

                <input
                  type="date"
                  value={joiningDate}
                  onChange={(e) =>
                    setJoiningDate(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                />

              </div>

              {/* STATUS */}

              <div>

                <label className="text-sm font-medium text-gray-600">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="w-full border border-gray-200 p-3 rounded-xl mt-2"
                >

                  <option>Active</option>
                  <option>Inactive</option>

                </select>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowModal(false)}
                className="border border-gray-300 px-5 py-2.5 rounded-xl text-sm font-medium"
              >

                Cancel

              </button>

              <button
                onClick={addEmployee}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium"
              >

                Save Employee

              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Employees;