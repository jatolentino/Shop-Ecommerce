import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <OwlCarousel className="home-slides-two owl-theme" items={1} loop>
      <div className="main-slider-item-others">
        <div className="main-slider-content">
          <b style={{fontWeight: "bold"}}>Big Sale Offer</b>
          <h1>Get the Best Deals on Portable Speaker</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="slider-btn">
            <Link to="/shop" className="default-btn">
              <i className="flaticon-shopping-cart"></i>
              Shop Now
              <span></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-slider-item-others item-two">
        <div className="main-slider-content">
          <b>Popular in 2020</b>
          <h1>High-Quality Wireless Wifi Router</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="slider-btn">
            <Link to="/shop" className="default-btn">
              <i className="flaticon-shopping-cart"></i>
              Shop Now
              <span></span>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-slider-item-others item-three">
        <div className="main-slider-content">
          <b style={{fontWeight: "bold"}}>Big Sale Offer</b>
          <h1>Get the Best Deal on CCTV Camera</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="slider-btn">
            <Link to="/shop" className="default-btn">
              <i className="flaticon-shopping-cart"></i>
              Shop Now
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default Banner;
