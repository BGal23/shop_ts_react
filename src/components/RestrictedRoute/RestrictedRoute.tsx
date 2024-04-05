import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface Props {
  component: React.ComponentType;
  path: string;
}

const RestrictedRoute: React.FC<Props> = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Component />;
};

export default RestrictedRoute;
