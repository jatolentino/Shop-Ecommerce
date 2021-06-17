import "./productstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { ProductColumns } from "./ProductsTableSource";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/auth-context";
import axios from "axios";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ProductsTable = () => {
  const context = useContext(AuthContext);
  const [imagePublicId, setImagePublicId] = useState(null);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const location = useLocation();


  //to edit
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const [role, setRole] = useState("user");
  const [product_images, setProductImages] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showUploadedImg, setshowUploadedImg] = useState(false);
  const [theUploadedImg, setTheUploadedImg] = useState("")

  //set product to Datagrid line  <Datagrid   Line207, rows={products}
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + "products/")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, 
  []);

  
  //*** SHOW OR HIDE THE UPLOADED IMAGE ****
  useEffect(() => {
    if(theUploadedImg === ''){
      setshowUploadedImg(false)
    }else{
      setshowUploadedImg(true)
    }
  }, [theUploadedImg])

  useEffect(() => {
    if(showUploadedImg === true){
    var imgUpload = document.getElementById("uploadedImg");
    var imgUrl = `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/c_scale,w_50/${product_images}`
    imgUpload.src = imgUrl
  }
  }, [showUploadedImg])
  //**************************************


  const openDeleteModal = (paramobj) => {
    setProduct(paramobj);
    setImagePublicId(paramobj._id);
  };

  const openEditModal = (paramobj, imagePublicId) => {
    setProduct(paramobj);
    setTheUploadedImg(paramobj.image_public_id)
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
      .post(process.env.REACT_APP_SERVER_API + "products/delete-product", {
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
            setMessage(product + "saved");
          });
        }
      })
      .catch((err) => console.log(err));
  };

  //handle change on modal FORM
  const handleChange = async e => {
    var imgUpload = document.getElementById("uploadedImg");
    imgUpload.src = "" //cleanning previous image
    const image = e.target.files[0];
    imgUpload.src = URL.createObjectURL(image)
    const formData = new FormData();
    formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    formData.append("file", image);
    
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
    <div className="productstable">
      <div className="datatableTitle">
        Your Products
        <Link to="/ecommerce/products/add" className="link">
          Add Product
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={products}
        columns={ProductColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
        initialState={{
          sorting: {
            sortModel: [{ field: '_id', sort: 'desc' }],
          },
        }}
        sx={{
          ".MuiTablePagination-displayedRows": {
            "marginTop": "13px",
          },
          ".MuiTablePagination-selectLabel":{
            "marginTop": "13px",
          }
        }}
      />
    </div>

    {/* DELETE MODAL */}
    <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Delete {product.name}
            </h5>
            <button type="button" className="close" data-dismiss="modal"               aria-label="Close" >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this product?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" >
              Cancel
            </button>
            <button type="button" className="btn btn-danger" data-dismiss="modal"
              onClick={() => deleteProduct(product._id, imagePublicId)}> Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* EDIT MODAL */}
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
            
          
          {/* FORM */}
          <form className="mt space-y-3" encType="multipart/form-data">
          <div className="grid grid-cols-1">
            <label htmlFor="product_name" className="text-sm font-bold text-gray-500 tracking-wide">
              Product Name
            </label>
            <input
              type="text"
              className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
              placeholder="Name"
              id="product_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="grid grid-cols-1">
            <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_description">
              Product Description
            </label>
            <textarea id="product_description" rows="4" className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 " 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a description..."></textarea>
          </div>


          <div className="grid grid-cols-2">
            <div>
                <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_type">
                Category
                </label>
                <select className="text-base h-10 p-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
                value={type}
                onChange={(e) => setType(e.target.value)}
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
            </div>

            <div className="ml-3 -mr-5">
                <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_color">
                Color&nbsp;&nbsp;
                </label>
                <input
                type="text"
                className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
                placeholder="black"
                id="product_color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                />
            </div>
          </div>

          <div className="grid grid-cols-2 ">
            <div>
                <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_price">
                Price (USD)
                </label>
                <input
                className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
                type="text"
                placeholder="0"
                id="product_price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            <div className="ml-3 -mr-5">
                <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_totalInStock">
                Total in Stock
                </label>
                <input
                className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
                type="text"
                placeholder="0"
                id="product_totalInStock"
                value={inStock}
                onChange={(e) => setInStock(e.target.value)}
                />
                </div>
          </div>

          {showUploadedImg &&
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex items-center ">
              <label className="flex flex-col rounded-lg border-2 border-gray-500  h-30  w-1/4">
              <img id="uploadedImg" style={{width: "100%", borderRadius: "0.5rem"}}></img>
              </label>

              <label className="flex flex-col rounded-lg border-2 border-dashed h-30  ml-10 w-1/4">
              <canvas id= "canv2" ></canvas>
              </label>
            </div>
          </div>
          }

          <div className="grid grid-cols-1 space-y-2 ">
            <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_images">
              Product Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-2 border-dashed w-full h-40 p-10 group text-center">
                <div className="cursor-pointer h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto ">
                    
                    <svg
                        className="mx-auto h-14 w-14 text-gray-400 cursor-pointer"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="True"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag & drop an image or </span>
                    <span className="text-blue-600 hover:underline">
                      select a file
                    </span>{" "}
                  </p>
                </div>
                <input type="file" className="hidden"
                accept="image/*"
                onChange={handleChange} />
              </label>
            </div>
          </div>


          <p className="text-sm text-gray-300  mb-3">
            <span>File type: png, jpg and jpeg</span>
          </p>
          {message !== "" && (
          <div className="sm:max-w-xl w-full p-15 mb-4 rounded-xl z-10 justify-center ">
              <div className={`alert alert-success`} role="alert">
                {message}
              </div>
            </div>
          )}
        </form>


          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">
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
            Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);};

export default ProductsTable;
