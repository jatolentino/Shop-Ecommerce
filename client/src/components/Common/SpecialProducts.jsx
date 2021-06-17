import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

function SpecialProducts({ 
  paddingClass = "", 
  products = [],
  addToCart,
  showQuickView,
}) {
  return (
    <section className={"special-products-area " + paddingClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-12">
            <div className="section-title">
              <h2>Special Products</h2>
            </div>

            <div className="row justify-content-center">
              {products &&
                products.slice(0, 3).map((product) => {
                  return (
                    <div className="col-lg-4 col-sm-6" key={product._id}>
                      <div className="single-special-products">
                        <div className="special-products-image">
                          <Link to={`/products-details/${product._id}`}>
                            <Image
                              key={product._id}
                              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                              publicId={product.image_public_id}
                              width="300"
                              height="350"
                              crop="scale"
                            />
                          </Link>
                          <div className="tag">New</div>
                          <ul className="special-action">
                            <li>
                              <span className="addtocart-icon-wrap" onClick={() => addToCart(product)}>
                                <i className="flaticon-shopping-cart"></i>
                              </span>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-heart"></i>
                              </a>
                            </li>
                            <li>
                              <span className="quick-icon" onClick={() => showQuickView(product)}>
                                <i className="flaticon-view quick-icon"></i>
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="special-products-content">
                          <h3>
                            <Link to={`/products-details/${product._id}`}>
                              {product.name}
                            </Link>
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
                          <span>$700.00</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="col-lg-3 col-md-12">
            <div className="special-products-inner">
              <div className="inner-content">
                <span>New Arrival</span>
                <h3>Special Laptop</h3>
                <p>Stock is Limited</p>

                <div className="inner-btn">
                  <a href="#" className="default-btn">
                    <i className="flaticon-shopping-cart"></i>
                    Shop Now
                    <span></span>
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

export default SpecialProducts;
