import termsOfService from "../../assets/img/terms-of-service.jpg";
import Terms from "./Terms"
import terms from "../../assets/css/terms.css"
function TermsOfServiceArea() {
  return (
    <section className="terms-of-service-area ptb-50">
      <div className="container">
        <div className="terms-of-service-image">
          <img src={termsOfService} alt="image" />
        </div>
        <Terms style={terms}/>
      </div>
    </section>
  );
}

export default TermsOfServiceArea;
