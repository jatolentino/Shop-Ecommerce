import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

function ShopFullWidthArea({ products = [], showQuickView }) {
  return (
    <section className="shop-area shop-fullwidth bg-ffffff pt-50 pb-50">
      <div className="container-fluid">
        <div className="products-filter-options">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-9">
              <p>Showing 1 – 18 of 100</p>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="products-ordering-list">
                <select className="form-control">
                  <option>Sort by price: low to high</option>
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {products &&
            products.map((product) => {
              return (
                <div className="col-lg-3 col-sm-6" key={product._id}>
                  <div className="single-shop-products">
                    <div className="shop-products-image">
                      <Link to={`/products-details/${product._id}`}>
                        <Image
                          key={product._id}
                          cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                          publicId={product.image_public_id}
                          width="300"
                          crop="scale"
                        />
                      </Link>
                      <div className="tag">New</div>
                      <ul className="shop-action">
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
                          <span
                            className="quick-icon"
                            onClick={() => showQuickView(product)}
                            data-toggle="modal"
                            data-target="#productsQuickView"
                          >
                            <i className="flaticon-view"></i>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="shop-products-content">
                      <h3>
                        <Link to={`/products-details/${product._id}`}>
                          Action Camera
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
                      <span>$150.00</span>
                    </div>
                  </div>
                </div>
              );
            })}

          <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              <a href="#" className="prev page-numbers">
                <i className="flaticon-left-arrow"></i>
              </a>
              <a href="#" className="page-numbers">
                1
              </a>
              <span className="page-numbers current" aria-current="page">
                2
              </span>
              <a href="#" className="page-numbers">
                3
              </a>
              <a href="#" className="page-numbers">
                4
              </a>
              <a href="#" className="next page-numbers">
                <i className="flaticon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopFullWidthArea;
