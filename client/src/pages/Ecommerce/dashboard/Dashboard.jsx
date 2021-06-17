import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import "./dashboard.scss";
import Widget from "../../../components/Ecommerce/Widget/Widget";
import Featured from "../../../components/Ecommerce/Featured/Featured";
import Chart from "../../../components/Ecommerce/Chart/Chart";
import Table from "../../../components/Ecommerce/Table/Table";
import OrdersTable from "../../../components/Ecommerce/OrdersTable/OrdersTable";

const Dashboard = () => {


  return (
    <div className="dashboard">
      <Sidebar colorMenuDashboard={true}/>
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" theAmount="10" theDiff="5"/>
          <Widget type="order" theAmount="26" theDiff="3"/>
          <Widget type="earning" theAmount="40420" theDiff="4"/>
          <Widget type="balance" theAmount="8600" theDiff="4"/>
        </div>


        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} />
        </div>


        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
