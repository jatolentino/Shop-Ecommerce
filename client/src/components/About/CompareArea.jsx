import arrivalsProducts1 from "../../assets/img/arrivalsproducts/arrivalsproducts1.jpg";
import arrivalsProducts2 from "../../assets/img/arrivalsproducts/arrivalsproducts2.jpg";
import arrivalsProducts3 from "../../assets/img/arrivalsproducts/arrivalsproducts3.jpg";
import { Link } from "react-router-dom";

function CompareArea() {
  return (
    <section className="compare-area ptb-50">
      <div className="container">
        <div className="products-compare-table table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Products</td>
                <td>
                  <div className="remove-btn">
                    <a href="#" className="remove">
                      Remove
                    </a>
                  </div>

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
                            data-tooltip="tooltip"
                            data-placement="top"
                            title="Quick View"
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
                </td>

                <td>
                  <div className="remove-btn">
                    <a href="#" className="remove">
                      Remove
                    </a>
                  </div>

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
                          <Link to="#">
                            <i className="flaticon-view"></i>
                          </Link>
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
                </td>

                <td>
                  <div className="remove-btn">
                    <a href="#" className="remove">
                      Remove
                    </a>
                  </div>

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
                            data-tooltip="tooltip"
                            data-placement="top"
                            title="Quick View"
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
                </td>
              </tr>

              <tr>
                <td>Collection</td>
                <td>Shirt, New Products, T-Shirt</td>
                <td>Shirt, New Products, T-Shirt</td>
                <td>Shirt, New Products, T-Shirt</td>
              </tr>

              <tr>
                <td>Availability</td>
                <td>In Stock</td>
                <td>In Stock</td>
                <td>In Stock</td>
              </tr>

              <tr>
                <td>Material</td>
                <td>100% Polyester</td>
                <td>100% Polyester</td>
                <td>100% Polyester</td>
              </tr>

              <tr>
                <td>Vendor</td>
                <td>Lacoste</td>
                <td>Lacoste</td>
                <td>Lacoste</td>
              </tr>

              <tr>
                <td>SKU</td>
                <td>00105сd-1</td>
                <td>00105сd-1</td>
                <td>00105сd-1</td>
              </tr>

              <tr>
                <td>Color</td>
                <td>White</td>
                <td>Black</td>
                <td>Blue</td>
              </tr>

              <tr>
                <td>Size</td>
                <td>20</td>
                <td>22</td>
                <td>XXL</td>
              </tr>

              <tr>
                <td>Barcode</td>
                <td>1234567890</td>
                <td>1234567890</td>
                <td>1234567890</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CompareArea;
