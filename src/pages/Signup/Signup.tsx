import { useMediaQuery } from "react-responsive";
import LogForm from "../../components/LogForm/LogForm";
import Logo from "../../components/Logo/Logo";
import style from "../Login/Login.module.scss";

const SignUp = () => {
  const isMobile: boolean = useMediaQuery({ minWidth: 1280 });
  return (
    <div className={style.container}>
      {isMobile && <Logo />}
      <LogForm isLogin={false} />
    </div>
  );
};

export default SignUp;
