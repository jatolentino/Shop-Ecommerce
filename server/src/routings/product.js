const express = require("express");
const router = express.Router();

const checkAuth = require("../middlewares/check-auth");
const productController = require("../controllers/product");

router.get("/", productController.fetchProducts);
router.get("/fetch-product/:productId", productController.fetchProduct);
router.post("/add-product", productController.addProduct);
router.post("/edit-product", productController.editProduct);
router.post("/delete-product", productController.deleteProduct);

module.exports = router;
