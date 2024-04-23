import { useSelector } from "react-redux";
import Category from "../../components/Category/Category";
import { Link, useLocation } from "react-router-dom";
import { selectCategoriesName } from "../../redux/data/selectors";
import style from "./Categories.module.scss";

const Categories = () => {
  const location = useLocation();
  const categories = useSelector(selectCategoriesName);

  return (
    <>
      <h1>ALL CATEGORIES</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>
            <Link
              className={style.title}
              to={`${category}`}
              state={{ from: location }}
            >
              {category.toUpperCase()}
            </Link>
          </h2>
          <Category category={category} limit={3} />
        </div>
      ))}
    </>
  );
};

export default Categories;
