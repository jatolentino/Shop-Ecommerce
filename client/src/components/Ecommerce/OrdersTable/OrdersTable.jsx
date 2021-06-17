import "./orderstable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../../redux/Order/OrderAction";



const OrdersTable = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.OrderReducer);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch, orderId]);

  const deliverHandler = async (id, i) => {
    const { data } = await axios.put(process.env.REACT_APP_SERVER_API + `order/${id}/deliver`);
    setOrderId(id);
  };

  
  return (
    <TableContainer component={Paper} className="orderstable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Amount ($)</TableCell>
            <TableCell className="tableCell">Action</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.reverse() &&
            orders.reverse().length > 0 &&
            orders.reverse().map((order, i) => (
              <TableRow key={order._id}>
                <TableCell className="tableCell">{order._id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={order.orderItems[0] && 
                      `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/c_scale,w_50/${order.orderItems[0]?.image_public_id}`} alt="" className="image" />
                    {order.orderItems[0]?.name}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{order.user_first_name + " " + order.user_last_name[0] + "."}</TableCell>
                <TableCell className="tableCell">{order.totalPrice}</TableCell>

                <TableCell className="tableCell">
                  <button disabled={order.isDelivered === false ? false : true} onClick={() => deliverHandler(order._id, i)}
                    style={{width: "100px", }}  className={`action
                      ${order.isDelivered === false
                          ? "ToShip"
                          : "Shipped"}
                    `} type="button" >
                    
                      {order.isDelivered === false ? <span> <LocalShippingOutlinedIcon  className="icon"  sx={{ fontSize: "18px" }} /> Ship </span> : <span>Shipped</span>} 
                    
                  </button>
                </TableCell>

                <TableCell className="tableCell">
                  {order.isDelivered === false
                    ? <span className="status ToShip">In progress</span>
                    : <span className="status Shipped">Completed</span>}
                </TableCell>

                
              </TableRow>
          ))}


        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;
