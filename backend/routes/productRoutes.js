import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc    Fetch all product
// @route   GET /api/products
// @access  Publuc
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.json(product);
  })
);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Publuc

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;