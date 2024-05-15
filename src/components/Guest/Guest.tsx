import { useEffect, useState } from "react";
import style from "./Guest.module.scss";
import options from "./option.ts";
import { useDispatch } from "react-redux";
import { UnknownAction } from "@reduxjs/toolkit";

interface Props {
  title: string;
  addToForm: (data: Record<string, string>) => UnknownAction;
}

const Guest = ({ title, addToForm }: Props) => {
  const [isCompany, setIsCompany] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (value: string, key: string) => {
    const formData: Record<string, string> = { [key]: value };
    dispatch(addToForm(formData));
  };

  useEffect(() => {
    dispatch(addToForm({ firstName: "", lastName: "", company: "", nip: "" }));
  }, [addToForm, dispatch, isCompany]);

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
              <input
                className={style.input}
                type={option.type}
                onChange={(event) =>
                  handleInput(
                    event.target.value,
                    isCompany && option.secondKey
                      ? option.secondKey
                      : option.key
                  )
                }
              />
            </label>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Guest;
