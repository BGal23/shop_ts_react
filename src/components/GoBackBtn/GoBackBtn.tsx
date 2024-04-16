import style from "./GoBackBtn.module.scss";
import icons from "../../images/svg/icons.svg";

const GoBackBtn = () => {
  return (
    <div className={style.button}>
      <svg className={style.icon}>
        <use xlinkHref={`${icons}#arrow`} />
      </svg>
      <span>GO BACK</span>
    </div>
  );
};

export default GoBackBtn;
