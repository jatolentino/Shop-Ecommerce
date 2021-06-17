import { useState } from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

function BestSellers({
  paddingClass = null,
  products,
  showQuickView,
  addToCart,
}) {
  const [filterBy, setFilterBy] = useState("cameras");

  const filterBestSellers = (filterBy) => {
    setFilterBy(filterBy);
  };

  return (
    <section className={"bestsellers-area " + paddingClass}>
      <div className="container">
        <div className="section-title">
          <h2>Best Sellers</h2>
        </div>

        <div className="tab bestsellers-list-tab">
          <ul className="tabs">
            <li
              onClick={() => filterBestSellers("cameras")}
              className={`tab-item${
                filterBy === "cameras" ? " tab-active" : ""
              }`}
            >
              <span>Cameras</span>
            </li>
            <li
              onClick={() => filterBestSellers("electronics")}
              className={`tab-item${
                filterBy === "electronics" ? " tab-active" : ""
              }`}
            >
              <span>Electronics</span>
            </li>
            <li
              onClick={() => filterBestSellers("audio")}
              className={`tab-item${filterBy === "audio" ? " tab-active" : ""}`}
            >
              <span>Audio</span>
            </li>
            <li
              onClick={() => filterBestSellers("computers")}
              className={`tab-item${
                filterBy === "computers" ? " tab-active" : ""
              }`}
            >
              <span>Computers</span>
            </li>
            <li
              onClick={() => filterBestSellers("accessories")}
              className={`tab-item${
                filterBy === "accessories" ? " tab-active" : ""
              }`}
            >
              <span>Accessories</span>
            </li>
            <li
              onClick={() => filterBestSellers("laptop")}
              className={`tab-item${
                filterBy === "laptop" ? " tab-active" : ""
              }`}
            >
              <span>Laptop</span>
            </li>
            <li
              onClick={() => filterBestSellers("watches")}
              className={`tab-item${
                filterBy === "watches" ? " tab-active" : ""
              }`}
            >
              <span>Watches</span>
            </li>
            <li
              onClick={() => filterBestSellers("mobile")}
              className={`tab-item${
                filterBy === "mobile" ? " tab-active" : ""
              }`}
            >
              <span>Mobile</span>
            </li>
            <li
              onClick={() => filterBestSellers("headphone")}
              className={`tab-item${
                filterBy === "headphone" ? " tab-active" : ""
              }`}
            >
              <span>Headphone</span>
            </li>
          </ul>
          <div className="tab_content">
            <div className="tabs_item">
              <div className="row">
                {products &&
                  products.map((product) => {
                    if (product.type === filterBy) {
                      return (
                        <div className="col-lg-3 col-sm-6" key={product._id}>
                          <div className="single-bestsellers-products at-time">
                            <div className="bestsellers-products-image">
                              <Link to={`/products-details/${product._id}`}>
                                <Image
                                  key={product._id}
                                  cloudName={
                                    process.env.REACT_APP_CLOUDINARY_NAME
                                  }
                                  publicId={product.image_public_id}
                                  width="300"
                                  height="256"
                                  crop="scale"
                                />
                              </Link>
                              <div className="tag">New</div>
                              <ul className="bestsellers-action">
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

                            <div className="bestsellers-products-content">
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
                    }
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
