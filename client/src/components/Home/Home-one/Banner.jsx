import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from 'react-router-dom';

import headphone from "../../../assets/img/main-slider/headphone1.png";
import clothes from "../../../assets/img/main-slider/clothes1.svg";
import landing from "../../../assets/img/main-slider/landing.jpg";



const Banner = () => {
  return (
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
      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b style={{fontWeight: "bold"}}>Big Sale Offer</b>
                    <h1>Always our <br/>top brands!</h1>
                    <h6>
                    Clother, accessories, technology, and more!
                    </h6>

                    <div className="slider-btn">
                    <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Shop Now
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" style={{ position:"absolute",marginLeft:"360px", marginTop:"50px", maxWidth: "1450px"}} >
                  <div className="main-slider-image" >
                    <img src={landing} alt="image" class="img-responsive" style={{height: "760px", objectFit: "cover"}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b style={{fontWeight: "bold"}}>Big Sale Offer</b>
                    <h1>Beautiful Outfit and Makeup Set</h1>
                    <p>
                      Outfits and Makeup for Winter Season!
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

                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={clothes} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-slider-item">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-slider-content">
                    <b style={{fontWeight: "bold"}}>Big Sale Offer</b>
                    <h1>High-Quality Audio only for you</h1>
                    <p>
                      High-resolution audio finally hits the mainstream!
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

                <div className="col-lg-6">
                  <div className="main-slider-image">
                    <img src={headphone} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </OwlCarousel>
  );
};

export default Banner;
