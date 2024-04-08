import axios from "axios";

const getCategory = async (category: string) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.data;
};

export default getCategory;
