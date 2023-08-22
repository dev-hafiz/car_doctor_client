import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Firbase/Hook/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
