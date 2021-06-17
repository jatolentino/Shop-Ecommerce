import {Link} from 'react-router-dom';

function Arrival() {
  return (
    <div className="special-products-inner">
      <div className="inner-content">
        <span>New Arrival</span>
        <h3>Special Laptop</h3>
        <p>Stock is Limited</p>

        <div className="inner-btn">
        <Link to="/shop" className="default-btn">
            <i className="flaticon-shopping-cart"></i>
            Shop Now
            <span></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
