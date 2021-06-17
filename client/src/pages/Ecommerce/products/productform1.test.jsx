import "./addproducts.scss"
import React, { useState, useEffect } from "react";
import axios from "axios";
import validate from '../../../components/Products/validateinfo';
import { Link } from "react-router-dom";
import Resizer from "react-image-file-resizer";


const ProductForm = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_images, setProductImages] = useState("");
  const [product_type, setProductType] = useState("");
  const [product_color, setProductColor] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_totalInStock, setTotalInStock] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showUploadedImg, setshowUploadedImg] = useState(false);
  const [resizedImage, setResizedImage] = useState("");


  const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 360, 300, 'JPEG', 100, 0,
    uri => {
      resolve(uri);
    }, 'base64' );
  });

  const handleUploadedImg = async (e) => {
    setProductImages(e.target.files[0])
    let theDefaultName = e.target.files[0].name
    if(theDefaultName.includes(".jpg")){
      theDefaultName = theDefaultName.replace(".jpg", "")
    }
    else if (theDefaultName.includes(".png")){
      theDefaultName = theDefaultName.replace(".png", "")
    }
    else if(theDefaultName.includes(".jpeg")){
      theDefaultName = theDefaultName.replace(".jpeg", "")
    }
    
    const resize_image_uri = await resizeFile(e.target.files[0]);
    console.log(resize_image_uri)
    await fetch(resize_image_uri)
    .then((res) => res.blob())
    .then((blob) => {
      setResizedImage(blob)
    });  
  }


  // SHOW OR HIDE THE UPLOADED IMAGE
  useEffect(() => {
    if(product_images === ''){
      setshowUploadedImg(false)
    }else{
      setshowUploadedImg(true)
    }
  }, [product_images])

  useEffect(() => {
    if(showUploadedImg === true){
    var imgUpload = document.getElementById("uploadedImg");
    imgUpload.src = URL.createObjectURL(product_images);}
  }, [showUploadedImg])
  //***********************************


  const handleAddProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_description", product_description);
    formData.append("file", resizedImage)
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
      .catch((err) => console.log("whatever"));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8 bg-gray-100 bg-no-repeat bg-cover items-center">
      
      <div className="absolute bg-white opacity-60 inset-0 z-0" />
      <div className="sm:max-w-2xl w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-3 text-3xl font-bold text-gray-900">Add your product</h2>
          <p className="mt-2 text-sm text-gray-400">
            Fill your product's information here
          </p>
        </div>


        <form className="mt-8 space-y-3" onSubmit={handleAddProduct} encType="multipart/form-data">
          
          <div className="grid grid-cols-1">
            <label htmlFor="product_name" className="text-sm font-bold text-gray-500 tracking-wide">
              Product Name
            </label>
            <input
              type="text"
              className="text-base p-2 h-10 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700"
              placeholder="Name"
              id="product_name"
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
            />
            {product_name ==='' && <p className="error_color">{errors.product_name}</p>}
          </div>


          <div className="grid grid-cols-1">
            <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_description">
              Product Description
            </label>
            <textarea id="product_description" rows="4" className="block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-gray-700 " 
            value={product_description}
            onChange={(e) => setProductDescription(e.target.value)}
            placeholder="Write a description..."></textarea>
            {product_description === '' && <p className="error_color">{errors.product_description}</p>}
          </div>


          <div className="grid grid-cols-2">
            <div>
                <label className="text-sm font-bold text-gray-500 tracking-wide" htmlFor="product_type">
                Category
                </label>
                <select className="text-base h-10 p-2 placeholder-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-700 w-11/12"
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
                value={product_color}
                onChange={(e) => setProductColor(e.target.value)}
                />
                {product_color === '' && <p className="error_color">{errors.product_color}</p>}
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
                value={product_price}
                onChange={(e) => setProductPrice(e.target.value)}
                />
                {product_price === '' && <p className="error_color">{errors.product_price}</p>}
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
                value={product_totalInStock}
                onChange={(e) => setTotalInStock(e.target.value)}
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
                onChange={handleUploadedImg} />
              </label>
            </div>
          </div>


          <p className="text-sm text-gray-300  mb-3">
            <span>File type: png, jpg and jpeg</span>
          </p>
          {message !== "" && (
          <div className="sm:max-w-xl w-full p-15 mb-4 rounded-xl z-10 justify-center ">
              <div className={`alert alert-success flex justify-between`} role="alert">
                <div>
                {message}
                </div>
                <Link to="/ecommerce/products"><span style={{borderBottom: "1px solid"}}>View your product</span></Link>
              </div>
              
            </div>
          )}
          <div className="container grid place-items-center">
            <button
              className="bg-gray-700 my-0 w-1/2 flex-auto  justify-center text-gray-100 p-4 rounded-md tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-gray-900 shadow-lg
                                   cursor-pointer transition ease-in duration-300 ">
              <i className="flaticon-shopping-cart add-product-btn-icon font-normal"></i>
              Add
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ProductForm