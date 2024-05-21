import { SetStateAction } from "react";
import style from "./Delivery.module.scss";
import countries from "./countries";
import { useDispatch, useSelector } from "react-redux";
import { addDelivery } from "../../redux/data/orderSlice";
import { Options } from "./countries";
import { selectOrder } from "../../redux/data/selectors";

const Delivery = () => {
  const countryValue = useSelector(selectOrder).country;
  const deliveryValue = useSelector(selectOrder).option;
  const dispatch = useDispatch();

  interface Event {
    target: { value: SetStateAction<string> };
  }

  const handleCountryChange = (event: Event) => {
    dispatch(addDelivery({ country: event.target.value, option: "", cost: 0 }));
    dispatch(
      addDelivery({
        country: event.target.value,
        option: "",
        cost: 0,
      })
    );
  };

  const handleDeliveryChange = (option: Options) => {
    dispatch(addDelivery({ option: option.deliverer, cost: option.cost }));
  };

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
              <option key={country.id} value={country.country}>
                {country.country}
              </option>
            ))}
          </select>
        </div>
        <div className={style.deliveryContainer}>
          <p>Delivery option:</p>
          <div className={style.deliveryBox}>
            {countries
              .find((country) => country.country === countryValue)
              ?.options.map((option, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="deliverer"
                    checked={deliveryValue === option.deliverer}
                    onChange={() => handleDeliveryChange(option)}
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
