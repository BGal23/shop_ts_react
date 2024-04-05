import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface Props {
  component: React.ComponentType;
  path: string;
}

const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Component />;
};

export default PrivateRoute;
