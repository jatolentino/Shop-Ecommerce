import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Preloader from "../../components/Common/Preloader";
import ComingSoonArea from "../../components/About/ComingSoonArea";

const ComingSoon = () => {
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
        <Countdown date={Date.now() + 50000000000} renderer={ComingSoonArea} />
      )}
    </>
  );
};

export default ComingSoon;
