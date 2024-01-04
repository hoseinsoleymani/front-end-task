import { Navigate, Outlet } from 'react-router-dom';

import { useAuthenticationStore } from '@/store';

interface ProtectedRouteProps {
  redirectPath?: string;
}

export const ProtectedRoute = ({
  redirectPath = '/auth/login',
}: ProtectedRouteProps) => {
  const { isUserAuthenticated } = useAuthenticationStore();

  if (!isUserAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
