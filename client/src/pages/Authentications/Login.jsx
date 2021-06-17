import LoginArea from "../../components/Auth/LoginArea";
import PageTitle from "../../components/Common/PageTitle";

import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function Login() {
  return (
    <div className="login-wrapper">
      <PageTitle title="Login" />
      <section className="login-area ptb-50">
        <div className="container">
          <LoginArea/>
        </div>
      </section>
      <Support />
      <Footer />
    </div>
  );
}

export default Login;
