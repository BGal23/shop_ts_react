import { useEffect, useState } from "react";
import style from "./Product.module.scss";
import getProduct from "../../api/product.ts";
import Stars from "../Stars/Stars";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import BuyNowBtn from "../BuyNowBtn/BuyNowBtn";
import Quantity from "../Quantity/Quantity.tsx";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Props {
  id: number;
}

const Product = ({ id }: Props) => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    showProduct();
  }, []);

  const showProduct = async () => {
    setProduct(await getProduct(id));
  };

  return (
    <>
      {product && (
        <>
          <h2>{product.title}</h2>
          <div className={style.container}>
            <div className={style.imageBox}>
              <img className={style.image} src={product.image} />
            </div>
            <div>
              <span className={style.item}>
                <h3>Price: {product.price} $</h3>
                <AddToCartBtn product={product} isTitleShow={true} />
              </span>
              <span className={style.item}>
                <h3>Rate: {product.rating.rate}</h3>
                <Stars rate={product.rating.rate} />
              </span>
              <span className={style.item}>
                <h3>Count: {product.rating.count}</h3>
                <BuyNowBtn />
              </span>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.titleBox}>
              <h3>Description</h3>
            </div>
            <p>{product.description}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
