import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RoleRoute from "./RoleRoute";
import Login from "./Login";
import AdminPage from "./AdminPage";
import UserPage from "./UserPage";
import Unauthorized from "./Unauthorized";

function App() {

  const [role, setRole] = useState("admin");

  const router = createBrowserRouter([
    { path: "/", element: <>
    <h1>Home Page <Link to="/login">
      Go to Login Page
    </Link></h1>
    </>},
    { path: "/login", element: <Login setRole={setRole} /> },
    {
      path: "/admin",
      element: (
        <RoleRoute role={role} requiredRole="admin">
          <AdminPage />
        </RoleRoute>
      ),
    },
    {
      path: "/user",
      element: (
        <RoleRoute role={role} requiredRole="user">
          <UserPage />
        </RoleRoute>
      ),
    },
    { path: "/unauthorized", element: <Unauthorized /> },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
