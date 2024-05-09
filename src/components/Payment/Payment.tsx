import { useState } from "react";
import style from "./Payment.module.scss";
import methods from "./methods";
import { useDispatch } from "react-redux";
import { addDelivery } from "../../redux/data/orderSlice";

const Payment = () => {
  const [paymentValue, setPaymentValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <h3 className={style.title}>Payment method</h3>
      {methods.map((method, index) => (
        <label key={index}>
          <input
            name="paymentMethods"
            type="radio"
            value={method.type}
            onChange={(event) => {
              setPaymentValue(event.target.value),
                dispatch(
                  addDelivery({
                    payMethod: event.target.value,
                    payMethodType: "none",
                  })
                );
            }}
          />
          {`${method.type} ${
            method.cashPayment ? `+ ${method.cashPayment * 100}%` : ""
          }`}
          {paymentValue === method.type && method.options ? (
            <ul>
              {method.options.map((option, index) => (
                <label key={index}>
                  <input
                    name="options"
                    type="radio"
                    value={option}
                    onChange={(event) =>
                      dispatch(
                        addDelivery({ payMethodType: event.target.value })
                      )
                    }
                  />
                  {option}
                </label>
              ))}
            </ul>
          ) : (
            ""
          )}
        </label>
      ))}
    </div>
  );
};

export default Payment;
