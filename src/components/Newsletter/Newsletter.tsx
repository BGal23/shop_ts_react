import style from "./Newsletter.module.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import SendBtn from "../SendBtn/SendBtn";
import { FormEvent, useState } from "react";
import codes from "../../assets/codes";

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
        <label className={style.checkboxBox}>
          <Checkbox
            name="checkbox"
            icon={<Icon.FiCheck color="var(--font-main-color" size={20} />}
            checked={false}
            size={20}
            borderColor="var(--font-main-color)"
            borderWidth={1.5}
            style={{
              cursor: "pointer",
              backgroundColor: "var(--background-main-color)",
              marginLeft: "1em",
            }}
            labelStyle={{ marginLeft: 5, userSelect: "none" }}
            onChange={(event: boolean) => setCheckCheckbox(event)}
          />
          <span>
            <div>
              I accept the{" "}
              <a
                className={style.regulations}
                href={"/shop_ts_react/public/Regulation.pdf"}
                target="_blank"
              >
                regulations
              </a>{" "}
              of this website
            </div>
            <div className={style.warning}>
              {!checkCheckbox &&
                isValidateOn &&
                "You must accept the regulation"}
            </div>
          </span>
        </label>
        <div className={style.buttonBox}>
          <SendBtn />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
