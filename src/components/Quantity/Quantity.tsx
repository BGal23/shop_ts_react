import { useDispatch } from "react-redux";
import { addProduct, minusProduct } from "../../redux/data/cartSlice";
import style from "./Quantity.module.scss";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  };
}

const Quantity: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <span className={style.container}>
      {product.quantity > 1 && (
        <button
          type="button"
          className={style.button}
          onClick={() => dispatch(minusProduct(product))}
        >
          -
        </button>
      )}
      <div className={style.quantity}>{product.quantity}</div>
      <button
        type="button"
        className={style.button}
        onClick={() => dispatch(addProduct(product))}
      >
        +
      </button>
    </span>
  );
};

export default Quantity;
