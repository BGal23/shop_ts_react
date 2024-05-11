import { useState } from "react";
import style from "./Guest.module.scss";
import options from "./option";

interface Props {
  title: string;
}

const Guest = ({ title }: Props) => {
  const [isCompany, setIsCompany] = useState(false);

  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <form className={style.form}>
        <div className={style.radioInputs}>
          <label>
            <input
              type="radio"
              name="payType"
              checked={!isCompany}
              onChange={() => setIsCompany(false)}
            />
            Private person
          </label>
          <label>
            <input
              type="radio"
              name="payType"
              onChange={() => setIsCompany(true)}
            />
            Company
          </label>
        </div>

        <div>
          {options.map((option, index) => (
            <label key={index} className={style.label}>
              {isCompany && option.secondName ? option.secondName : option.name}
              <input className={style.input} type={option.type} />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Guest;
