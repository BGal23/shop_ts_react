import axios from "axios";

const getCategory = async (category: string, limit: number) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
  );
  return res.data;
};

export default getCategory;
