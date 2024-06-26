import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { getCategoriesName } from "./redux/data/operations";
import { UnknownAction } from "@reduxjs/toolkit";

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
import Order from "./pages/Order/Order";
import OrderCart from "./components/OrderCart/OrderCart";
import OrderData from "./components/OrderData/OrderData";
import Summary from "./components/Summary/Summary";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser() as unknown as UnknownAction);
    dispatch(getCategoriesName() as unknown as UnknownAction);
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
        <Route path="order" element={<Order />}>
          <Route path="cart" element={<OrderCart />} />
          <Route path="your_data" element={<OrderData />} />
          <Route path="summary" element={<Summary />} />
        </Route>
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
