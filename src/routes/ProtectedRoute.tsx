import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    isSignedIn: boolean;
    children: JSX.Element | React.ReactElement
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isSignedIn, children }) => {
    if (!isSignedIn) {
        return <Navigate to="/login" replace />
    }

    return children;
}

export default ProtectedRoute