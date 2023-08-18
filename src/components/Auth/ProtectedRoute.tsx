import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute = ({ redirectPath = '/auth/login' }: ProtectedRouteProps) => {
  const isAuthenticated = true;
  // useSelector((store: RootState) => store.authentication.isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};