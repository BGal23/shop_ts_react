import axios from "axios";

const getCategory = async (category: string, limit: number) => {
  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
    );
    return res.data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export default getCategory;
