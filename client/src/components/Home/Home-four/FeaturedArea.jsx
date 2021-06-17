import featured1 from "../../../assets/img/featured/featured-1.jpg";
import featured2 from "../../../assets/img/featured/featured-2.jpg";
import featured3 from "../../../assets/img/featured/featured-3.jpg";

function FeaturedArea() {
  return (
    <section className="featured-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-featured">
              <img src={featured1} alt="image" />

              <div className="featured-content">
                <span>Featured</span>
                <h3>Best Deal on the Camera Collection</h3>
                <div className="tag">30% Off</div>

                <div className="featured-btn">
                  <a href="#" className="featured-btn-one">
                    View product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-featured">
              <img src={featured2} alt="image" />

              <div className="featured-content">
                <span>Featured</span>
                <h3>
                  New Generation <p> Smart TV</p>
                </h3>
                <div className="tag">20% Off</div>

                <div className="featured-btn">
                  <a href="#" className="featured-btn-one">
                    View product
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="single-featured">
              <img src={featured3} alt="image" />

              <div className="featured-content">
                <span>Featured</span>
                <h3>Best Price & Great Quality Washing Machine</h3>
                <div className="tag">15% Off</div>

                <div className="featured-btn">
                  <a href="#" className="featured-btn-one">
                    View product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArea;
