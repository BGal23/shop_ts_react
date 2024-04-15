import { useEffect, useState } from "react";
// import style from "./Product.module.scss";
import { getProduct } from "../../api/product";
import { addProduct } from "../../redux/data/cartSlice";
import { useDispatch } from "react-redux";

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

export interface ProductToCart {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface Props {
  id: number;
}

const Product = ({ id }: Props) => {
  const [product, setProduct] = useState<Product>();
  const dispatch = useDispatch();

  useEffect(() => {
    showProduct();
  }, []);

  const showProduct = async () => {
    setProduct(await getProduct(id));
  };

  const addToCart = async () => {
    let productToCart: ProductToCart;
    if (product) {
      productToCart = {
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
      };
      dispatch(addProduct(productToCart));
    }
  };

  return (
    <div>
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
      <button type="button" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
