// komunikasi dengan database
// bisa pake orm atau raw query

const prisma = require("../db");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  
  return products;
}

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  return product;
}

const insertProduct = async (newProductData) => {
  const product = await prisma.product.create({
    data: {
      name: newProductData.name,
      price: newProductData.price,
      description: newProductData.description,
      image: newProductData.image,
    },
  });

  return product;
}

const updateProduct = async (id, newProductData) => {
  const productData = await prisma.product.update({
    where: { id: id },
    data: {
      name: newProductData.name,
      price: newProductData.price,
      description: newProductData.description,
      image: newProductData.image,
    },
  });

  return productData;
}

const deleteProductById = async (id) => {
  await prisma.product.delete({
    where: { id: id },
  });
}

module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  updateProduct,
  deleteProductById,
}
