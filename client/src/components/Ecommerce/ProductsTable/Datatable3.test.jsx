//EDIT WORKS, but needs tunning :D
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "./UserColumns";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/auth-context";
import axios from "axios";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Datatable = () => {
  const context = useContext(AuthContext);
  const [imagePublicId, setImagePublicId] = useState(null);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  //to edit
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const [role, setRole] = useState("user");
  const [product_images, setProductImages] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + "products/")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, 
  []);


  const openDeleteModal = (paramobj) => {
    setProduct(paramobj);
    setImagePublicId(paramobj._id);
  };

  const openEditModal = (paramobj, imagePublicId) => {
    setProduct(paramobj);
    setName(paramobj.name);
    setDescription(paramobj.description);
    setProductImages(paramobj.image_public_id);
    setType(paramobj.type);
    setColor(paramobj.color);
    setPrice(paramobj.price);
    setInStock(paramobj.total_in_stock);
    setImagePublicId(imagePublicId);
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div className="viewButton"
              data-toggle="modal"
              data-target="#editModal" onClick={() => openEditModal(params.row)}>
              <EditOutlinedIcon  className="icon" />
              Edit
            </div>

            <div className="deleteButton"
              data-toggle="modal"
              data-target="#deleteModal" onClick={() => openDeleteModal(params.row, params.row.imageId)}>
              <DeleteOutlineOutlinedIcon  className="icon" />
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  // FUNCTION TO DELETE A PRODCUT
  const deleteProduct = (id) => {
    axios
      .post(process.env.REACT_APP_SERVER_API + `products/delete-product`, {
        productId: id,
      })
      .then((res) => {
        if (res.data.message === "Successfully Deleted") {
          setProducts(res.data.products);
        }
      })
      .catch((err) => console.log(err));
  };

  // FUNCTION TO EDIT A PRODUCT
  const editProduct = (
    prod_id,
    prod_name,
    prod_description,
    prod_image,
    prod_type,
    prod_color,
    prod_price,
    prod_instock,
    imagePublicId,
    prod_image_public_id
  ) => {
    const formData = new FormData();
    formData.append("product_id", prod_id);
    formData.append("product_name", prod_name);
    formData.append("product_description", prod_description);

    formData.append("product_type", prod_type);
    formData.append("product_color", prod_color);
    formData.append("product_price", prod_price);
    formData.append("total_in_stock", prod_instock);
    formData.append("image_public_id", prod_image);
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    axios
      .post(process.env.REACT_APP_SERVER_API + "products/edit-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.message === "Product edited") {
            return axios.get(process.env.REACT_APP_SERVER_API + "products/").then((res) => {
            setProducts(res.data.products);
          });
        }
      })
      .catch((err) => console.log(err));
  };

  //handle change on modal FORM
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
    <div>
    <div className="datatable">
      <div className="datatableTitle">
        Your Products
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={products}
        columns={UserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>


    <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Delete - {product.name}
            </h5>
            <button type="button" className="close" data-dismiss="modal"               aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary"               data-dismiss="modal" >
              Cancel
            </button>
            <button type="button" className="btn btn-danger" data-dismiss="modal"
              onClick={() => deleteProduct(product._id, imagePublicId)}> Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="editModal" tabIndex="-1" role="dialog"             aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">
              Edit - {name}
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Product Name"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Product Description"
                  value={description} onChange={(e) => setDescription(e.target.value)}>
                </textarea>
              </div>
              <div className="form-group">
                <label htmlFor="product_images">Product Images</label>
                <input type="file" className="form-control" accept="image/*"
                  onChange={handleChange} />
              </div>
              <div className="form-group">
                <select className="form-control" value={type} 
                onChange={(e) => setType(e.target.value)} >
                  <option>All Type</option>
                  <option value="accessories">Accessories</option>
                  <option value="cameras">Cameras</option>
                  <option value="computers">Computers</option>
                  <option value="laptop">Laptop</option>
                  <option value="mobile">Mobile</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Product Color"
                  value={color} onChange={(e) => setColor(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Product Price"
                  value={price} onChange={(e) => setPrice(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Total in stock"
                  value={inStock} onChange={(e) => setInStock(e.target.value)} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Cancel
            </button>
            <button type="button" className="btn btn-success" data-dismiss="modal"
              onClick={() => editProduct( 
                product._id,
                name,
                description,
                product_images,
                type,
                color,
                price,
                inStock
              )}>
            Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);};

export default Datatable;
