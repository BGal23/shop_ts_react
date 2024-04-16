import Cart from "../Cart/Cart";
import style from "./CartModal.module.scss";
import icons from "../../images/svg/icons.svg";

interface Props {
  isCartModalOpen: boolean;
  setIsCartModalOpen: (isOpenModal: boolean) => void;
}

const CartModal: React.FC<Props> = ({
  isCartModalOpen,
  setIsCartModalOpen,
}) => {
  return (
    <div className={isCartModalOpen ? style.backGround : ""}>
      <div
        className={style.container}
        style={{
          left: isCartModalOpen ? undefined : "105vw",
        }}
      >
        <div className={style.box}>
          <h2>Shopping Cart</h2>
          <button
            className={style.closeBtn}
            onClick={() => setIsCartModalOpen(false)}
            type="button"
          >
            <svg className={style.icon}>
              <use xlinkHref={`${icons}#close`} />
            </svg>
          </button>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default CartModal;
