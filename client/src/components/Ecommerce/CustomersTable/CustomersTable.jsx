import "./customerstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns, customerRows } from "./CustomerTableSource";
import { Link } from "react-router-dom";
import { useState } from "react";

const CustomersTable = () => {
  const [data, setData] = useState(customerRows);

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
            <Link to={{pathname: `/ecommerce/customers/user`}}  style={{ textDecoration: "none" }}>
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
    <div className="customerstable">
      <div className="datatableTitle">
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={customerColumns.concat(actionColumn)}
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

export default CustomersTable;
