import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import TermsOfServiceArea from "../../components/About/TermsOfServiceArea";
import PageTitle from "../../components/Common/PageTitle";
import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function TermsOfService() {
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
        <div className="terms-of-service">
          <PageTitle title="Terms of Service" />
          <TermsOfServiceArea />
          <Support />
          <Footer />
        </div>
      )}
    </>
  );
}

export default TermsOfService;
