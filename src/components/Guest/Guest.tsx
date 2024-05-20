import style from "./Guest.module.scss";
import { options, radioButtons } from "./option";
import { useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "@reduxjs/toolkit";
import { State } from "../../redux/data/selectors";
import { UserData } from "../../redux/data/orderSlice";

interface Props {
  title: string;
  addToForm: (data: Partial<UserData>) => UnknownAction;
  selectData: (state: State) => UserData;
}

const Guest = ({ title, addToForm, selectData }: Props) => {
  const userData: UserData = useSelector(selectData);
  const dispatch = useDispatch();

  const handleInput = (value: string, key: keyof UserData) => {
    const formData: Partial<UserData> = { [key]: value };
    dispatch(addToForm(formData));
  };

  const getValue = (key: keyof UserData): string => {
    const value = userData[key];
    return typeof value === "string" ? value : "";
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
                value={getValue(option.key as keyof UserData)}
                onChange={(event) =>
                  handleInput(event.target.value, option.key as keyof UserData)
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
