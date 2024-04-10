import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";
import { removeProduct } from "../../redux/products/operations";

const Cart = () => {
  const cart = useSelector(selectProducts);
  const dispatch = useDispatch();

  interface Cart {
    id: string;
    name: string;
    number: number;
  }

  const deleteProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product: Cart) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>Price: {product.number} $</div>
            <button type="button" onClick={() => deleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Price of all products</h3>
        <p>
          {cart.reduce((total: number, product: Cart) => {
            return Number(total) + Number(product.number);
          }, 0)}
        </p>
        <button>Buy!</button>
      </div>
    </div>
  );
};
export default Cart;
