import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { DashboardLayout } from "./components/dashboard-layout";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Parts from "./pages/Parts";
import Settings from "./pages/Settings";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";
import UserTypes from "./pages/UserTypes";
import useUserStore from "./stores/userStore";
import { initializeDefaultLayouts } from "./constants/defaultLayouts";

// Protected route component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { currentUser, checkAuth } = useUserStore();

  useEffect(() => {
    // Check if user is authenticated on mount
    if (!currentUser) {
      // Handle async checkAuth
      checkAuth().catch((error) => {
        console.error("Authentication check failed:", error);
      });
    }
  }, [currentUser, checkAuth]);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Admin route component
function AdminRoute({ children }: { children: React.ReactNode }) {
  const { currentUser, hasPermission } = useUserStore();

  if (!currentUser || !hasPermission("admin")) {
    return <Navigate to="/tickets" replace />;
  }

  return <>{children}</>;
}

function App() {
  // Initialize default layouts when the app first loads
  useEffect(() => {
    initializeDefaultLayouts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/tickets" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route
        path="/tickets"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Tickets />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <DashboardLayout>
                <Users />
              </DashboardLayout>
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/user-types"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <DashboardLayout>
                <UserTypes />
              </DashboardLayout>
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <AdminRoute>
              <DashboardLayout>
                <Customers />
              </DashboardLayout>
            </AdminRoute>
          </ProtectedRoute>
        }
      />

      <Route
        path="/parts"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Parts />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
