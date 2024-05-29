import style from "./SearchModal.module.scss";
import icons from "../../images/svg/icons.svg";

interface Props {
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (isOpenModal: boolean) => void;
}

const SearchModal: React.FC<Props> = ({
  isSearchModalOpen,
  setIsSearchModalOpen,
}) => {
  return (
    <div
      className={style.container}
      style={{ top: isSearchModalOpen ? "3em" : "" }}
    >
      <div className={style.box}>
        <div className={style.inputBox}>
          <svg className={style.iconSearch}>
            <use xlinkHref={`${icons}#search`} />
          </svg>
          <input className={style.input} />
        </div>
        <button
          className={style.closeBtn}
          onClick={() => setIsSearchModalOpen(false)}
          type="button"
        >
          <svg className={style.icon}>
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
