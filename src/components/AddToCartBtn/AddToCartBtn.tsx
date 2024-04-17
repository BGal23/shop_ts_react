import style from "./AddToCartBtn.module.scss";
import icons from "../../images/svg/icons.svg";
import { Product } from "../Category/Category";
import { addProduct, deleteProduct } from "../../redux/data/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import { useEffect, useState } from "react";

interface Props {
  product: Product;
}

const AddToCartBtn: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);
  const [isInTheCart, setIsInTheCart] = useState(false);

  useEffect(() => {
    setIsInTheCart(cartList.some((inCart) => inCart.id === product.id));
  }, [cartList]);

  const addToCart = async () => {
    const productToCart = {
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
    };

    dispatch(addProduct(productToCart));
  };

  return (
    <button
      className={
        isInTheCart ? `${style.addMore} ${style.button}` : style.button
      }
      type="button"
      onClick={
        isInTheCart
          ? () => dispatch(deleteProduct(product.id))
          : () => addToCart()
      }
    >
      <span>{isInTheCart ? "DELETE" : "ADD TO CART"}</span>
      <svg className={style.icon}>
        <use xlinkHref={isInTheCart ? `${icons}#delete` : `${icons}#cart`} />
      </svg>
    </button>
  );
};

export default AddToCartBtn;
