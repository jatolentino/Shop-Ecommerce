import "./singlecustomer.scss";
import Sidebar from "../../../components/Ecommerce/Sidebar/Sidebar";
import Navbar from "../../../components/Ecommerce/Navbar/Navbar";
import Chart from "../../../components/Ecommerce/Chart/Chart";
import catavatar from "../../../assets/img/catavatar.jpg"

const Single = () => {
  return (
    <div className="singlecustomer">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jennie Nichols</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">user@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 682 323 6953</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  578 Michael Island, New Thomas, NC 34644
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">Customer (user)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Vendor Profits ( Last 6 Months)" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Single;
