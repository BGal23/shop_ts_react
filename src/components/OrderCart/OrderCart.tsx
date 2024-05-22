import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import style from "./OrderCart.module.scss";
import Delivery from "../Delivery/Delivery";
import Payment from "../Payment/Payment";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOrder,
  selectCart,
  selectLinks,
} from "../../redux/data/selectors";
import { useEffect } from "react";
import { changeLinkAvailable } from "../../redux/data/orderSlice";

const OrderCart = () => {
  const deliveryData = useSelector(selectOrder);
  const linkAvailable = useSelector(selectLinks)[1].available;
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getLinkAvailable = (isAvailable: boolean) => {
      dispatch(
        changeLinkAvailable({
          index: 1,
          available: isAvailable,
        })
      );
    };

    if (deliveryData.option && deliveryData.payMethod) {
      if (
        deliveryData.payMethod === "Bank transfer" ||
        deliveryData.payMethod === "Credit cart"
      ) {
        if (deliveryData.payMethodType !== "none") {
          getLinkAvailable(true);
        } else {
          getLinkAvailable(false);
        }
      } else {
        getLinkAvailable(true);
      }
    } else {
      getLinkAvailable(false);
    }
  }, [deliveryData, dispatch, linkAvailable]);

  return (
    <>
      <Cart />
      <div className={style.box}>
        <Delivery />
        <Payment />
      </div>
      <div className={style.links}>
        <Link to="/">BACK TO SHOPPING ↩</Link>
        <Link
          style={
            linkAvailable && cart.length > 0
              ? { background: "transparent" }
              : {
                  pointerEvents: "none",
                  opacity: "0.5",
                }
          }
          to="/order/your_data"
        >
          YOUR DATA ➞
        </Link>
      </div>
    </>
  );
};

export default OrderCart;
