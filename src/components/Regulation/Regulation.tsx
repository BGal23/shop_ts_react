// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import style from "./Regulation.module.scss";

interface Props {
  checkCheckbox: boolean;
  isValidateOn: boolean;
  setCheckCheckbox: (checkCheckbox: boolean) => void;
}

const Regulation: React.FC<Props> = ({
  checkCheckbox,
  isValidateOn,
  setCheckCheckbox,
}) => {
  return (
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
          {!checkCheckbox && isValidateOn && "You must accept the regulation"}
        </div>
      </span>
    </label>
  );
};

export default Regulation;
