import { Link } from "react-router-dom";
import style from "./OrderData.module.scss";
import { changeLinkAvailable } from "../../redux/data/orderSlice";
import { useDispatch } from "react-redux";
import Guest from "../Guest/Guest";

const OrderData = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Link to="/login">Go Login</Link>
      </div>
      <Guest />
      <div className={style.links}>
        <Link to="/order/cart">BACK TO CART ↩</Link>
        <Link
          //   style={
          //     isDeliveryOk && cart.length > 0
          //       ? { background: "transparent" }
          //       : {
          //           pointerEvents: "none",
          //           opacity: "0.5",
          //         }
          //   }
          to="/order/summary"
          onClick={() => dispatch(changeLinkAvailable(2))}
        >
          SUMMARY ➞
        </Link>
      </div>
    </>
  );
};

export default OrderData;
