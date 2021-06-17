import cart1 from "../../assets/img/cart/cart-1.png";
import cart2 from "../../assets/img/cart/cart-2.png";
import cart3 from "../../assets/img/cart/cart-3.png";
import cart4 from "../../assets/img/cart/cart-4.png";
import cart5 from "../../assets/img/cart/cart-5.png";
import { Link } from "react-router-dom";

function WishListArea() {
  return (
    <section className="wishlist-area ptb-50">
      <div className="container">
        <div className="wishlist-table table-responsive">
          <div className="wishlist-title">
            <h2>My Wishlist</h2>
          </div>

          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="product-remove">
                  <a href="#" className="remove">
                    <i className="bx bx-x"></i>
                  </a>
                </td>

                <td className="product-thumbnail">
                  <a href="#">
                    <img src={cart1} alt="item" />
                  </a>
                </td>

                <td className="product-name">
                  <Link to="/products-details/60447200e3108c0a9086757c">Bluetooth Headphone</Link>
                </td>

                <td className="product-price">
                  <span className="unit-amount">$75.00</span>
                </td>

                <td className="product-stock">
                  <span className="stock">In Stock</span>
                </td>

                <td className="product-btn">
                  <a href="#" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Add to Cart
                    <span></span>
                  </a>
                </td>
              </tr>

              <tr>
                <td className="product-remove">
                  <a href="#" className="remove">
                    <i className="bx bx-x"></i>
                  </a>
                </td>

                <td className="product-thumbnail">
                  <a href="#">
                    <img src={cart2} alt="item" />
                  </a>
                </td>

                <td className="product-name">
                  <Link to="/products-details/60447200e3108c0a9086757c">Protable Speakers</Link>
                </td>

                <td className="product-price">
                  <span className="unit-amount">$175.00</span>
                </td>

                <td className="product-stock">
                  <span className="stock">In Stock</span>
                </td>

                <td className="product-btn">
                  <a href="#" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Add to Cart
                    <span></span>
                  </a>
                </td>
              </tr>

              <tr>
                <td className="product-remove">
                  <a href="#" className="remove">
                    <i className="bx bx-x"></i>
                  </a>
                </td>

                <td className="product-thumbnail">
                  <a href="#">
                    <img src={cart3} alt="item" />
                  </a>
                </td>

                <td className="product-name">
                  <Link to="/products-details/60447200e3108c0a9086757c">Digital Camera</Link>
                </td>

                <td className="product-price">
                  <span className="unit-amount">$175.00</span>
                </td>

                <td className="product-stock">
                  <span className="stock">In Stock</span>
                </td>

                <td className="product-btn">
                  <a href="#" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Add to Cart
                    <span></span>
                  </a>
                </td>
              </tr>

              <tr>
                <td className="product-remove">
                  <a href="#" className="remove">
                    <i className="bx bx-x"></i>
                  </a>
                </td>

                <td className="product-thumbnail">
                  <a href="#">
                    <img src={cart4} alt="item" />
                  </a>
                </td>

                <td className="product-name">
                  <Link to="/products-details/60447200e3108c0a9086757c">Smart Watch</Link>
                </td>

                <td className="product-price">
                  <span className="unit-amount">$175.00</span>
                </td>

                <td className="product-stock">
                  <span className="stock">In Stock</span>
                </td>

                <td className="product-btn">
                  <a href="#" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Add to Cart
                    <span></span>
                  </a>
                </td>
              </tr>

              <tr className="bottom-className">
                <td className="product-remove">
                  <a href="#" className="remove">
                    <i className="bx bx-x"></i>
                  </a>
                </td>

                <td className="product-thumbnail">
                  <a href="#">
                    <img src={cart5} alt="item" />
                  </a>
                </td>

                <td className="product-name">
                  <a href="#">New Smart Phone</a>
                </td>

                <td className="product-price">
                  <span className="unit-amount">$175.00</span>
                </td>

                <td className="product-stock">
                  <span className="stock">In Stock</span>
                </td>

                <td className="product-btn">
                  <a href="#" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Add to Cart
                    <span></span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default WishListArea;
