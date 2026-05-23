import { useState } from "react";
import { supabase } from "../services/supabase";

function AddEmployee() {

  const [formData, setFormData] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    joining_date: "",
    salary: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("employees")
      .insert([formData]);

    if (error) {
      alert(error.message);
    } else {
      alert("Employee Added Successfully");

      setFormData({
        employee_id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        joining_date: "",
        salary: "",
        status: "",
      });
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Employee</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <input
          type="text"
          name="employee_id"
          placeholder="Employee ID"
          value={formData.employee_id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />

        <input
          type="date"
          name="joining_date"
          value={formData.joining_date}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save Employee
        </button>

      </form>
    </div>
  );
}

export default AddEmployee;