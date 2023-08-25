import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { Login } from "../pages/Login";
import UserRegistrationForm from "../pages/Registration";
import { ForgotPassword } from "../pages/ForgotPassword";
import { ResetPassword } from "../pages/ResetPassword";

export const router = createBrowserRouter([
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/registration", element: <UserRegistrationForm /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
]);
