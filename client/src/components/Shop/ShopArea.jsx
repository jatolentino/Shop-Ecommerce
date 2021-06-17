import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import React from 'react';

function ShopArea({ products = [], addToCart, page, pages, keyword,showQuickView }) {
  const [current, setCurrent] =React.useState(page);
  return (
    <section className="shop-area bg-ffffff pt-50 pb-50">
      <div className="container">
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
            products.map((product) => (
              <div className="col-lg-3 col-sm-6" key={product._id}>
                <div className="single-shop-products">
                  <div className="shop-products-image">
                    <Link to={`/products-details/${product._id}`}>
                      <Image
                        key={product._id}
                        cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
                        publicId={product.image_public_id}
                        width="400"
                        height="342"
                        crop="scale"
                      />
                    </Link>
                    <div className="tag">New</div>
                    <ul className="shop-action">
                      <li>
                        <span
                          className="addtocart-icon-wrap"
                          onClick={() => addToCart(product)}
                        >
                          <i className="flaticon-shopping-cart"></i>
                        </span>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="flaticon-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <span
                          onClick={() => showQuickView(product)}
                          data-toggle="modal"
                          data-target="#productsQuickView"
                          className="quick-icon"
                        >
                          <i className="flaticon-view"></i>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="shop-products-content">
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
                    <span>$150.00</span>
                  </div>
                </div>
              </div>
            ))}

          <div className="col-lg-12 col-md-12">
            <div className="pagination-area">
              <Link to={`/page/${page - 1}`
                } className="prev page-numbers">
                <i className="flaticon-left-arrow"></i>
              </Link>

              {[...Array(pages).keys()].map((x) => (
                <div key={x + 1}>
                  <Link
                    to={
                      keyword
                        ? `/search/${keyword}/page/${x + 1}`
                        : `/page/${x + 1}`
                    }
                  >
                    <span className={ x+1 === page ? 'current page-numbers' : 'page-numbers'}>{x + 1}</span>
                  </Link>
                </div>
              ))}

              <Link
                to={`/page/${page + 1}`
                }
                className="next page-numbers"
              >
                <i className="flaticon-right-arrow"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopArea;
