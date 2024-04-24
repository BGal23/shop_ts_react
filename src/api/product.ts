import axios from "axios";

const getProduct = async (id: number) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export default getProduct;
