import React, { useState, useEffect } from "react";
import TeamMembers from "../../components/About/TeamMembers";
import PageTitle from "../../components/Common/PageTitle";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Common/Preloader";

function OurTeam() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="our-team-wrapper">
      {isLoading === true ? (
        <Preloader />
      ) : (
        <>
          <PageTitle title="Our Team" />
          <TeamMembers paddingClass=" pt-50 pb-20" />
          <Partner paddingClass=" ptb-50" />
          <Footer />{" "}
        </>
      )}
    </div>
  );
}

export default OurTeam;
