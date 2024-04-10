import Category from "../../components/Category/Category";
import { Link, useLocation } from "react-router-dom";

const OneCategory = () => {
  const location = useLocation();
  const categoryName: string = location.pathname.split("/categories/")[1];
  const goBackLink = location.state?.from.pathname || "/";

  return (
    <>
      <Link to={goBackLink}>Go to back</Link>
      <h2>{categoryName.toUpperCase().split("%20").join(" ")}</h2>
      <Category category={categoryName} limit={20} />
    </>
  );
};

export default OneCategory;
