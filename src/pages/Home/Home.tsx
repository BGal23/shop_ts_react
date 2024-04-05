import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Presentation from "../../components/Presentation/Presentation";
import { getAllProducts } from "../../api/products";

const Home = () => {
  useEffect(() => {
    showAllProducts();
  });

  const showAllProducts = async () => {
    console.log(await getAllProducts());
  };

  return (
    <>
      <Hero />
      <Presentation />
    </>
  );
};

export default Home;
