import collection1 from "../../assets/img/collection/collection-1.png";
import micro from "../../assets/img/collection/micro.png";
import collection2 from "../../assets/img/collection/collection-2.png";
import lights from "../../assets/img/collection/lights.png";
import {Link} from 'react-router-dom'; 

function Collection() {
  return (
    <section className="collection-area">
      <div className="container">
        <div className="collection-inner-box">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="collection-image">
                <img src={micro} alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="collection-content">
                <span>New Arrival</span>
                <h3>Best Gadget</h3>
                <p>Collection</p>

                <div className="collection-btn">
                <Link to="/shop" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Shop Now
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="collection-image">
                <img src={lights} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection;
