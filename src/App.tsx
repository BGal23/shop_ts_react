import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

interface RouteProps {
  component: React.ComponentType;
  path: string;
}

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Categories = lazy(() => import("./pages/Categories/Categories"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const User = lazy(() => import("./pages/User/User"));
const Login = lazy(() => import("./pages/Login/Login"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const RestrictedRoute: React.FC<RouteProps> = lazy(
  () => import("./components/RestrictedRoute/RestrictedRoute")
);
const PrivateRoute: React.FC<RouteProps> = lazy(
  () => import("./components/PrivateRoute/PrivateRoute")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route
            path="login"
            element={<PrivateRoute component={User} path="/" />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} path="/" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
