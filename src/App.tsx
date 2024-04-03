import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

interface RouteProps {
  component: React.ComponentType;
  path: string;
}

const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const RestrictedRoute: React.FC<RouteProps> = lazy(
  () => import("./components/RestrictedRoute/RestrictedRoute")
);
const PrivateRoute: React.FC<RouteProps> = lazy(
  () => import("./components/PrivateRoute/PrivateRoute")
);

function App() {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={<PrivateRoute component={Home} path="/login" />}
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
}

export default App;
