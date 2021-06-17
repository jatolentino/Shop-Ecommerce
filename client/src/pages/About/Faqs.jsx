import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import FaqsArea from "../../components/About/FaqsArea";
import PageTitle from "../../components/Common/PageTitle";
import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function Faqs() {
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
        <div className="faqs-wrapper">
          <PageTitle title="FAQ's" />
          <FaqsArea />
          <Support />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Faqs;
