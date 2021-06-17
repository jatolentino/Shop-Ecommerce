import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { passwordReset } from "../../redux/ResetPassword/PasswordAction";

const PasswordResetArea = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.PasswordReducer);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    newpassword: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(passwordReset({ ...formData }));

    setFormData({
        email: "",
        password: "",
        newpassword: ""
    });

  };

  return (
    <>
      <section className="login-area ptb-50">
        <div className="container">
          <div className="login-form">
            {message ? (
              <div className={`alert alert-success`} role="alert">
                {message}
              </div>
            ) : null}

            <h2>Password Reset</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value = {formData.email}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Current Password"
                  name="password"
                  value = {formData.password}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  value={formData.newpassword}
                  name="newpassword"
                  onChange={(e) => onChange(e)}
                />
              </div>

              <button type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default PasswordResetArea;
