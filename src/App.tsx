import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { Login } from "./pages/Login";
import UserRegistrationForm from "./pages/Registration";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { VerifyAccount } from "./pages/VerifyOtp";
import { useAppSelector } from "./hooks/redux.hooks";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const { isSignedIn } = useAppSelector((state) => state.auth);
  return (
    <Routes>
      <Route
        path="/register"
        element={
          <PublicRoute isSignedIn={isSignedIn}>
            <UserRegistrationForm />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-account"
        element={
          <PublicRoute isSignedIn={isSignedIn}>
            <VerifyAccount />
          </PublicRoute>
        }
      />
      <Route
        path="/reset-password"
        element={
          <PublicRoute isSignedIn={isSignedIn}>
            <ResetPassword />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <PublicRoute isSignedIn={isSignedIn}>
            <ForgotPassword />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute isSignedIn={isSignedIn}>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute isSignedIn={isSignedIn}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
