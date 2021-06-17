import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../redux/Order/OrderAction";

const OrderArea = () => {
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
    <>
      <div className="container">
        <table className="order_list_table">
          <thead>
            <tr className="order_table100_head">
              <th className="order_column1">Id</th>
              <th className="order_column1">Image</th>
              <th className="order_column2">User</th>
              <th className="order_column4">Total</th>
              <th className="order_column5">Paid</th>
              <th className="order_column6">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.length > 0 &&
              orders.map((order, i) => (
                <tr key={order._id}>
                  <td className="order_column1">{order._id}</td>
                  <td className="order_column1">
                    <div className="cellWrapper">
                      <img src={order.orderItems[0] && 
                        `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/c_scale,w_50/${order.orderItems[0]?.image_public_id}`} alt="" className="image" />
                    </div>
                  </td>
                  <td className="order_column2">{order.user_first_name}</td>
                  <td className="order_column2">{order.user_first_name}</td>
                  <td className="order_column4">${order.totalPrice}</td>
                  <td className="order_column5">
                    {order.isPaid === false ? "Not Paid" : "Paid"}
                  </td>
                  <td className="order_column6">
                    {order.isDelivered === false
                      ? "Not Delivered"
                      : "Delivered"}
                  </td>
                  <td>
                    <button
                      onClick={() => deliverHandler(order._id, i)}
                      className={
                        order.isDelivered === false
                          ? "order-pending"
                          : "order-button"
                      }
                      type="button"
                    >
                      <span className="order-confirm">{order.isDelivered === false
                        ? "confirm delivery"
                        : "confirmed"} </span>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderArea;
