import { Link } from "react-router-dom";
import style from "./Newsletter.module.scss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import SendBtn from "../SendBtn/SendBtn";

const Newsletter = () => {
  return (
    <div className={style.container}>
      <p className={style.text}>
        Sign up for the newsletter and receive your special discount code now.
      </p>
      <form className={style.form}>
        <label>
          <div>Your email</div>
          <input
            className={style.input}
            type="email"
            name="email"
            // onChange={(event) => setCheckEmail(event.target.value)}
          />
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
          />
          <span>
            I accept the{" "}
            <Link className={style.regulations} to="/regulations">
              regulations
            </Link>{" "}
            of this website
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
