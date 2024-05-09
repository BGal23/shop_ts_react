import { useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import Cart from "../Cart/Cart";
import style from "./CartModal.module.scss";
import icons from "../../images/svg/icons.svg";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";

interface Props {
  isCartModalOpen: boolean;
  setIsCartModalOpen: (isOpenModal: boolean) => void;
}

const CartModal: React.FC<Props> = ({
  isCartModalOpen,
  setIsCartModalOpen,
}) => {
  const cart = useSelector(selectCart);
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
        {cart.length > 0 ? (
          <>
            <Cart setIsCartModalOpen={setIsCartModalOpen} />
            <div className={style.button}>
              <BuyNowBtn setIsCartModalOpen={setIsCartModalOpen} />
            </div>
          </>
        ) : (
          "Your shopping cart is empty"
        )}
      </div>
    </div>
  );
};

export default CartModal;
