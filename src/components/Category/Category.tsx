import { useEffect, useState } from "react";
import getCategory from "../../api/category.ts";
import style from "./Category.module.scss";
import { Link, useLocation } from "react-router-dom";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface Props {
  category: string;
  limit: number;
}

const Category = ({ category, limit }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation();

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = async () => {
    setProducts(await getCategory(category, limit));
  };

  return (
    <div>
      <ul
        className={limit <= 3 ? style.ulContainerLess : style.ulContainerMore}
      >
        {products.map((product) => (
          <li className={style.liContainer} key={product.id}>
            <Link to={`/product/${product.id}`} state={{ from: location }}>
              <div className={style.titleBox}>
                <h3 className={style.title}>{product.title}</h3>
              </div>
              <div className={style.imageBox}>
                <img
                  className={style.image}
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </Link>
            <div className={style.box}>
              <p className={style.price}>Price {product.price} $</p>
              <AddToCartBtn product={product} isTitleShow={true} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
