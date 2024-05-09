import { Outlet } from "react-router-dom";
import OrderNav from "../../components/OrderNav/OrderNav";

const Order = () => {
  return (
    <>
      <OrderNav />
      <Outlet />
    </>
  );
};

export default Order;
