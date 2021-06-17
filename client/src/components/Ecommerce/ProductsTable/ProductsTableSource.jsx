import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const ProductColumns = [
    {
      field: "_id",
      headerName: "SKU",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row._id.substring(0, 10).toUpperCase()}
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "images",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/c_scale,w_50/${params.row.image_public_id}`} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price ($)",
      width: 100,
    },
    {
      field: "total_in_stock",
      headerName: "Stock (u)",
      width: 100,
    },
  ];
  
export {
    ProductColumns,
  }
  