import Privacy from "./Privacy"
import terms from "../../assets/css/terms.css"
function PrivacyPolicyArea() {
  return (
    <section className="terms-of-service-area ptb-50">
      <div className="container">
        <Privacy style={terms} />
      </div>
    </section>

  );
}

export default PrivacyPolicyArea;
