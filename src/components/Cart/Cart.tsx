import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import { deleteProduct } from "../../redux/data/cartSlice";
import style from "./Cart.module.scss";

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
          <li key={product.id}>
            <div>{product.title}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Price: {product.quantity * product.price} $</div>
            <button
              type="button"
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Price of all products</h3>
        <p>
          {cart.reduce((total: number, product: Cart) => {
            return Number(total) + Number(product.quantity * product.price);
          }, 0)}
          $
        </p>
        <button>Buy!</button>
      </div>
    </div>
  );
};
export default Cart;
