import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Image } from "cloudinary-react";
import axios from "axios";
import authContext from "../../contexts/auth-context";

function ProductsArea({ products, history, editProduct, deleteProduct }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const [role, setRole] = useState("user");
  const [product, setProduct] = useState({});
  const [imagePublicId, setImagePublicId] = useState(null);
  const [product_images, setProductImages] = useState("");
  const context = useContext(authContext);

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_SERVER_API + "user/check-role", {
        userId: context.userId,
      })
      .then((res) => setRole(res.data.role))
      .catch((err) => console.log(err));
  }, []);

  const goToDetails = (id) => {
    history.push(`/products-details/${id}`);
  };

  const openDeleteModal = (product, imagePublicId) => {
    setProduct(product);
    setImagePublicId(imagePublicId);
  };

  const openEditModal = (product, imagePublicId) => {
    setProduct(product);
    setName(product.name);
    setDescription(product.description);
    setProductImages(product.image_public_id);
    setType(product.type);
    setColor(product.color);
    setPrice(product.price);
    setInStock(product.total_in_stock);
    setImagePublicId(imagePublicId);
  };


  
  const handleChange = async e => {

    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`,
      formData,
      config
    );

    setProductImages(data.public_id);
  };

  return (
    <div className="products-area-wrap container">
      {true ? (
        <>
        <div className="container">
          <table className="order_list_table product_list_table">
            <thead>
              <tr className="order_table100_head">
                <th className="order_column1">Image</th>
                <th className="order_column1">Name</th>
                <th className="order_column1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product, index) => {
                  return (
                    <tr key={product._id} className="product_tr">
                      <td className="order_column1">
                        <Image
                          key={index}
                          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                          publicId={product.image_public_id}
                          width="50"
                          crop="scale"
                        />
                      </td>
                      <td
                        onClick={() => goToDetails(product._id)}
                        style={{ cursor: "pointer" }}
                        className="order_column2"
                      >
                        {product.name}
                      </td>
                      <td className="order_column4">
                        <button
                          type="button"
                          onClick={() =>
                            openDeleteModal(product, product.imageId)
                          }
                          className="btn btn-danger"
                          data-toggle="modal"
                          data-target="#deleteModal"
                        >
                          Delete
                        </button>
                        
                        {" "}
                        <button
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#editModal"
                          onClick={() =>
                            openEditModal(product, product.imageId)
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          </div>
          
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="deleteModalLabel">
                    Delete - {product.name}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => deleteProduct(product._id, imagePublicId)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div
            className="modal fade"
            id="editModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="editModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editModalLabel">
                    Edit - {name}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="product_images">Product Images</label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option>All Type</option>
                        <option value="accessories">Accessories</option>
                        <option value="cameras">Cameras</option>
                        <option value="computers">Computers</option>
                        <option value="laptop">Laptop</option>
                        <option value="mobile">Mobile</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Product Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Total in stock"
                        value={inStock}
                        onChange={(e) => setInStock(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                    onClick={() =>
                      editProduct(
                        product._id,
                        name,
                        description,
                        product_images,
                        type,
                        color,
                        price,
                        inStock
                      )
                    }
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h2>You are not allowed to view this page</h2>
      )}
    </div>
  );
}

export default withRouter(ProductsArea);
