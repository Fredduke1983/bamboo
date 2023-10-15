import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get(
      // "https://bamboo-paradise-or8p.onrender.com/api/products/getall"
      "http://localhost:3065/api/products/getall"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
