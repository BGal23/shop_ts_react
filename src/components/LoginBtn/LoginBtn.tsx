import style from "./LoginBtn.module.scss";
import icons from "../../images/svg/icons.svg";

const LoginBtn = ({ handleLogin, name }) => {
  return (
    <button onSubmit={handleLogin} type="submit" className={style.button}>
      <span>{name}</span>
      <svg className={style.icon}>
        <use xlinkHref={`${icons}#login`} />
      </svg>
    </button>
  );
};

export default LoginBtn;
