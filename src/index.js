const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json()); // midleware untuk parse body json

app.get("/api", (req, res) => {
  res.send("Hello World! Welcom to My Api");
});

const productController = require('./product/product.controller')

app.use('/products', productController)

app.listen(PORT, () => {
  console.log("Express server listening on port : " + PORT);
});
