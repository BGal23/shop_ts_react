import { useEffect, useState } from "react";
import getCategory from "../../api/category";
import style from "./Category.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Category = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = async () => {
    setProducts(await getCategory(category));
  };

  return (
    <div>
      <h2>{category.toUpperCase()}</h2>
      <ul className={style.ulContainer}>
        {products.map((product) => (
          <li className={style.liContainer} key={product.id}>
            <h3 className={style.title}>{product.title}</h3>
            <img className={style.image} src={product.image} />
            <h3>Price {product.price} $</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
