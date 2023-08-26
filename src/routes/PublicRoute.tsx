import React from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  isSignedIn: boolean;
  children: JSX.Element | React.ReactElement;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  isSignedIn,
  children,
}) => {
  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
