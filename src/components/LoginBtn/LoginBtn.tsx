import style from "./LoginBtn.module.scss";
import icons from "../../images/svg/icons.svg";

interface Props {
  name: string;
}

const LoginBtn: React.FC<Props> = ({ name }) => {
  return (
    <button type="submit" className={style.button}>
      <span>{name}</span>
      <svg className={style.icon}>
        <use xlinkHref={`${icons}#login`} />
      </svg>
    </button>
  );
};

export default LoginBtn;
