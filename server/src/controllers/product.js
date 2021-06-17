const Product = require("../models/Product");
const { cloudinary } = require("../utils/cloudinary");

exports.fetchProducts = async (req, res) => {
  try {
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Product.countDocuments({ ...keyword })
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ products, page, pages: Math.ceil(count / pageSize) })
  } catch (err) {
    console.log(err)
    res.status(500);
  }
};

exports.addProduct = async (req, res) => {

  try {
    const name = req.body.product_name;
    const description = req.body.product_description;
    const type = req.body.product_type;
    const price = req.body.product_price;
    const color = req.body.product_color;
    const total_in_stock = req.body.total_in_stock;
    const image_public_id = req.body.image_public_id;
    const file = req.files.file;

    const product = new Product({
      name,
      description,
      type,
      images: file.name,
      image_public_id,
      price,
      color,
      reviews: [],
      total_in_stock,
      createdAt: new Date().toISOString(),
    });

    await product.save();

    return res.status(200).json({
      message: "Product added",
    });
  } catch (err) {
    res.status(500);
  }
};

exports.fetchProduct = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Product.findById({ _id: id });

    res.status(200).json({
      product,
    });
  } catch (err) {
    res.status(500);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.body.productId;

    await Product.deleteOne({ _id: productId });
    const products = await Product.find({});

    return res.status(200).json({ message: "Successfully Deleted", products });
  } catch (err) {
    res.status(500);
  }
};


exports.editProduct = async (req, res) => {
 
  try {
    const prodId = req.body.product_id;
    const name = req.body.product_name;
    const description = req.body.product_description;
    const type = req.body.product_type;
    const price = req.body.product_price;
    const color = req.body.product_color;
    const image_public_id = req.body.image_public_id;
    const total_in_stock = req.body.total_in_stock;

    await Product.updateOne(
      { _id: prodId },
      {
        $set: {
          name,
          description,
          type,
          price,
          color,
          total_in_stock,
          image_public_id
        },
      }
    );
    res.status(200).json({
      message: "Product edited",
    })

  } catch(err) {
    res.status(500);
  }
}
