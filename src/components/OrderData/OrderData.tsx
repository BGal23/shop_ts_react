// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./OrderData.module.scss";
import {
  changeLinkAvailable,
  addUser,
  addDeliveryAddress,
} from "../../redux/data/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Guest from "../Guest/Guest";
import {
  selectUserData,
  selectDeliveryAddress,
  selectLinks,
} from "../../redux/data/selectors.ts";
import { useEffect } from "react";
import getCheckData from "./validate.ts";

const OrderData = () => {
  const otherAddress = useSelector(selectUserData).otherAddress;
  const checkData = useSelector(selectUserData);
  const checkAddress = useSelector(selectDeliveryAddress);
  const linkAvailable = useSelector(selectLinks)[2].available;
  const dispatch = useDispatch();

  useEffect(() => {
    if (otherAddress === false) {
      dispatch(
        changeLinkAvailable({ index: 2, available: getCheckData(checkData) })
      );
    } else {
      const checkDataValid = getCheckData(checkData);
      const checkAddressValid = getCheckData(checkAddress);
      dispatch(
        changeLinkAvailable({
          index: 2,
          available: checkDataValid && checkAddressValid,
        })
      );
    }
  }, [checkData, dispatch, otherAddress, checkAddress]);

  return (
    <>
      <div>
        <Link to="/login">Go Login</Link>
      </div>
      <Guest
        title={"I buy as a guest"}
        addToForm={addUser}
        selectData={selectUserData}
      />

      <div className={style.checkbox}>
        <Checkbox
          name="checkbox"
          icon={<Icon.FiCheck color="var(--font-main-color" size={20} />}
          checked={otherAddress}
          size={20}
          borderColor="var(--font-main-color)"
          borderWidth={1.5}
          style={{
            cursor: "pointer",
            backgroundColor: "var(--background-main-color)",
          }}
          labelStyle={{ marginLeft: 5, userSelect: "none" }}
          onChange={(event: boolean) => {
            dispatch(addUser({ otherAddress: event }));
          }}
        />
        Choose a other delivery address
      </div>
      {otherAddress && (
        <Guest
          title={"Other delivery address"}
          addToForm={addDeliveryAddress}
          selectData={selectDeliveryAddress}
        />
      )}
      <div className={style.links}>
        <Link to="/order/cart">BACK TO CART ↩</Link>
        <Link
          style={
            linkAvailable
              ? { background: "transparent" }
              : {
                  pointerEvents: "none",
                  opacity: "0.5",
                }
          }
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
