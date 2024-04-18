import style from "./LogForm.module.scss";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import LoginBtn from "../LoginBtn/LoginBtn";
import { useState } from "react";
import { Login } from "../../pages/Login/Login";

const LogForm = ({ isLogin }) => {
  const [checkName, setCheckName] = useState<string>("");
  const [checkEmail, setCheckEmail] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [isValidateOn, setIsValidateOn] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleLogin = (event: Login) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    setIsValidateOn(true);

    if (isLogin) {
      return dispatch(login({ email, password }));
    } else {
      return dispatch(register({ name, email, password }));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.formBox}>
        <form className={style.form} onSubmit={handleLogin}>
          <div className={style.upperBox}>
            <h2>{isLogin ? "LOGIN" : "SIGN UP"}</h2>
            <p>
              Welcome to our store website. To take advantage of the greater
              opportunities that our store gives us. Sign in or create an
              account.
            </p>
            {!isLogin && (
              <label>
                <div>Name</div>
                <input
                  className={style.input}
                  name="name"
                  onChange={(event) => setCheckName(event.target.value)}
                />

                <div className={style.warning}>
                  {checkName.length < 6 && isValidateOn && "Name is too short"}
                </div>
              </label>
            )}
            <label>
              <div>Email</div>
              <input
                className={style.input}
                type="email"
                name="email"
                onChange={(event) => setCheckEmail(event.target.value)}
              />

              <div className={style.warning}>
                {checkEmail.length < 6 && isValidateOn && "Email is too short"}
              </div>
            </label>
            <label>
              <div>Password</div>
              <input
                className={style.input}
                type="password"
                name="password"
                autoComplete="off"
                onChange={(event) => setCheckPassword(event.target.value)}
              />

              <div className={style.warning}>
                {checkPassword.length < 6 &&
                  isValidateOn &&
                  "Password is too short"}
              </div>
            </label>
          </div>
          <span className={style.buttonBox}>
            <LoginBtn
              onSubmit={handleLogin}
              name={isLogin ? "LOGIN" : "SIGN UP"}
            />
            <Link to={isLogin ? "/signup" : "/login"}>
              {isLogin ? "GO SIGN UP" : "GO LOGIN"}
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogForm;
