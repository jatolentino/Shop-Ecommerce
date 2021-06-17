import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ViewListIcon from '@mui/icons-material/ViewList';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PagesIcon from '@mui/icons-material/Pages';
import MessageIcon from '@mui/icons-material/Message';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import { Link, useHistory } from "react-router-dom";
import { DarkModeContext } from "../../../contexts/darkModeContext";
import { useContext, useEffect } from "react";
import logo from "../../../assets/img/logoShop.svg" 
import catavatar from "../../../assets/img/catavatar.jpg" 
import {useState} from 'react'
import AuthContext from "../../../contexts/auth-context";

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TakeoutDiningOutlinedIcon from '@mui/icons-material/TakeoutDiningOutlined';

const Sidebar = ({colorMenuProducts, colorMenuDashboard, 
  dropTheMenu, colorMenuVendors, colorMenuCustomers, colorMenuOrders}) => {
  const { dispatch } = useContext(DarkModeContext);
  const [showDropMenu, setshowDropMenu] = useState(false)
  const history = useHistory();
  const context = useContext(AuthContext);



  const handleDropMenu = () => {
    history.push('/ecommerce/products')
    if(showDropMenu === false){
      setshowDropMenu(true)}
    else{
      setshowDropMenu(false)
    }
  }

  const handleLogout = () => {
    context.logout();
    history.push("/vendor/login");
  };

  const [isHoveringDash, setIsHoveringDash] = useState(false);
  const [isHoveringProd, setIsHoveringProd] = useState(false);
  const [isHoveringVendors, setIsHoveringVendors] = useState(false);
  const [isHoveringCustomers, setIsHoveringCustomers] = useState(false);
  const [isHoveringOrders, setIsHoveringOrders] = useState(false);

  const handleMouseEnter = (menu) => {
    if(menu === "dash"){
      setIsHoveringDash(true);
    }
    else if(menu === "prod"){
      setIsHoveringProd(true);
    }
    else if(menu === "vendors"){
      setIsHoveringVendors(true);
    }
    else if(menu === "customers"){
      setIsHoveringCustomers(true);
    }
    else if(menu === "orders"){
      setIsHoveringOrders(true);
    }
  };

  const handleMouseLeave = (menu) => {
    if(menu === "dash"){
      setIsHoveringDash(false);
    }
    else if(menu === "prod"){
      setIsHoveringProd(false);
    }
    else if(menu === "vendors"){
      setIsHoveringVendors(false);
    }
    else if(menu === "customers"){
      setIsHoveringCustomers(false);
    }
    else if(menu === "orders"){
      setIsHoveringOrders(false);
    }
  };

  useEffect(() => {
    setshowDropMenu(dropTheMenu)
  },[dropTheMenu])

  return (
    <div className="sidebar" >
      <div className="top mt-3">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="w-20" src={logo}/>
        </Link>
      </div>

      <div className="center ml-3">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/ecommerce/dashboard" >
          <li onMouseEnter={() => handleMouseEnter('dash')} onMouseLeave={() => handleMouseLeave('dash')} 
          className={colorMenuDashboard ? "bg-white mr-4": "" }>
            <DashboardIcon style={{color:  colorMenuDashboard ? "#9ca3af" :  isHoveringDash  ? "white" : "#9ca3af"}}  className="icon" />
            <span style={{color:  colorMenuDashboard ? "#9ca3af" : isHoveringDash ? "white" : "#9ca3af"}} >Dashboard</span>
          </li>
          </Link>


          <p className="title">STORE</p>
          <div >
            <li  onClick={() => handleDropMenu()} onMouseEnter={() => handleMouseEnter('prod')} onMouseLeave={() => handleMouseLeave('prod')} 
            className={colorMenuProducts ?  "flex justify-between items-center  bg-white mr-4 ": "flex justify-between items-center  mr-4"}>
              <Link to="/ecommerce/products">
                <LocalGroceryStoreOutlinedIcon style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}}  className="icon" />
                <span  style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}} >Products</span>
              </Link>
              {showDropMenu === false ? <ExpandLessIcon onClick={()=> setshowDropMenu(true)} style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white ' : '#9ca3af ')}}
               className="icon " /> :  <ExpandMoreIcon className="icon " onClick={()=> setshowDropMenu(true)} style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}} />}
            </li>
          
            {showDropMenu && 
            <div>
              <Link to="/ecommerce/products/add"  style={{ textDecoration: "none" }}>
                <li className="ml-4">
                <AddIcon className="icon" />
                  <span>Add Product</span>
                </li>
              </Link>
              <Link to="/ecommerce/products"  style={{ textDecoration: "none" }}>
                <li className="ml-4">
                  <ViewListIcon className="icon" />
                  <span>View</span>
                </li>
              </Link>

            </div>
            }
          </div>



          <Link to="/ecommerce/vendors" >
          <li onMouseEnter={() => handleMouseEnter('vendors')} onMouseLeave={() => handleMouseLeave('vendors')} 
          className={colorMenuVendors ? "bg-white mr-4": "" }>
            <StorefrontOutlinedIcon style={{color:  colorMenuVendors ? "#9ca3af" :  isHoveringVendors  ? "white" : "#9ca3af"}}  className="icon" />
            <span style={{color:  colorMenuVendors ? "#9ca3af" : isHoveringVendors ? "white" : "#9ca3af"}} >Vendors</span>
          </li>
          </Link>



          <Link to="/ecommerce/customers" >
            <li onMouseEnter={() => handleMouseEnter('customers')} onMouseLeave={() => handleMouseLeave('customers')} 
            className={colorMenuCustomers ? "bg-white mr-4": "" }>
              <GroupOutlinedIcon style={{color:  colorMenuCustomers ? "#9ca3af" :  isHoveringCustomers  ? "white" : "#9ca3af"}}  className="icon" />
              <span style={{color:  colorMenuCustomers ? "#9ca3af" : isHoveringCustomers ? "white" : "#9ca3af"}} >Customers</span>
            </li>
          </Link>

          


          <Link to="/ecommerce/orders" >
            <li onMouseEnter={() => handleMouseEnter('orders')} onMouseLeave={() => handleMouseLeave('orders')} 
            className={colorMenuOrders ? "bg-white mr-4": "" }>
              <CreditCardIcon style={{color:  colorMenuOrders ? "#9ca3af" :  isHoveringOrders  ? "white" : "#9ca3af"}}  className="icon" />
              <span style={{color:  colorMenuOrders ? "#9ca3af" : isHoveringOrders ? "white" : "#9ca3af"}} >Orders</span>
            </li>
          </Link>




          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>



          <p className="title">CHANNELS</p>
          <li>
            <PagesIcon className="icon" />
            <span>Landing Page</span>
          </li>

          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <li>
            <EmailOutlinedIcon  className="icon" />
            <span>ChatGPT</span>
          </li>

          <li>
            <MenuBookOutlinedIcon className="icon" />
            <span>Blog</span>
          </li>



          <p className="title">TOOLS</p>
          <li>
            <InsertChartOutlinedIcon className="icon" />
            <span>Statistics</span>
          </li>
          <li>
            <TravelExploreOutlinedIcon className="icon" />
            <span>SEO</span>
          </li>
          <li>
            <MonitorHeartOutlinedIcon className="icon" />
            <span>Status</span>
          </li>

          <li>
            <BugReportOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>



          <p className="title">ACCOUNT</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <div onClick={() => handleLogout()}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </div>


        </ul>
      </div>
      
      <div className="toDark -ml-1 -mb-5 flex fixed justify-between  flex-row bottom-20 p-4 "
       style={{width:"230px"}}>
          <div className="item ml-1">
            <img src={catavatar}
              alt="" style={{width: "50px", height:"50px", borderRadius: "50%"}}/>
            
          </div>
          <div className="flex flex-col mr-10 mt-1">
            <span style={{color: "#9ca3af", fontSize: "14px"}}>
                John Doe
            </span>

            <Link to={{pathname: `/ecommerce/vendors/vendor`}} >
            <span style={{color: "#9ca3af", fontSize: "14px", textDecoration: "underline"}}>
                View profile
            </span>
            </Link>
            
          </div>
      </div>

      <div className="bottomSet -ml-0.5 flex fixed justify-between  flex-row bottom-0 p-4"
       style={{width:"230px"}}>
          <div>
            <NotificationsOutlinedIcon className="icon " style={{color:  "#9ca3af", fontSize: "18px"}}  />
          </div>

          <div>
            <QuestionAnswerOutlinedIcon className="icon" style={{color:  "#9ca3af", fontSize: "18px"}}  />
          </div>

          <div>
            <SettingsOutlinedIcon className="icon" style={{color:  "#9ca3af", fontSize: "18px"}}  />
          </div>

          <div>
            <TakeoutDiningOutlinedIcon className="icon" style={{color:  "#9ca3af", fontSize: "18px"}}  />
          </div>
      </div>


    </div>
  );
};

export default Sidebar;
