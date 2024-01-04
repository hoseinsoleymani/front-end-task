import { Link, useNavigate } from 'react-router-dom';

import { useAuthenticationStore } from '@/store';

import { Button } from '../shared/Button/Button';

export const Authentication = () => {
  const navigate = useNavigate();

  const { isUserAuthenticated, user, logout } = useAuthenticationStore();

  const logoutHandler = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <div>
      {isUserAuthenticated && user != null ? (
        <Button className="w-16" onClick={logoutHandler}>
          {user.username}
        </Button>
      ) : (
        <Button asChild className="mt-8 w-16 md:mt-0">
          <Link to="/auth/login">Login</Link>
        </Button>
      )}
    </div>
  );
};
