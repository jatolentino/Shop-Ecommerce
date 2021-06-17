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
import {useState} from 'react'
import AuthContext from "../../../contexts/auth-context";



const Sidebar = ({colorMenuProducts, colorMenuDashboard, dropTheMenu}) => {
  const { dispatch } = useContext(DarkModeContext);
  const [showDropMenu, setshowDropMenu] = useState(false)
  const history = useHistory();
  const context = useContext(AuthContext);



  const handleDropMenu = () => {
    history.push('/viewproducts')
    if(showDropMenu === false){
      setshowDropMenu(true)}
    else{
      setshowDropMenu(false)
    }
  }

  const handleLogout = () => {
    context.logout();
    history.push("/loginthevendor");
  };

  const [isHoveringDash, setIsHoveringDash] = useState(false);
  const [isHoveringProd, setIsHoveringProd] = useState(false);

  const handleMouseEnter = (menu) => {
    if(menu === "dash"){
      setIsHoveringDash(true);

    }
    else if(menu === "prod"){
      setIsHoveringProd(true);
    }
  };

  const handleMouseLeave = (menu) => {
    if(menu === "dash"){
      setIsHoveringDash(false);
    }
    else if(menu === "prod"){
      setIsHoveringProd(false);
    }
  };


  return (
    <div className="sidebar">
      <div className="top mt-3">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <img className="w-20" src={logo}/>
        </Link>
      </div>

      <div className="center ml-3">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/dashboard" >
          <li onMouseEnter={() => handleMouseEnter('dash')} onMouseLeave={() => handleMouseLeave('dash')} 
          className={colorMenuDashboard ? "bg-white mr-4": "" }>
            <DashboardIcon style={{color:  colorMenuDashboard ? "#9ca3af" :  isHoveringDash  ? "white" : "#9ca3af"}}  className="icon" />
            <span style={{color:  colorMenuDashboard ? "#9ca3af" : isHoveringDash ? "white" : "#9ca3af"}} >Dashboard</span>
          </li>
          </Link>


          <p className="title">STORE</p>
          <div >
            <li onClick={() => handleDropMenu()} onMouseEnter={() => handleMouseEnter('prod')} onMouseLeave={() => handleMouseLeave('prod')} 
            className={colorMenuProducts ?  "flex justify-between items-center w-full bg-white mr-4 ": "flex justify-between items-center w-full m-auto"}>
              <Link to="/viewproducts">
                <LocalGroceryStoreOutlinedIcon style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}}  className="icon" />
                <span  style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}} >Products</span>
              </Link>
              {showDropMenu === false ? <ExpandMoreIcon onClick={()=> setshowDropMenu(true)} style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}}
               className="icon mr-5" /> :  <ExpandLessIcon className="icon mr-5" onClick={()=> setshowDropMenu(false)} style={{color:  colorMenuProducts ? ('#9ca3af') : (isHoveringProd ? 'white' : '#9ca3af')}} />}
            </li>
          
            {showDropMenu && 
            <div>
              <Link to="/addtheproduct"  style={{ textDecoration: "none" }}>
                <li className="ml-4">
                <AddIcon className="icon" />
                  <span>Add Product</span>
                </li>
              </Link>
              <Link to="/viewproducts"  style={{ textDecoration: "none" }}>
                <li className="ml-4">
                  <ViewListIcon className="icon" />
                  <span>View</span>
                </li>
              </Link>

            </div>
            }
          </div>



          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontOutlinedIcon className="icon" />
              <span>Vendors</span>
            </li>
          </Link>

          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <GroupOutlinedIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>

          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>

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
            <span>Messages</span>
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

    </div>
  );
};

export default Sidebar;
