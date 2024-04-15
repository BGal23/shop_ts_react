import Cart from "../Cart/Cart";
import style from "./CartModal.module.scss";

interface Props {
  isCartModalOpen: boolean;
  setIsCartModalOpen: (isOpenModal: boolean) => void;
}

const CartModal: React.FC<Props> = ({
  isCartModalOpen,
  setIsCartModalOpen,
}) => {
  return (
    <div
      className={style.container}
      style={{
        left: isCartModalOpen ? undefined : "100vw",
      }}
    >
      <Cart />
    </div>
  );
};

export default CartModal;
