import { Link, useLocation } from "react-router-dom";
import style from "./Presentation.module.scss";
import { useEffect, useState } from "react";
import getAllCategories from "../../api/categories";

const Presentation = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    showAllCategories();
  }, []);

  const showAllCategories = async () => {
    setCategories(await getAllCategories());
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        <Link to="/categories">CATEGORIES</Link>
      </h2>
      <ul className={style.ulContainer}>
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/categories/${category}`}
            state={{ from: location }}
          >
            <li className={style.liContainer}>
              <h3>{category.toUpperCase()}</h3>
              <div>#photo</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Presentation;
