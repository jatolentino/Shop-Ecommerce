import React, { useState, useEffect } from "react";
import PricingArea from "../../components/About/PricingArea";
import PageTitle from "../../components/Common/PageTitle";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Common/Preloader";

function PricingPlans() {
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
        <div className="pricing-plans-wrapper">
          <PageTitle title="Pricing Plans" />
          <PricingArea paddingClass=" pt-50 pb-20" />
          <Partner paddingClass=" ptb-50" />
          <Footer />
        </div>
      )}
    </>
  );
}

export default PricingPlans;
