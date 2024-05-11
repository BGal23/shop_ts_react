// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./OrderData.module.scss";
import { changeLinkAvailable } from "../../redux/data/orderSlice";
import { useDispatch } from "react-redux";
import Guest from "../Guest/Guest";
import { useState } from "react";

const OrderData = () => {
  const [IsDifferentAddress, setIsDifferentAddress] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Link to="/login">Go Login</Link>
      </div>
      <Guest title={"I buy as a guest"} />

      <div className={style.checkbox}>
        <Checkbox
          name="checkbox"
          icon={<Icon.FiCheck color="var(--font-main-color" size={20} />}
          checked={IsDifferentAddress}
          size={20}
          borderColor="var(--font-main-color)"
          borderWidth={1.5}
          style={{
            cursor: "pointer",
            backgroundColor: "var(--background-main-color)",
          }}
          labelStyle={{ marginLeft: 5, userSelect: "none" }}
          onChange={(event: boolean) => setIsDifferentAddress(event)}
        />
        Choose a other delivery address
      </div>
      {IsDifferentAddress && <Guest title={"Other delivery address"} />}
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
