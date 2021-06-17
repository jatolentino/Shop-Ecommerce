import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function RegisterArea() {
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const [passwordShown, setPasswordShown] = useState(false);
  const [message, setMessage] = useState(null);

  const handleRegistration = (e) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_SERVER_API + "user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.current.value,
        username: username.current.value,
        email: email.current.value,
        phone: phone.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "User created") {
          name.current.value = "";
          username.current.value = "";
          email.current.value = "";
          phone.current.value = "";
          password.current.value = "";
          setMessage("Account successfully created");
        } else if (res.errors) {
          let errors = Object.values(res.errors);
          setMessage(errors);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-form">
      {message &&
        (Array.isArray(message) ? (
          <div className="alert alert-danger" role="alert">
            <ul className="errors" style={{ marginBottom: 0 }}>
              {message.map((msg) => (
                <li key={msg} className="error">
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className={`alert alert-success`} role="alert">
            {message}
          </div>
        ))}
      <h2>Register</h2>

      <form onSubmit={handleRegistration}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            ref={name}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            ref={username}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            ref={email}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            ref={phone}
            required
          />
        </div>

        <div className="form-group">
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            ref={password}
            required
          />
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkme"
                onChange={() => setPasswordShown(!passwordShown)}
              />
              <label className="form-check-label" htmlFor="checkme">
                Show password?
              </label>
            </div>
          </div>
        </div>

        <button type="submit">Register now</button>
      </form>

      <div className="important-text">
        <p>
          Already have an account? <Link to="/login">Login now!</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterArea;
