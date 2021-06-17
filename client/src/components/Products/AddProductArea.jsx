import React, { useState } from "react";
import axios from "axios";
import validate from './validateinfo';

function AddProductArea() {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_images, setProductImages] = useState("");
  const [product_type, setProductType] = useState("");
  const [product_color, setProductColor] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_totalInStock, setTotalInStock] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_description", product_description);
    formData.append("file", product_images);
    formData.append("product_type", product_type);
    formData.append("product_color", product_color);
    formData.append("product_price", product_price);
    formData.append("total_in_stock", product_totalInStock);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    setErrors(validate(formData));
    
    axios
      .post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`, formData)
      .then((res) => {
        if (res.statusText === "OK") {
          let image_public_id = res.data.public_id;
          formData.append("image_public_id", image_public_id);
          return axios
            .post(process.env.REACT_APP_SERVER_API + "products/add-product", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              if (res.data.message === "Product added") {
                setMessage(product_name + " added");
                setProductName("");
                setProductDescription("");
                setProductType("");
                setProductImages("");
                setProductColor("");
                setProductPrice("");
                setTotalInStock("");
                setErrors('');
              }
            });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-product-area-wrap ptb-50">
      <div className="container">
        <div className="add-product-form">
          {message !== "" && (
            <div className={`alert alert-success`} role="alert">
              {message}
            </div>
          )}
          <h2>Product's Detail</h2>
          <hr />

          <form onSubmit={handleAddProduct} encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                id="product_name"
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
              />
              {product_name ==='' && <p className="error_color">{errors.product_name}</p>}
            </div>


            <div className="form-group">
              <label htmlFor="product_description">Product Description</label>
              <textarea
                className="form-control"
                id="product_description"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
              {product_description === '' && <p className="error_color">{errors.product_description}</p>}
            </div>


            <div className="form-group">
              <label htmlFor="product_images">Product Images</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={(e) => setProductImages(e.target.files[0])}
              />
              {product_images === '' && <p className="error_color">{errors.product_images}</p>}
            </div>


            <div className="form-group">
              <label htmlFor="product_type">Product Type</label>
              <select
                className="form-control"
                value={product_type}
                onChange={(e) => setProductType(e.target.value)}
              >
                <option>All Type</option>
                <option value="accessories">Accessories</option>
                <option value="audio">Audio</option>
                <option value="beauty_picks">Beauty Picks</option>
                <option value="cameras">Cameras</option>
                <option value="computers">Computers</option>
                <option value="electronics">Electronics</option>
                <option value="laptop">Laptop</option>
                <option value="mobile">Mobile</option>
                <option value="watches">Watches</option>
                <option value="headphone">Headphone</option>
              </select>
              {product_type === '' && <p className="error_color">{errors.product_type}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="product_color">Product Color</label>
              <input
                type="text"
                className="form-control"
                placeholder="Color"
                id="product_color"
                value={product_color}
                onChange={(e) => setProductColor(e.target.value)}
              />
              {product_color === '' && <p className="error_color">{errors.product_color}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="product_price">Product Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                id="product_price"
                value={product_price}
                onChange={(e) => setProductPrice(e.target.value)}
              />
               {product_price === '' && <p className="error_color">{errors.product_price}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="product_totalInStock">Total in stock</label>
              <input
                type="text"
                className="form-control"
                placeholder="Total in stock"
                id="product_totalInStock"
                value={product_totalInStock}
                onChange={(e) => setTotalInStock(e.target.value)}
              />
              {product_totalInStock === '' && <p className="error_color">{errors.product_totalInStock}</p>}
            </div>

            <button className="add-product-btn"><i className="flaticon-shopping-cart
             add-product-btn-icon"></i>Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProductArea;
