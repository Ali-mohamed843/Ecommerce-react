import websiteData from "../../products.json";

export function getProductById(id) {
  return websiteData.products.find((product) => product.id === id);
}
