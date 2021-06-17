import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { UserColumns } from "./UserColumns";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/auth-context";
import axios from "axios";

const Datatable = () => {
  const [products, setProducts] = useState([]);
  const context = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [imagePublicId, setImagePublicId] = useState(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_API + "products/")
      .then((res) => {
        setProducts(res.data.products);
        setData(res.data.products);
      })
      .catch((err) => console.log(err));
  }, 
  []);


  const openDeleteModal = (paramobj) => {
    setProduct(paramobj);
    setImagePublicId(paramobj._id);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <button variant="contained"
              className="deleteButton"
              data-toggle="modal"
              data-target="#deleteModal" onClick={() => openDeleteModal(params.row)}>
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const deleteProduct = (id) => {
    axios
      .post(process.env.REACT_APP_SERVER_API + "products/delete-product", {
        productId: id,
      })
      .then((res) => {
        if (res.data.message === "Successfully Deleted") {
          setProducts(res.data.products);
          setData(res.data.products);
        }
      })
      .catch((err) => console.log(err));
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
        rows={data}
        columns={UserColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
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

    </div>
  );
};

export default Datatable;
