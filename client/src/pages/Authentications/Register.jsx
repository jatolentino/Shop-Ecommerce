import RegisterArea from "../../components/Auth/RegisterArea";
import PageTitle from "../../components/Common/PageTitle";
import Support from "../../components/Common/Support";
import Footer from "../../components/Footer/Footer";

function Register() {
  return (
    <div className="register-wrapper">
      <PageTitle title="Register" />
      <section className="register-area ptb-50">
        <div className="container">
          <RegisterArea />
        </div>
      </section>
      <Support />
      <Footer />
    </div>
  );
}

export default Register;
