import { Link, useLocation } from "react-router-dom";
import Product from "../../components/Product/Product";

const OneProduct = () => {
  const location = useLocation();
  const productId: number = Number(location.pathname.split("/product/")[1]);

  return (
    <div>
      <Link to="/categories">Go to back</Link>
      <Product id={productId} />
    </div>
  );
};
export default OneProduct;
