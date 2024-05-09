import { SetStateAction, useEffect, useState } from "react";
import style from "./Delivery.module.scss";
import countries from "./countries";
import { useDispatch } from "react-redux";
import { addDelivery } from "../../redux/data/orderSlice";
import { Options } from "./countries";

const Delivery = () => {
  const [countryValue, setCountryValue] = useState("pl");
  const [deliveryValue, setDeliveryValue] = useState("");
  const dispatch = useDispatch();

  interface Event {
    target: { value: SetStateAction<string> };
  }

  const handleCountryChange = (event: Event) => {
    setCountryValue(event.target.value);
    setDeliveryValue("");
    dispatch(
      addDelivery({
        country: event.target.value,
        option: "",
        cost: 0,
      })
    );
  };

  const handleDeliveryChange = (
    option: Options,
    value: SetStateAction<string>
  ) => {
    setDeliveryValue(value);
    dispatch(addDelivery({ option: option.deliverer, cost: option.cost }));
  };

  useEffect(() => {
    setDeliveryValue("");
  }, [countryValue]);

  return (
    <div className={style.container}>
      <h3 className={style.title}>Delivery</h3>
      <form className={style.form}>
        <div className={style.countries}>
          <label htmlFor="country">Choose your country:</label>
          <select
            onChange={handleCountryChange}
            className={style.select}
            id="country"
            name="country"
            value={countryValue}
          >
            {countries.map((country) => (
              <option key={country.id} value={country.value}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        <div className={style.deliveryContainer}>
          <p>Delivery option:</p>
          <div className={style.deliveryBox}>
            {countries
              .find((country) => country.value === countryValue)
              ?.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="deliverer"
                    checked={deliveryValue === option.deliverer}
                    onChange={() =>
                      handleDeliveryChange(option, option.deliverer)
                    }
                  />
                  {`${option.deliverer} ${option.cost}$`}
                </label>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Delivery;
