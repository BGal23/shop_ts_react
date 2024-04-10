import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import OneCategory from "./pages/OneCategory/OneCategory";
import AboutUs from "./pages/AboutUs/AboutUs";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OneProduct from "./pages/OneProduct/OneProduct";
import { fetchProducts } from "./redux/products/operations";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:categoryId" element={<OneCategory />} />
        <Route path="product/:productId" element={<OneProduct />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route
          path="user"
          element={<PrivateRoute component={User} path="/login" />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={Login} path="/" />}
        />
        <Route
          path="signup"
          element={<RestrictedRoute component={SignUp} path="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

// interface RouteProps {
//   component: React.ComponentType;
//   path: string;
// }

// const Header = lazy(() => import("./components/Header/Header"));
// const Home = lazy(() => import("./pages/Home/Home"));
// const Categories = lazy(() => import("./pages/Categories/Categories"));
// const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
// const User = lazy(() => import("./pages/User/User"));
// const Login = lazy(() => import("./pages/Login/Login"));
// const SignUp = lazy(() => import("./pages/SignUp/SignUp"));
// const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
// const RestrictedRoute: React.FC<RouteProps> = lazy(
//   () => import("./components/RestrictedRoute/RestrictedRoute")
// );
// const PrivateRoute: React.FC<RouteProps> = lazy(
//   () => import("./components/PrivateRoute/PrivateRoute")
// );
