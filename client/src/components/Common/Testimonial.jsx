import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial({ paddingClass = "" }) {
  return (
    <section className={"testimonial-area" + paddingClass}>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop
          dots={false}
          nav={true}
          navText={[
            "<i class='flaticon-left-arrow'/>",
            "<i class='flaticon-right-arrow' />",
          ]}
        >
          <div className="testimonial-item">
            <div className="icon">
              <i className="flaticon-quote"></i>
            </div>
            <ul className="rating">
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
            </ul>
            <div className="content">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.”
              </p>

              <div className="name">
                <h3>David Warner</h3>
                <span>CEO at Envato</span>
              </div>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="icon">
              <i className="flaticon-quote"></i>
            </div>
            <ul className="rating">
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
              <li>
                <i className="bx bxs-star"></i>
              </li>
            </ul>
            <div className="content">
              <p>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan.”
              </p>

              <div className="name">
                <h3>Alex Maxwell</h3>
                <span>CEO at EnvyTheme</span>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Testimonial;
