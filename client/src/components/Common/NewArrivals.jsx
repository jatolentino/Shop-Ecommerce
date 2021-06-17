import React, { useState } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

function NewArrivals({
  paddingClass = "",
  title = "New Arrivals",
  products = [],
  showQuickView,
  addToCart,
}) {
  return (
    <section className={"arrivals-products-area " + paddingClass}>
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
        </div>

        <div className="row justify-content-center">
          {products &&
            products.slice(0, 4).map((product) => {
              return (
                <div className="col-lg-3 col-sm-6" key={product._id}>
                  <div className="single-arrivals-products">
                    <div className="arrivals-products-image">
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
                      <ul className="arrivals-action">
                        <li>
                          <span
                            className="addtocart-icon-wrap"
                            onClick={() => addToCart(product)}
                          >
                            <i className="flaticon-shopping-cart"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-heart"></i>
                          </a>
                        </li>
                        <li>
                          <span
                            className="quickview-icon-wrap"
                            onClick={() => showQuickView(product)}
                          >
                            <i className="flaticon-view quick-icon"></i>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="arrivals-products-content">
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
                      <span>${product.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
