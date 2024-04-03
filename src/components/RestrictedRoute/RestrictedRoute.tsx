import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface RouteProps {
  component: React.ComponentType;
}

const RestrictedRoute: React.FC<RouteProps> = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Component />;
};

export default RestrictedRoute;
