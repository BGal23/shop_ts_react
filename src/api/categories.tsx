import axios from "axios";

const getAllCategories = async () => {
  const res = await axios.get("https://fakestoreapi.com/products/categories");
  return res.data;
};

export default getAllCategories;
