import blog1 from "../../assets/img/blog/blog-10.jpg";
import blog2 from "../../assets/img/blog/blog-11.jpg";
import blog3 from "../../assets/img/blog/blog-12.jpg";
import blog4 from "../../assets/img/blog/blog-7.jpg";
import blog5 from "../../assets/img/blog/blog-8.jpg";
import blog6 from "../../assets/img/blog/blog-9.jpg";

import {theYear, theMonth, theDay} from "../../contexts/constants"

function BlogArea({ containerClass = "container" }) {
  return (
    <section className="blog-area bg-color pt-50 pb-50">
      <div className={containerClass}>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog1} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    The Best After-Christmas Sales of {theYear}
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog2} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    Minimal Design Inspiration Hand Watch
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog3} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    Your Stock Products in the Showroom
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog4} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    I Used to Work with Upcoming Electronic Gadgets
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog5} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    Latest Ecommerce Trend: The Rise of Shoppable Posts
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details">
                  <img src={blog6} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details">
                    Shipping Impacts Your Customer’s Experience
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>

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

export default BlogArea;
