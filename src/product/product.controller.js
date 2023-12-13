// layer untu handle req and res
// handle validasi body
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  editProductById,
  deleteProductById,
} = require("./product.service");

router.get("/", async (req, res) => {
  const products = await getAllProducts();

  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);

    res.send(product);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProductData = req.body;
    const products = await createProduct(newProductData);

    res.send({
      data: products,
      message: "Product created successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const newProductData = req.body;

    if (
      !(
        newProductData.name &&
        newProductData.description &&
        newProductData.image &&
        newProductData.price
      )
    ) {
      res.status(400).send("some field are missing");
    }

    const productData = await editProductById(productId, newProductData);

    res.send({
      data: productData,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const newProductData = req.body;
  
    const productData = await editProductById(productId, newProductData);
  
    res.send({
      data: productData,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    await deleteProductById(productId);

    res.send("product deleted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
