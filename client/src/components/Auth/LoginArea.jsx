import React, { useRef, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import AuthContext from "../../contexts/auth-context";
import "./loginarea.scss"

function LoginArea({customClass = "", history }) {
  const email = useRef("");
  const password = useRef("password");
  const [alertMsg, setAlertMsg] = useState(null);
  const context = useContext(AuthContext);
  const [loading, setLoading] = useState(false)


  const Loader = () => (
    <div className="spinner">
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.38798 12.616C3.36313 12.2306 2.46328 11.5721 1.78592 10.7118C1.10856 9.85153 0.679515 8.82231   0.545268 7.73564C0.411022 6.64897 0.576691 5.54628 1.02433 4.54704C1.47197 3.54779 2.1845 2.69009 3.08475   2.06684C3.98499 1.4436 5.03862 1.07858 6.13148 1.01133C7.22435 0.944078 8.31478 1.17716 9.28464    1.68533C10.2545 2.19349 11.0668 2.95736 11.6336 3.89419C12.2004 4.83101 12.5 5.90507 12.5 7"
          stroke="white"
        />
      </svg>
    </div>
  )





  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    fetch(process.env.REACT_APP_SERVER_API +"user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.id && res.role === "vendor"){
          alert("You are not a user, please register as a customer. Thank you!")
        }
        if (res.id && res.role === "user") {
          email.current.value = "";
          password.current.value = "";
          // add values in the context, so that src\components\Layout\Navbar.jsx, receive the values (line 538)
          context.login(res.token, res.id, res.tokenExpiration, res.role);
          localStorage.setItem("token", JSON.stringify(res.token));
          localStorage.setItem("userId", JSON.stringify(res.id));
          localStorage.setItem(
            "tokenExpiration",
            JSON.stringify(res.tokenExpiration)
          );
          localStorage.setItem("role", JSON.stringify(res.role));
          history.push("/");
        } else if (res.error) {
          setAlertMsg(res.error);
        } else if (res.errors) {
          let errors = Object.values(res.errors);
          setAlertMsg(errors);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={"login-form" + customClass}>
      {alertMsg &&
        (Array.isArray(alertMsg) ? (
          <div className="alert alert-danger" role="alert">
            <ul className="errors" style={{ marginBottom: 0 }}>
              {alertMsg.map((msg) => (
                <li key={msg} className="error">
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={`alert alert-success`} role="alert">
            {alertMsg}
          </div>
        ))}

      <div>
        <h2 style={{margin: "auto",width: "50%", textAlign:"center"}}>Login</h2>
      </div>
      <br></br>


      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={email}
            defaultValue="user@gmail.com"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            ref={password}
            defaultValue={password.current}
          />
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkme"
              />
              <label className="form-check-label" htmlFor="checkme">
                Remember me
              </label>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password">
            <a href="#" className="lost-your-password">
              Forgot your password?
            </a>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>{!loading ? "Login" : <Loader className="spinner" />} </button>
      </form>

      <div className="important-text">
        <p>
          Don't have an account? <Link to="/register">Register now!</Link>
        </p>
      </div>
    </div>
  );
}

export default withRouter(LoginArea);
