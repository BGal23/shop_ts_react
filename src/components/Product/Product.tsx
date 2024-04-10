import { useEffect, useState } from "react";
// import style from "./Product.module.scss";
import { getProduct } from "../../api/product";

interface Product {
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
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} />
          <h3>Price: {product.price} $</h3>
          <h3>Rate: {product.rating.rate}</h3>
          <h3>Count: {product.rating.count}</h3>
          <p>{product.description}</p>
        </div>
      )}
    </>
  );
};

export default Product;
