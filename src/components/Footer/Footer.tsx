import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import icons from "../../images/svg/icons.svg";
import { FormEvent } from "react";

const Footer = () => {
  const sendNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email: string = formData.get("email") as string;

    if (email.length < 6) {
      alert("Your email is to short :(");
    } else {
      alert("Thanks for joining our team :)");
    }
  };

  return (
    <div className={style.container}>
      <p className={style.title}>
        &copy; 2024 Fake Shop Company.{<br />} All rights reserved.
      </p>

      <div className={style.dataBox}>
        <p>
          Contact
          <Link className={style.link} to="mailto:contact@fakeshop.com">
            contact@fakeshop.com
          </Link>
        </p>

        <span className={style.visitBox}>
          Visit us on
          <Link
            className={style.link}
            to="https://facebook.com"
            target="_blank"
          >
            <svg className={style.icon}>
              <use xlinkHref={`${icons}#facebook`} />
            </svg>
          </Link>
          <Link className={style.link} to="https://twitter.com" target="_blank">
            <svg className={style.icon}>
              <use xlinkHref={`${icons}#twitter`} />
            </svg>
          </Link>
          <Link
            className={style.link}
            to="https://instagram.com"
            target="_blank"
          >
            <svg className={style.icon}>
              <use xlinkHref={`${icons}#instagram`} />
            </svg>
          </Link>
        </span>

        <p>
          Navigation
          <Link className={style.link} to="/categories">
            Categories
          </Link>{" "}
          |
          <Link className={style.link} to="/about_us">
            About Us
          </Link>{" "}
          |
          <Link className={style.link} to="/login">
            Login
          </Link>
        </p>
      </div>
      <div className={style.newsletterBox}>
        <p>− Newsletter −</p>
        <form className={style.form} onSubmit={sendNewsletter}>
          <label>
            <input
              name="email"
              type="email"
              className={style.input}
              placeholder="Your email"
            />
          </label>
          <button type="submit" className={style.button}>
            <svg className={style.sendIcon}>
              <use xlinkHref={`${icons}#send`} />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
