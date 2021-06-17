import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";
import english from "../../assets/img/english.png";
import germany from "../../assets/img/germany.png";
import arab from "../../assets/img/arab.png";
import portugal from "../../assets/img/portugal.png";
import china from "../../assets/img/china.png";
import "./TopHeader.css";

function TopHeader({ shippingMessage, history }) {
  const context = useContext(AuthContext);

  const handleLogout = () => {
    context.logout();
    history.push("/login");
  };

  return (
    <div className="top-header-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="top-header-content">
              <span>
                <i className="flaticon-check"></i>
                {shippingMessage}
              </span>
            </div>
          </div>

          <div className="col-lg-6 text-right">
            <ul className="top-header-optional">
              <li>
                <div className="dropdown language-switcher d-inline-block">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>
                      Language <i className="bx bx-chevron-down"></i>
                    </span>
                  </button>

                  <div className="dropdown-menu">
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <img src={english} className="shadow-sm" alt="flag" />
                      <span>English</span>
                    </a>
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <img src={arab} className="shadow-sm" alt="flag" />
                      <span>العربيّة</span>
                    </a>
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <img src={germany} className="shadow-sm" alt="flag" />
                      <span>Deutsch</span>
                    </a>
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <img src={portugal} className="shadow-sm" alt="flag" />
                      <span>Português</span>
                    </a>
                    <a
                      href="#"
                      className="dropdown-item d-flex align-items-center"
                    >
                      <img src={china} className="shadow-sm" alt="flag" />
                      <span>简体中文</span>
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <i className="bx bxs-lock-alt"></i>
                <span>
                  {!context.token && <Link to="/login">Login</Link>} Or{" "}
                  {!context.token && <Link to="/register">Register</Link>}
                  {context.token && (
                    <button className="logout-btn" onClick={handleLogout}>
                      Logout
                    </button>
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

export default withRouter(TopHeader);
