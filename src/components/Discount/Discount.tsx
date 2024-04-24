import style from "./Discount.module.scss";
import Newsletter from "../Newsletter/Newsletter";

const Discount = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h3 className={style.title}>GET YOUR DISCOUNT CODE</h3>
        <ul className={style.percentBox}>
          <li className={style.percent}>
            <p>10% OFF</p>
          </li>
          <li className={style.percent}>
            <p>20% OFF</p>
          </li>
          <li className={style.percent}>
            <p>30% OFF</p>
          </li>
        </ul>
      </div>
      <Newsletter />
    </div>
  );
};

export default Discount;
