import { Link } from "react-router-dom";
import style from "./Presentation.module.scss";
import { useEffect, useState } from "react";
import getAllCategories from "../../api/categories";

const Presentation = () => {
  const [categories, setCategories] = useState<string[]>([]);

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
          <li className={style.liContainer} key={index}>
            <h3>{category.toUpperCase()}</h3>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Presentation;
