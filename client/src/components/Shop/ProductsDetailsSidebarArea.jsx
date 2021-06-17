import quickView1 from "../../assets/img/quick-view/quick-view-1.jpg";
import quickView2 from "../../assets/img/quick-view/quick-view-2.jpg";
import quickView3 from "../../assets/img/quick-view/quick-view-3.jpg";

function ProductsDetailsSidebarArea() {
  return (
    <div className="prod-details-sidebar-area-wrap">
      <section className="products-details-area bg-color ptb-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="products-details-desc">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="products-details-image">
                      <div className="slick-thumbs">
                        <ul>
                          <li>
                            <img src={quickView1} alt="image" />
                          </li>
                          <li>
                            <img src={quickView2} alt="image" />
                          </li>
                          <li>
                            <img src={quickView3} alt="image" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="product-content">
                      <h3>Bluetooth Headphones</h3>

                      <div className="product-review">
                        <div className="rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>
                      </div>

                      <div className="price">
                        <span className="old-price">$150.00</span>
                        <span className="new-price">$75.00</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <ul className="products-info">
                        <li>
                          <span>Availability:</span> <a href="#">In stock</a>
                        </li>
                        <li>
                          <span>SKU:</span> <a href="#">L458-25</a>
                        </li>
                      </ul>

                      <div className="products-color-switch">
                        <p className="available-color">
                          <span>Color</span> :
                          <a
                            href="#"
                            style={{ backgroundColor: "#a53c43" }}
                          ></a>
                          <a
                            href="#"
                            style={{ backgroundColor: "#192861" }}
                          ></a>
                          <a
                            href="#"
                            style={{ backgroundColor: "#c58a84" }}
                          ></a>
                          <a
                            href="#"
                            style={{ backgroundColor: "#ecc305" }}
                          ></a>
                          <a
                            href="#"
                            style={{ backgroundColor: "#000000" }}
                          ></a>
                          <a
                            href="#"
                            style={{ backgroundColor: "#808080" }}
                          ></a>
                        </p>
                      </div>

                      <div className="product-quantities">
                        <span>Quantities:</span>

                        <div className="input-counter">
                          <span className="minus-btn">
                            <i className="bx bx-minus"></i>
                          </span>
                          <input type="text" value="1" />
                          <span className="plus-btn">
                            <i className="bx bx-plus"></i>
                          </span>
                        </div>
                      </div>

                      <div className="product-add-to-cart">
                        <button type="submit" className="default-btn">
                          <i className="flaticon-shopping-cart"></i>
                          Add to cart
                          <span></span>
                        </button>
                      </div>

                      <div className="products-share">
                        <ul className="social">
                          <li>
                            <span>Share:</span>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="bx bxl-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="bx bxl-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="bx bxl-linkedin"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="bx bxl-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-details-tabs">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="description-tab"
                      data-toggle="tab"
                      href="#description"
                      role="tab"
                      aria-controls="description"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="reviews-tab"
                      data-toggle="tab"
                      href="#reviews"
                      role="tab"
                      aria-controls="reviews"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="information-tab"
                      data-toggle="tab"
                      href="#information"
                      role="tab"
                      aria-controls="information"
                    >
                      Shipping Information
                    </a>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="description"
                    role="tabpanel"
                  >
                    <h2>Overview</h2>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea com modo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea com modo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore fugiat nulla pariatur.
                    </p>

                    <ul>
                      <li>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged.
                      </li>
                      <li>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </li>
                      <li>
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters.
                      </li>
                      <li>
                        Various versions have evolved over the years, sometimes
                        by accident sometimes on purpose.
                      </li>
                      <li>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>

                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    <div className="products-reviews">
                      <h3>Reviews</h3>

                      <div className="row">
                        <div className="side">
                          <div>5 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-5"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>70%</div>
                        </div>
                        <div className="side">
                          <div>4 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-4"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>20%</div>
                        </div>
                        <div className="side">
                          <div>3 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-3"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>5%</div>
                        </div>
                        <div className="side">
                          <div>2 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-2"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>3%</div>
                        </div>
                        <div className="side">
                          <div>1 star</div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-1"></div>
                          </div>
                        </div>
                        <div className="side right">
                          <div>2%</div>
                        </div>
                      </div>
                    </div>

                    <div className="products-review-form">
                      <h3>Customer Reviews</h3>

                      <div className="review-title">
                        <div className="rating">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                        </div>

                        <a href="#" className="default-btn">
                          Write a Review
                          <span></span>
                        </a>
                      </div>

                      <div className="review-comments">
                        <div className="review-item">
                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                          </div>
                          <h3>Good</h3>
                          <span>
                            <strong>Admin</strong> on{" "}
                            <strong>Sep 21, 2019</strong>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>

                        <div className="review-item">
                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                          </div>
                          <h3>Good</h3>
                          <span>
                            <strong>Admin</strong> on{" "}
                            <strong>Sep 21, 2019</strong>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>

                        <div className="review-item">
                          <div className="rating">
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                            <i className="bx bxs-star"></i>
                          </div>
                          <h3>Good</h3>
                          <span>
                            <strong>Admin</strong> on{" "}
                            <strong>Sep 21, 2019</strong>
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                        </div>
                      </div>

                      <div className="review-form">
                        <h3>Write a Review</h3>

                        <form>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Enter your name"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                              <div className="form-group">
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Enter your email"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  id="review-title"
                                  name="review-title"
                                  placeholder="Enter your review a title"
                                  className="form-control"
                                />
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <textarea
                                  name="review-body"
                                  id="review-body"
                                  cols="30"
                                  rows="6"
                                  placeholder="Write your comments here"
                                  className="form-control"
                                ></textarea>
                              </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                              <button type="submit" className="default-btn">
                                Submit Review
                                <span></span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade show"
                    id="information"
                    role="tabpanel"
                  >
                    <ul className="information-list">
                      <li>
                        Address:{" "}
                        <span>
                          6605 Lemke Run, Jacktown, NH 77076
                        </span>
                      </li>
                      <li>
                        Phone: <a href="tel:+12214215363">+1 (221) 421-5363</a>
                      </li>
                      <li>
                        Email:{" "}
                        <a href="mailto:contact@shop.com">contact@shop.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <aside className="widget-area">
                <div className="widget widget_search">
                  <form className="search-form">
                    <label>
                      <span className="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i className="bx bx-search-alt"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget-title">Categories</h3>

                  <ul className="categories">
                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-desktop-computer"></i>
                        Computers & Accessories
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-stereo"></i>
                        Audio & Home Theater
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-laptop"></i>
                        Laptop
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-tv-box"></i>
                        TV & Accessories
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-smartphone"></i>
                        Mobiles & Tablets
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-headphones"></i>
                        Headphone & Earphone
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-battery-charge"></i>
                        Battery & Accessories
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-smart-watch"></i>
                        Watches
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-camera"></i>
                        Cameras
                      </a>
                    </li>

                    <li>
                      <a href="#" className="nav-link">
                        <i className="flaticon-trimmer"></i>
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget_price">
                  <h3 className="widget-title">Price</h3>

                  <form className="price-range-content">
                    <div className="price-range-bar" id="range-slider"></div>
                    <div className="price-range-filter">
                      <div className="price-range-filter-item d-flex align-items-center order-1 order-xl-2">
                        <h4>Range:</h4>
                        <input type="text" id="price-amount" readonly />
                      </div>

                      <div className="price-range-filter-item price-range-filter-button order-2 order-xl-1">
                        <button className="btn btn-red btn-icon">Filter</button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="widget widget_continents">
                  <h3 className="widget-title">Supplier by Continents</h3>

                  <ul className="continents-list-row">
                    <li>
                      <a href="#">Asia</a>
                    </li>
                    <li className="active">
                      <a href="#">Europe</a>
                    </li>
                    <li>
                      <a href="#">Africa</a>
                    </li>
                    <li>
                      <a href="#">Antarctica</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsDetailsSidebarArea;
