import LoginArea from "../../components/Auth/LoginArea";
import PageTitle from "../../components/Common/PageTitle";

import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function LoginVendortest() {
  return (
    <div className="login-wrapper">
      <PageTitle title="Vendor" />
      <section className="login-area ptb-50">
        <div className="container">
          <LoginArea role="vendor" />
        </div>
      </section>
      <Support />
      <Footer />
    </div>
  );
}

export default LoginVendortest;
