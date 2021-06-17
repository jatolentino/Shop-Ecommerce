import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import LoginArea from "../../components/Auth/LoginArea";
import RegisterArea from "../../components/Auth/RegisterArea";
import PageTitle from "../../components/Common/PageTitle";
import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function MyAccount() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Preloader />
      ) : (
        <div className="my-account-wrapper">
          <PageTitle title="My Account" />
          <div className="login-area ptb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <LoginArea customClass=" mb-30" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <RegisterArea />
                </div>
              </div>
            </div>
          </div>
          <Support />
          <Footer />
        </div>
      )}
    </>
  );
}

export default MyAccount;
