import { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import CartContext from "../../contexts/cart-context";
import AuthContext from "../../contexts/auth-context";
import logo from "../../assets/img/logoShop.svg";
import "./MiddleHeader.css";
import TopHeader from "./TopHeader";
import "./TopHeader.css";



function MiddleHeader({ history }) {
  const context = useContext(CartContext);
  const Aucontext = useContext(AuthContext);
  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/shop/${keyword}`);
    } else {
      history.push("/");
    }
  };

  useEffect(() => {
    if (Aucontext && Aucontext.userId) {
      axios
        .get(process.env.REACT_APP_SERVER_API + `user/${Aucontext.userId}`)
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [Aucontext]);


  const handleLogout = () => {
    Aucontext.logout();
    history.push("/login");
  };

  return (
    <div className="middle-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="middle-header-logo">
              <Link to="/">
                <img src={logo} alt="image" />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="middle-header-search">
              <form onSubmit={submitHandler}>
                <div className="row align-items-center">
                  <div className="col-md-4 select-column">
                    <div className="form-group">
                      <select className="form-control list">
                        <option>Categories</option> 
                        <option value="1">Computers</option>
                        <option value="2">Audio</option>
                        <option value="2">Home Theater</option>
                        <option value="3">Laptop</option>
                        <option value="3">TV</option>
                        <option value="3">Mobiles</option>
                        <option value="3">Tablets</option>
                        <option value="3">Headphone</option>
                        <option value="3">Earphone</option>
                        <option value="3">Battery</option>
                        <option value="3">Watches</option>
                        <option value="3">Cameras</option>
                        <option value="3">Accessories</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="search-box">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search SHOP"
                        name="q"
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <button type="submit">
                        <i className="bx bx-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-3">
            <ul className="middle-header-optional">
              {Aucontext.token &&
                <li>
                  <Link to="/wishlist">
                    <i className="flaticon-heart"></i>
                  </Link>
                </li> 
              }
              <li>
                <Link to="/cart">
                  <i className="flaticon-shopping-cart"></i>
                  {context.cartItems && context.cartItems.length > 0 && (
                    <span>{context.cartItems.length}</span>
                  )}
                </Link>
              </li>
              <li>
                $
                {context.cartItems &&
                  context.cartItems.reduce((count, curItem) => {
                    return (
                      count +
                      parseInt(curItem.price) * parseInt(curItem.quantity || 0)
                    );
                  }, 0)}
              </li>

              <li >
                <span  className="flex flex-row">
                  {!Aucontext.token && <Link style={{marginLeft: '0px', color: 'white'}} to="/login">Login &nbsp;</Link>} {" | "}
                  {!Aucontext.token && <Link to="/register" style={{color: 'white'}}>&nbsp; Register </Link>}
                  {Aucontext.token &&  (
                    <div className="flex flex-col justify-center items-center ml-2 ">
                    <span className="text-sm">{user.username}</span>
                    
                    <button className="logout-btn text-sm " onClick={handleLogout}>
                      Logout
                    </button>
                    
                    </div>
                  )}
                </span>
              </li>


            </ul>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default withRouter(MiddleHeader);
