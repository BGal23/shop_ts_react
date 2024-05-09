import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import style from "./OrderCart.module.scss";
import Delivery from "../Delivery/Delivery";
import Payment from "../Payment/Payment";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectCart } from "../../redux/data/selectors";
import { useEffect, useState } from "react";
import { changeLinkAvailable } from "../../redux/data/orderSlice";

const OrderCart = () => {
  const deliveryData = useSelector(selectOrder);
  const cart = useSelector(selectCart);
  const [isDeliveryOk, setIsDeliveryOk] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (deliveryData.option && deliveryData.payMethod) {
      if (
        deliveryData.payMethod === "Bank transfer" ||
        deliveryData.payMethod === "Credit cart"
      ) {
        if (deliveryData.payMethodType !== "none") {
          deliveryData.payMethodType && setIsDeliveryOk(true);
        } else {
          deliveryData.payMethodType && setIsDeliveryOk(false);
        }
      } else {
        deliveryData.payMethodType && setIsDeliveryOk(true);
      }
    }
  }, [deliveryData]);

  return (
    <>
      <Cart />
      <Delivery />
      <Payment />
      <div className={style.links}>
        <Link to="/">BACK TO SHOPPING ↩</Link>
        <Link
          style={
            isDeliveryOk && cart.length > 0
              ? { background: "transparent" }
              : {
                  pointerEvents: "none",
                  opacity: "0.5",
                }
          }
          to="/order/your_data"
          onClick={() => dispatch(changeLinkAvailable(1))}
        >
          YOUR DATA ➞
        </Link>
      </div>
    </>
  );
};

export default OrderCart;
