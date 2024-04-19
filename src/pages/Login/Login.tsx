import { useMediaQuery } from "react-responsive";
import LogForm from "../../components/LogForm/LogForm";
import Logo from "../../components/Logo/Logo";
import style from "./Login.module.scss";

const Login = () => {
  const isMobile: boolean = useMediaQuery({ minWidth: 1280 });
  return (
    <div className={style.container}>
      {isMobile && <Logo />}
      <LogForm isLogin={true} />
    </div>
  );
};

export default Login;
