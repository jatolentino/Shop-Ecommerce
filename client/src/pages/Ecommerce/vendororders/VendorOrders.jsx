import "./vendororders.scss";
import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import OrdersTable from "../../../components/Ecommerce/OrdersTable/OrdersTable";

const VendorOrders = () => {
  return (
    <div className="vendororders">
      <Sidebar colorMenuOrders={true}/>
      <div className="singleContainer">
        <Navbar />
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <OrdersTable/>
        </div>
      </div>
    </div>
  );
};

export default VendorOrders;
