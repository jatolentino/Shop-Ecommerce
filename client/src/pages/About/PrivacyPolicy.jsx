import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import PrivacyPolicyArea from "../../components/About/PrivacyPolicyArea";
import PageTitle from "../../components/Common/PageTitle";
import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function PrivacyPolicy() {
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
        <div className="privacy-policy-wrapper">
          <PageTitle title="Privacy Policy" />
          <PrivacyPolicyArea />
          <Support />
          <Footer />
        </div>
      )}
    </>
  );
}

export default PrivacyPolicy;
