import { Navigate, Outlet } from 'react-router-dom';
import { useStytchSession } from '@stytch/react';

function PrivateRoutes() {
  const isLoggedIn = useStytchSession().session;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;
