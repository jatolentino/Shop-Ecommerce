import React from "react";
import PasswordResetArea from "../../components/Auth/PasswordResetArea";
import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";

const ResetPassword = () => {
  return (
    <>
      <PageTitle title="Reset Password" />
      <PasswordResetArea/>
      <Footer />
    </>
  );
};

export default ResetPassword;
