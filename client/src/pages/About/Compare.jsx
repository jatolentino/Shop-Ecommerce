import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import CompareArea from "../../components/About/CompareArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function Compare() {
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
        <div className="compare-wrapper">
          <PageTitle title="Compare" />
          <CompareArea />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Compare;
