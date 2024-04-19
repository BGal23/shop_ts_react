import style from "./Logo.module.scss";
import icons from "../../images/svg/icons.svg";

const Logo = () => {
  return (
    <div className={style.container}>
      <svg className={style.icon}>
        <use xlinkHref={`${icons}#bag-color`} />
      </svg>
      <div className={style.title}>
        <div>FAKE</div>
        <div>SHOP</div>
      </div>
    </div>
  );
};

export default Logo;
