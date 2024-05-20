import style from "./Guest.module.scss";
import { options, radioButtons } from "./option.ts";
import { useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "@reduxjs/toolkit";
import { State } from "../../redux/data/selectors.ts";
import { UserData } from "../../redux/data/orderSlice.ts";

interface Props {
  title: string;
  addToForm: (
    data: Record<string, string | boolean | UserData>
  ) => UnknownAction;
  selectData: (state: State) => UserData;
}

const Guest = ({ title, addToForm, selectData }: Props) => {
  const userData: UserData = useSelector(selectData);
  const dispatch = useDispatch();

  const handleInput = (value: string, key: string) => {
    const formData: Record<string, string> = { [key]: value };
    dispatch(addToForm(formData));
  };

  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <form className={style.form}>
        <div className={style.radioInputs}>
          {radioButtons.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="payType"
                checked={userData.isCompany === option.value}
                onChange={() =>
                  dispatch(addToForm({ isCompany: option.value }))
                }
              />
              {option.label}
            </label>
          ))}
        </div>
        <div>
          {options.map((option, index) => (
            <label
              key={index}
              className={style.label}
              style={{
                display:
                  (userData.isCompany &&
                    (option.key === "firstName" ||
                      option.key === "lastName")) ||
                  (!userData.isCompany &&
                    (option.key === "company" || option.key === "nip"))
                    ? "none"
                    : "",
              }}
            >
              {option.name}
              <input
                className={style.input}
                type={option.type}
                placeholder={option.placeholder}
                value={userData[option.key]}
                onChange={(event) =>
                  handleInput(event.target.value, option.key)
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
