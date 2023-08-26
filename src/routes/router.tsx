// import { createBrowserRouter } from "react-router-dom";

// import Dashboard from "../pages/Dashboard";
// import { Login } from "../pages/Login";
// import UserRegistrationForm from "../pages/Registration";
// import { ForgotPassword } from "../pages/ForgotPassword";
// import { ResetPassword } from "../pages/ResetPassword";
// import { VerifyAccount } from "../pages/VerifyOtp";
// import { useAppSelector } from "../hooks/redux.hooks";
// import PublicRoute from "./PublicRoute";
// import ProtectedRoute from "./ProtectedRoute";

// // const { isSignedIn } = useAppSelector((state) => state.auth);

// export const router = createBrowserRouter([
//   {
//     path: "/register",
//     loader() {
// const { isSignedIn } = useAppSelector((state) => state.auth);
// return isSignedIn; 
//     },
//     children[
//       {}
//     ],
//     element: (
//       <PublicRoute isSignedIn={isSignedIn}>
//         <UserRegistrationForm />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/verify-account",
//     element: (
//       <PublicRoute isSignedIn={isSignedIn}>
//         <VerifyAccount />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/reset-password",
//     element: (
//       <PublicRoute isSignedIn={isSignedIn}>
//         <ResetPassword />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/forgot-password",
//     element: (
//       <PublicRoute isSignedIn={isSignedIn}>
//         <ForgotPassword />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/login",
//     element: (
//       <PublicRoute isSignedIn={isSignedIn}>
//         <Login />
//       </PublicRoute>
//     ),
//   },
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute isSignedIn={isSignedIn}>
//         <Dashboard />
//       </ProtectedRoute>
//     ),
//   },
// ]);
