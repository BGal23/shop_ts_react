import { useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import style from "./Cart.module.scss";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { Link, useLocation } from "react-router-dom";
import Quantity from "../Quantity/Quantity";

interface Props {
  setIsCartModalOpen?: (isOpenModal: boolean) => void;
}

const Cart: React.FC<Props> = ({ setIsCartModalOpen }) => {
  const cart = useSelector(selectCart);
  const location = useLocation();

  interface Cart {
    id: number;
    title: string;
    price: number;
    quantity: number;
  }

  return (
    <div className={style.container}>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className={style.product}>
            <Link
              to={`/product/${product.id}`}
              state={{ from: location }}
              onClick={() => {
                if (setIsCartModalOpen) {
                  setIsCartModalOpen(false);
                }
              }}
            >
              {product.title}
            </Link>
            <div className={style.box}>
              <div>
                <div>Price: {product.price.toFixed(2)} $</div>
                <div>
                  Total: {(product.quantity * product.price).toFixed(2)} $
                </div>
              </div>
              <div className={style.buttonsBox}>
                <Quantity product={product} />
                <AddToCartBtn product={product} isTitleShow={false} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={style.priceBox}>
        <h3>Price of all products:</h3>
        <span>
          <h3>
            {cart
              .reduce((total: number, product: Cart) => {
                return Number(total) + Number(product.quantity * product.price);
              }, 0)
              .toFixed(2)}{" "}
            $
          </h3>
        </span>
      </div>
    </div>
  );
};
export default Cart;
