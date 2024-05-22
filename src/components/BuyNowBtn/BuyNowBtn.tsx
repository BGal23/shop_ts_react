import { Link } from "react-router-dom";
import style from "./BuyNowBtn.module.scss";
import { Product } from "../Product/Product";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/data/cartSlice";

interface Props {
  product?: Product;
  setIsCartModalOpen?: (isOpenModal: boolean) => void;
}

const BuyNowBtn: React.FC<Props> = ({ setIsCartModalOpen, product }) => {
  const dispatch = useDispatch();

  const handleBtn = async () => {
    if (product) {
      if (setIsCartModalOpen) {
        setIsCartModalOpen(false);
      }

      console.log(product);

      const productToCart = {
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
      };

      dispatch(addProduct(productToCart));
    }
  };

  return (
    <Link to="/order/cart" className={style.link} onClick={handleBtn}>
      BUY NOW!
    </Link>
  );
};

export default BuyNowBtn;
