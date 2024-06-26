import { Link, useLocation } from "react-router-dom";
import Product from "../../components/Product/Product";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";

const OneProduct = () => {
  const location = useLocation();
  const goBackLink = location.state?.from.pathname || "/";
  const productId: number = Number(location.pathname.split("/product/")[1]);

  return (
    <div>
      <Link to={goBackLink}>
        <GoBackBtn />
      </Link>
      <Product id={productId} />
    </div>
  );
};
export default OneProduct;
