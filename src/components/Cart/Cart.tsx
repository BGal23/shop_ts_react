import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import { addProduct, minusProduct } from "../../redux/data/cartSlice";
import style from "./Cart.module.scss";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

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
            <Link to={`product/${product.id}`}>{product.title}</Link>
            <div className={style.box}>
              <div>
                <div>× {product.quantity}</div>
                <div>
                  Price: {(product.quantity * product.price).toFixed(2)} $
                </div>
              </div>
              <span className={style.buttonsBox}>
                {product.quantity > 1 && (
                  <button
                    type="button"
                    className={style.button}
                    onClick={() => dispatch(minusProduct(product))}
                  >
                    -1
                  </button>
                )}
                <AddToCartBtn product={product} />
                <button
                  type="button"
                  className={style.button}
                  onClick={() => dispatch(addProduct(product))}
                >
                  +1
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h3>Price of all products</h3>
        <span className={style.priceBox}>
          <h3>
            {cart
              .reduce((total: number, product: Cart) => {
                return Number(total) + Number(product.quantity * product.price);
              }, 0)
              .toFixed(2)}{" "}
            $
          </h3>

          <BuyNowBtn />
        </span>
      </div>
    </div>
  );
};
export default Cart;
