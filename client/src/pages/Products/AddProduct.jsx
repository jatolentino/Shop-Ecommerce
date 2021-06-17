import React from "react";
import PageTitle from "../../components/Common/PageTitle";
import AddProductArea from "../../components/Products/AddProductArea";

function AddProduct() {
  return (
    <div className="add-product-wrapper">
      <PageTitle title="Add Product" />
      <AddProductArea />
    </div>
  );
}

export default AddProduct;
