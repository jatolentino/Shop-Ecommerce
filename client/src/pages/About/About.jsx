import React, { useState, useEffect } from "react";
import Founders from "../../components/About/Founders";
import FunFactArea from "../../components/About/FunFactArea";
import MissionArea from "../../components/About/MissionArea";
import StoryArea from "../../components/About/StoryArea";
import VisionArea from "../../components/About/VisionArea";
import PageTitle from "../../components/Common/PageTitle";
import Partner from "../../components/Common/Partner";
import SupportTwo from "../../components/Common/SupportTwo";
import Testimonial from "../../components/Common/Testimonial";
import Preloader from "../../components/Common/Preloader";
import Footer from "../../components/Footer/Footer";

function About() {
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
        <div className="about-wrapper">
          <PageTitle title="About Us" />
          <StoryArea paddingClass=" ptb-50" />
          <MissionArea paddingClass=" ptb-50" />
          <VisionArea paddingClass=" ptb-50" />
          <FunFactArea paddingClass="  pt-50 pb-20" />
          <Founders />
          <Testimonial />
          <SupportTwo paddingClass=" ptb-50" />
          <Partner paddingClass=" ptb-50" />
          <Footer />
        </div>
      )}
    </>
  );
}

export default About;
