import { useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import style from "./Cart.module.scss";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";
import { Link } from "react-router-dom";
import Quantity from "../Quantity/Quantity";

const Cart = () => {
  const cart = useSelector(selectCart);

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
      {cart.length > 0 ? (
        <div>
          <h3>Price of all products</h3>
          <span className={style.priceBox}>
            <h3>
              {cart
                .reduce((total: number, product: Cart) => {
                  return (
                    Number(total) + Number(product.quantity * product.price)
                  );
                }, 0)
                .toFixed(2)}{" "}
              $
            </h3>

            <BuyNowBtn />
          </span>
        </div>
      ) : (
        "Your shopping cart is empty"
      )}
    </div>
  );
};
export default Cart;
