import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>HRMS</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "30px",
        }}
      >
        <li style={{ marginTop: "20px" }}>
          <Link
            to="/dashboard"
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </li>

        <li style={{ marginTop: "20px" }}>
          <Link
            to="/employees"
            style={{ color: "white", textDecoration: "none" }}
          >
            Employees
          </Link>
        </li>

        <li style={{ marginTop: "20px" }}>
          <Link
            to="/candidates"
            style={{ color: "white", textDecoration: "none" }}
          >
            Candidates
          </Link>
        </li>

        <li style={{ marginTop: "20px" }}>
          <Link
            to="/vendors"
            style={{ color: "white", textDecoration: "none" }}
          >
            Vendors
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;