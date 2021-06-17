import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import ErrorArea from "../../components/About/ErrorArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function Error404() {
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
        <div className="error-404-wrapper">
          <PageTitle title="404 Error" />
          <ErrorArea />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Error404;
