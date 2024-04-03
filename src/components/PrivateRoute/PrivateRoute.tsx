import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface RouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<RouteProps> = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Component />;
};

export default PrivateRoute;
