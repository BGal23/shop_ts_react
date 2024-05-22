import { useSelector } from "react-redux";
import style from "./Summary.module.scss";
import {
  selectCart,
  selectDeliveryAddress,
  selectOrder,
  selectUserData,
} from "../../redux/data/selectors";
import SummaryData from "../SummaryData/SummaryData";
import { useEffect, useState } from "react";
import { Product } from "../../redux/data/cartSlice";
import { Link } from "react-router-dom";
import Regulation from "../Regulation/Regulation";

const Summary = () => {
  const [isCanPay, setIsCanPay] = useState(false);
  const userData = useSelector(selectUserData);
  const deliveryData = useSelector(selectDeliveryAddress);
  const cart = useSelector(selectCart);
  const delivery = useSelector(selectOrder);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    return setTotalPrice(
      Number(
        cart
          .reduce((total: number, product: Product) => {
            return Number(total) + Number(product.quantity * product.price);
          }, 0)
          .toFixed(2)
      )
    );
  }, [cart]);

  return (
    <div className={style.container}>
      <div>
        <h3>Summary</h3>
        <div className={style.box}>
          <div>
            {cart.map((product, index) => (
              <span key={index} className={style.product}>
                <p className={style.productTitle}>{product.title}</p>
                <div className={style.price}>
                  {product.quantity > 1 && (
                    <p>
                      ({product.price.toFixed(2)} $ × {product.quantity})
                    </p>
                  )}
                  <h3>+ {(product.price * product.quantity).toFixed(2)} $</h3>
                </div>
              </span>
            ))}
          </div>
          <div className={style.product}>
            <h3>Total for products</h3>
            <h3>{totalPrice.toFixed(2)} $</h3>
          </div>
        </div>
        <div className={style.box}>
          <div className={style.product}>
            <p>{`${delivery.option} (${delivery.country})`}</p>
            <h3>+ {delivery.cost.toFixed(2)} $</h3>
          </div>
          <div className={style.product}>
            <p>{delivery.payMethod}</p>

            {delivery.payMethodType !== "none" ? delivery.payMethodType : ""}
          </div>
          {delivery.additionalCost !== 0 && (
            <div className={style.product}>
              <p>Additional shipping costs</p>
              <h3>{`+ ${delivery.additionalCost * 100}%`}</h3>
            </div>
          )}
          <div className={style.product}>
            <h3>Total to pay</h3>
            <h3>
              {(
                totalPrice +
                delivery.cost +
                totalPrice * delivery.additionalCost
              ).toFixed(2)}{" "}
              $
            </h3>
          </div>
        </div>
      </div>
      <SummaryData title={"Employer's address"} data={userData} />
      {userData.otherAddress ? (
        <SummaryData title={"Delivery address"} data={deliveryData} />
      ) : (
        <p>The shipping address remains the same as the Employer's address</p>
      )}
      <div className={style.payLink}>
        <Link
          style={
            isCanPay
              ? { background: "transparent" }
              : {
                  pointerEvents: "none",
                  opacity: "0.5",
                }
          }
          to="/"
        >
          I CONFIRM AND PAY
        </Link>
      </div>
      <Regulation
        checkCheckbox={isCanPay}
        isValidateOn={false}
        setCheckCheckbox={setIsCanPay}
      />
    </div>
  );
};

export default Summary;
