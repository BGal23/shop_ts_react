import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import { deleteProduct } from "../../redux/data/cartSlice";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  interface Cart {
    id: number;
    title: string;
    price: number;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product: Cart) => (
          <li key={product.id}>
            <div>{product.title}</div>
            <div>Price: {product.price} $</div>
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
            return Number(total) + Number(product.price);
          }, 0)}
          $
        </p>
        <button>Buy!</button>
      </div>
    </div>
  );
};
export default Cart;
