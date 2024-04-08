import getAllCategories from "../../api/categories";
import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";

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
        <Category key={index} category={category} />
      ))}
    </>
  );
};

export default Categories;
