import { Link } from "react-router-dom";

function BestSellerProducts() {
  return (
    <>
      <h3 className="widget-title">Best Seller</h3>

      <article className="item">
        <a href="#" className="thumb">
          <span className="fullimage cover bg1" role="img"></span>
        </a>
        <div className="info">
          <h4 className="title usmall">
            <Link to="/products-details/60447200e3108c0a9086757c">Action Camera</Link>
          </h4>
          <span>June 10, 2020</span>
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
        </div>
      </article>

      <article className="item">
        <a href="#" className="thumb">
          <span className="fullimage cover bg2" role="img"></span>
        </a>
        <div className="info">
          <h4 className="title usmall">
            <Link to="/products-details/60447200e3108c0a9086757c">Digital Camera</Link>
          </h4>
          <span>June 10, 2020</span>
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
        </div>
      </article>

      <article className="item">
        <a href="#" className="thumb">
          <span className="fullimage cover bg3" role="img"></span>
        </a>
        <div className="info">
          <h4 className="title usmall">
            <Link to="/products-details/60447200e3108c0a9086757c">Wireless Headphone</Link>
          </h4>
          <span>June 10, 2020</span>
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
        </div>
      </article>
    </>
  );
}

export default BestSellerProducts;
