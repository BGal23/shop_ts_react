import { Link, useLocation } from "react-router-dom";
import style from "./Presentation.module.scss";
import { useSelector } from "react-redux";
import { selectCategoriesName } from "../../redux/data/selectors";
import electronics from "../../images/picture/electronic.png";
import jewelery from "../../images/picture/jewelery.png";
import menClothing from "../../images/picture/men_clothing.png";
import womenClothing from "../../images/picture/women_clothing.png";

const Presentation = () => {
  const location = useLocation();
  const categoriesName = useSelector(selectCategoriesName);

  interface Category {
    id: number;
    name: string;
    src: string | boolean;
    description: string;
  }

  const categories: Category[] = categoriesName.map((name, index) => {
    return {
      id: index,
      name,
      src:
        (index === 0 && electronics) ||
        (index === 1 && jewelery) ||
        (index === 2 && menClothing) ||
        (index === 3 && womenClothing),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestias magni quae dignissimos repellat eaque? Illo quis temporibus asperiores adipisci nulla, nisi dolorum sapiente minima est? Asperiores at adipisci fugit quisquam illum.",
    };
  });

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        <Link to="/categories">CATEGORIES</Link>
      </h2>
      <ul className={style.ulContainer}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.name}`}
            state={{ from: location }}
          >
            <li className={style.liContainer}>
              <div className={style.categoryName}>
                <h3>{category.name.toUpperCase()}</h3>
              </div>
              <div className={style.imageContainer}>
                <img className={style.image} src={category.src} />
                <div className={style.description}>{category.description}</div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Presentation;
