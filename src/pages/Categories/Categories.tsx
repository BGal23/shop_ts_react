import getAllCategories from "../../api/categories";
import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    showAllCategories();
  }, []);

  const showAllCategories = async () => {
    setCategories(await getAllCategories());
  };

  return (
    <>
      <h1>ALL CATEGORIES</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>
            <Link to={`${category}`}>{category.toUpperCase()}</Link>
          </h2>
          <Category category={category} limit={3} />
        </div>
      ))}
    </>
  );
};

export default Categories;
