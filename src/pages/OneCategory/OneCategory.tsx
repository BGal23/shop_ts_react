import Category from "../../components/Category/Category";

import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import { Link, useLocation } from "react-router-dom";

const OneCategory = () => {
  const location = useLocation();
  const categoryName: string = location.pathname.split("/categories/")[1];
  const goBackLink = location.state?.from.pathname || "/";

  return (
    <>
      <Link to={goBackLink}>
        <GoBackBtn />
      </Link>
      <h2>{categoryName.toUpperCase().split("%20").join(" ")}</h2>
      <Category category={categoryName} limit={20} />
    </>
  );
};

export default OneCategory;
