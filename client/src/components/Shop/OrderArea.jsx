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
              <th className="order_column1">Tracking Id</th>
              <th className="order_column1">Item</th>
              <th className="order_column1">Image</th>
              <th className="order_column2">Name</th>
              <th className="order_column4">Total</th>
              <th className="order_column5">Cost</th>
              <th className="order_column5">Paid</th>

              <th className="order_column5">Action</th>
            </tr>
          </thead>
          <tbody >
            {orders.reverse() &&
              orders.reverse().length > 0 &&
              orders.reverse().map((order, i) => (
                <tr key={order._id}>
                  <td className="order_column1" style={{fontSize: "12px"}}>{order._id}</td>
                  <td className="order_column1" style={{fontSize: "12px"}}>{order.orderItems[0]?.name}</td>
                  <td className="order_column1">
                    <div className="cellWrapper">
                      <img src={order.orderItems[0] && 
                        `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload/c_scale,w_50/${order.orderItems[0]?.image_public_id}`} alt="" className="image" />
                    </div>
                  </td>
                  <td className="order_column2" style={{fontSize: "13px"}}>{order.user_first_name}</td>
                  <td className="order_column2" style={{fontSize: "13px"}}>{order.user_first_name}</td>
                  <td className="order_column4" style={{fontSize: "13px"}}>${order.totalPrice}</td>
                  <td className="order_column5" style={{fontSize: "13px"}}>
                    {order.isPaid === false ? "Paid" : "Paid"}
                  </td>
                  <td>
                    <button
                      onClick={() => deliverHandler(order._id, i)} style={{width:"100px", }} disabled={order.isDelivered}
                      className={
                        order.isDelivered === false
                          ? "border-2 text-white bg-red-500 border-red-500 p-2 rounded-md  hover:bg-red-600 hover:border-red-600"
                          : "border-2  border-gray-500 p-2 rounded-md text-gray-500 cursor-default opacity-50"
                      }
                      type="button"
                    >
                      <span className="order-confirm" style={{fontSize: "13px"}}>{order.isDelivered === false
                        ? "I Received it"
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
