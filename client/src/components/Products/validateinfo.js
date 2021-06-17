export default function validateInfo(values) {
  let errors = {};

  if (!values.product_name) {
    errors.product_name = "Product Name is required";
  }

  if (!values.product_description) {
    errors.product_description = "Description is required";
  }
  if (!values.product_images) {
    errors.product_images = "Image is required";
  }

  if (!values.product_type) {
    errors.product_type = "Product type is required";
  }

  if (!values.product_color) {
    errors.product_color = "Product color is required";
  }
  if (!values.product_price) {
    errors.product_price = "Product Price is required";
  }
  if (!values.product_totalInStock) {
    errors.product_totalInStock = "Stock is required";
  }
  return errors;
}
