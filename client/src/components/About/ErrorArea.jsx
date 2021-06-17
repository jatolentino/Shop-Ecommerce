import { Link } from "react-router-dom";
import errorImg from "../../assets/img/404.png";

function ErrorArea() {
  return (
    <section className="error-area ptb-50">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <img src={errorImg} alt="error" />

              <h3>Error 404 : Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>

              <Link to="/" className="default-btn">
                Go To Home
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorArea;
