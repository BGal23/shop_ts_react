import style from "./Newsletter.module.scss";
import SendBtn from "../SendBtn/SendBtn";
import { FormEvent, useState } from "react";
import codes from "../../assets/codes";
import Regulation from "../Regulation/Regulation";

const Newsletter = () => {
  const [checkEmail, setCheckEmail] = useState<string>("");
  const [checkCheckbox, setCheckCheckbox] = useState<boolean>(false);
  const [isValidateOn, setIsValidateOn] = useState<boolean>(false);

  const sendCode = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email: string = formData.get("email") as string;
    const checkbox: boolean = formData.get("checkbox") !== null;
    setIsValidateOn(true);

    if (email && checkbox) {
      const codeNumber: number = Math.floor(Math.random() * 6);
      alert(`Your code is ${codes[codeNumber]}`);
      setIsValidateOn(false);
    }
  };

  return (
    <div className={style.container}>
      <p className={style.text}>
        Sign up for the newsletter and receive your special discount code now.
      </p>
      <form onSubmit={sendCode} className={style.form}>
        <label>
          <div>Your email</div>
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
        <Regulation
          checkCheckbox={checkCheckbox}
          isValidateOn={isValidateOn}
          setCheckCheckbox={setCheckCheckbox}
        />
        <div className={style.buttonBox}>
          <SendBtn />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
