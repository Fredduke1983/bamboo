import axios from "axios";

export async function getProducts() {
  try {
    const response = await axios.get(
      "https://64f0745e8a8b66ecf779b155.mockapi.io/api/bamboos/products"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
