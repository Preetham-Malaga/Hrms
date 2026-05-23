import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Auth Pages
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

// Dashboard Page
import Dashboard from "./pages/dashboard/dashboard";

// Employee Page
import Employees from "./pages/employees/employees";

// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";

// Layout
import DashboardLayout from "./layouts/dashboardlayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* SIGNUP */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <DashboardLayout>

                <Dashboard />

              </DashboardLayout>

            </ProtectedRoute>
          }
        />

        {/* EMPLOYEES */}
        <Route
          path="/employees"
          element={
            <ProtectedRoute>

              <DashboardLayout>

                <Employees />

              </DashboardLayout>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;