import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import partner1 from "../../assets/img/partner/zara.svg";
import partner2 from "../../assets/img/partner/dell.svg";
import partner3 from "../../assets/img/partner/gucci.svg";
import partner4 from "../../assets/img/partner/samsung.svg";
import partner5 from "../../assets/img/partner/luigi.svg";
import partner6 from "../../assets/img/partner/asus.svg";
import partner7 from "../../assets/img/partner/apple.svg";
import partner8 from "../../assets/img/partner/msi.svg";
import partner9 from "../../assets/img/partner/huawei.svg";
import partner10 from "../../assets/img/partner/sony.svg";
import partner11 from "../../assets/img/partner/nike.svg";
import partner12 from "../../assets/img/partner/rolex.svg";

function Partner({ paddingClass = "" }) {

  const options = {
    loop: true,
    margin: 0,
    nav: false,
    mouseDrag: false,

    items: 11,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },

      1000:{
        items: 4
      }

    },
  };


  return (
    <div className={"partner-area" + paddingClass}>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          margin={20}
        {...options}

        >
          <div className="partner-item">
            <a href="#">
              <img src={partner1} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner2} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner3} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner4} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner5} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner6} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner7} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner8} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner9} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner10} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner11} alt="image" />
            </a>
          </div>

          <div className="partner-item">
            <a href="#">
              <img src={partner12} alt="image" />
            </a>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Partner;
