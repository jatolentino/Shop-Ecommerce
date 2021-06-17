import arrivalsProducts1 from "../../assets/img/arrivalsproducts/arrivalsproducts1.jpg";
import arrivalsProducts2 from "../../assets/img/arrivalsproducts/arrivalsproducts2.jpg";
import arrivalsProducts3 from "../../assets/img/arrivalsproducts/arrivalsproducts3.jpg";
import arrivalsProducts4 from "../../assets/img/arrivalsproducts/arrivalsproducts4.jpg";
import { Link } from "react-router-dom";

function SearchArea() {
  return (
    <>
      <div className="search-area ptb-50">
        <div className="container">
          <div className="search-block">
            <form className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search products"
              />

              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <section className="arrivals-products-area pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-arrivals-products">
                <div className="arrivals-products-image">
                  <a href="#">
                    <img src={arrivalsProducts1} alt="image" />
                  </a>
                  <div className="tag">New</div>
                  <ul className="arrivals-action">
                    <li>
                      <Link to="#">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#productsQuickView"
                      >
                        <i className="flaticon-view"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="arrivals-products-content">
                  <h3>
                    <Link to="/products-details/60447200e3108c0a9086757c">Smart Watch</Link>
                  </h3>
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
                  <span>$99.00</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-arrivals-products">
                <div className="arrivals-products-image">
                  <a href="#">
                    <img src={arrivalsProducts2} alt="image" />
                  </a>
                  <div className="tag">New</div>
                  <ul className="arrivals-action">
                    <li>
                      <Link to="#">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#productsQuickView"
                      >
                        <i className="flaticon-view"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="arrivals-products-content">
                  <h3>
                    <Link to="/products-details/60447200e3108c0a9086757c">Digital Camera</Link>
                  </h3>
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
                  <span>$125.00</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-arrivals-products">
                <div className="arrivals-products-image">
                  <a href="#">
                    <img src={arrivalsProducts3} alt="image" />
                  </a>
                  <div className="tag">Sale</div>
                  <ul className="arrivals-action">
                    <li>
                      <Link to="#">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#productsQuickView"
                      >
                        <i className="flaticon-view"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="arrivals-products-content">
                  <h3>
                    <Link to="/products-details/60447200e3108c0a9086757c">Wireless Headphone</Link>
                  </h3>
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
                  <span>$175.00</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-arrivals-products">
                <div className="arrivals-products-image">
                  <a href="#">
                    <img src={arrivalsProducts4} alt="image" />
                  </a>
                  <div className="tag">New</div>
                  <ul className="arrivals-action">
                    <li>
                      <Link to="#">
                        <i className="flaticon-shopping-cart"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="flaticon-heart"></i>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#productsQuickView"
                      >
                        <i className="flaticon-view"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="arrivals-products-content">
                  <h3>
                    <Link to="/products-details/60447200e3108c0a9086757c">Bluetooth Speaker</Link>
                  </h3>
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
                  <span>$75.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchArea;
