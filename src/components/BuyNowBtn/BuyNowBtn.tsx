import { Link } from "react-router-dom";
import style from "./BuyNowBtn.module.scss";

interface Props {
  setIsCartModalOpen?: (isOpenModal: boolean) => void | undefined;
}

const BuyNowBtn: React.FC<Props> = ({ setIsCartModalOpen }) => {
  return (
    <Link
      to="/order/cart"
      className={style.link}
      onClick={() => {
        if (setIsCartModalOpen) {
          setIsCartModalOpen(false);
        }
      }}
    >
      BUY NOW!
    </Link>
  );
};
export default BuyNowBtn;
