import style from "./SendBtn.module.scss";
import icons from "../../images/svg/icons.svg";

const SendBtn = () => {
  return (
    <button type="button" className={style.button}>
      SEND
      <svg className={style.icon}>
        <use xlinkHref={`${icons}#send`} />
      </svg>
    </button>
  );
};
export default SendBtn;
