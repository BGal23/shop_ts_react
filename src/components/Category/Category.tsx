import { useEffect, useState } from "react";
import getCategory from "../../api/category";
import style from "./Category.module.scss";
import { Link, useParams } from "react-router-dom";

interface Product {
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
  const { categoryId } = useParams<{ categoryId: string }>();

  useEffect(() => {
    showProducts();
  }, [categoryId]);

  const showProducts = async () => {
    setProducts(await getCategory(category, limit));
  };

  return (
    <div>
      <ul className={limit < 5 ? style.ulContainer : ""}>
        {products.map((product) => (
          <li className={style.liContainer} key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3 className={style.title}>{product.title}</h3>
              <img
                className={style.image}
                src={product.image}
                alt={product.title}
              />
              <h3>Price {product.price} $</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
