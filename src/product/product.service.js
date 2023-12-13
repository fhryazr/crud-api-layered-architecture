// handle business logic
// agar function reusable
const prisma = require("../db");
const { findProducts, findProductById, insertProduct, updateProduct } = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw Error("Product not found");
  }

  return product;
};

const createProduct = async (newProductData) => {
  const product = await insertProduct(newProductData);

  return product;
};

const editProductById = async (id, newProductData) => {
  await getProductById(id);
  const productData = await updateProduct(id, newProductData);

  return productData;
};

const deleteProductById = async (id) => {
  await getProductById(id);
  await deleteProductById(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  editProductById,
  deleteProductById,
};
