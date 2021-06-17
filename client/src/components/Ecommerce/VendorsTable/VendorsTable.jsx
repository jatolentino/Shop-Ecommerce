import "./vendorstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { vendorColumns, vendorRows } from "./VendorTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const VendorsTable = () => {
  const [data, setData] = useState(vendorRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* it is necessary to pull the name from database like in src\components\Ecommerce\ProductsTable\ProductsTable.jsx */}
            {/* but we are using mock data, so we use the string "vendor" (in `/vendorprofile/vendor/`), referring to the user.name from DB */}
            {/* <Link to={{pathname: `/vendorprofile/${params.row.name}`}}  style={{ textDecoration: "none" }}> */}
            <Link to={{pathname: `/ecommerce/vendors/vendor`}}  style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="vendorstable">
      <div className="datatableTitle">
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={vendorColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
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
  );
};

export default VendorsTable;
