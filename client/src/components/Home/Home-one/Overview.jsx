import overview1 from "../../../assets/img/overview/overview1.png";
import overview2 from "../../../assets/img/overview/overview2.png";
import table from "../../../assets/img/overview/table.png";
import clothes from "../../../assets/img/overview/clothes1.png";
import {Link} from 'react-router-dom';

function Overview() {
  return (
    <section className="overview-area pt-100 pb-20 -mt-16">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-overview">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="overview-image">
                    <img src={table} alt="image" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="overview-content">
                    <h3>Special Discount Offer</h3>
                    <p>for 12-12 Festival</p>
                    <span>$499.00</span>

                    <div className="overview-btn">
                    <Link to="/shop" className="default-btn">
                        <i className="flaticon-shopping-cart"></i>
                        Shop Now
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-overview-item">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="overview-content">
                    <p>Featured</p>
                    <h3>Best Price & Great Quality</h3>
                    <span>50% Off</span>

                    <div className="overview-btn">
                      <a href="#" className="overview-btn-one">
                        View Product
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="overview-image">
                    <img src={clothes} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
