import style from "./AddToCartBtn.module.scss";
import icons from "../../images/svg/icons.svg";
import { Product } from "../Category/Category";
import { addProduct, deleteProduct } from "../../redux/data/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/data/selectors";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  product: Product;
  isTitleShow: boolean;
}

const AddToCartBtn: React.FC<Props> = ({ product, isTitleShow }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCart);
  const [isInTheCart, setIsInTheCart] = useState(false);
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsInTheCart(cartList.some((inCart) => inCart.id === product.id));
  }, [cartList, product.id]);

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
      <span>
        {isInTheCart ? (!isMobile || isTitleShow) && "DELETE" : "ADD TO CART"}
      </span>
      <svg className={style.icon}>
        <use xlinkHref={isInTheCart ? `${icons}#delete` : `${icons}#cart`} />
      </svg>
    </button>
  );
};

export default AddToCartBtn;
