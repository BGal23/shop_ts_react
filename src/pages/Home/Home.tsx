import { useEffect } from "react";
//import { getAllProducts } from "../../api/products";

const Home = () => {
  useEffect(() => {
    showAllProducts();
  });

  const showAllProducts = async () => {
    //console.log(await getAllProducts());
  };

  return <p>Home</p>;
};

export default Home;
