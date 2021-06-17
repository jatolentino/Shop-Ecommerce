import React, { useState, useEffect } from "react";
import Preloader from "../../components/Common/Preloader";
import ContactArea from "../../components/About/ContactArea";
import Map from "../../components/About/Map";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

function Contact() {
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
        <div className="contact-wrapper">
          <PageTitle title="Contact" />
          <ContactArea />
          <Map />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Contact;
