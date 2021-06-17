import featured4 from "../../../assets/img/featured/featured-4.jpg";
import featured5 from "../../../assets/img/featured/featured-5.jpg";

function FeaturedArea() {
  return (
    <>
      <div className="single-featured">
        <img src={featured4} alt="image" />

        <div className="featured-content">
          <span>Featured</span>
          <h3>New Generation Smart TV</h3>
          <div className="tag">20% Off</div>

          <div className="featured-btn">
            <a href="#" className="featured-btn-one">
              View Product
            </a>
          </div>
        </div>
      </div>

      <div className="single-featured">
        <img src={featured5} alt="image" />

        <div className="featured-content">
          <span>Featured</span>
          <h3>Best Price & Great Quality Washing Machine</h3>
          <div className="tag">15% Off</div>

          <div className="featured-btn">
            <a href="#" className="featured-btn-one">
              View Product
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedArea;
