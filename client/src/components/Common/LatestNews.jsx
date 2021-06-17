import blog1 from "../../assets/img/blog/blog-10.jpg";
import blog2 from "../../assets/img/blog/blog-11.jpg";
import blog3 from "../../assets/img/blog/blog-12.jpg";

import {theYear, theMonth, theDay} from "../../contexts/constants"

function LatestNews({ paddingClass = "" }) {
  return (
    <section className={"blog-area " + paddingClass}>
      <div className="container">
        <div className="section-title">
          <h2>Latest News</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details/blogid=1">
                  <img src={blog1} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                <a href="/blog-details/blogid=1">
                  Minimal Design Inspiration to captivate your customer base
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                The philosophy of minimalism in marketing places less emphasis on things
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-image">
              <a href="/blog-details/blogid=2">
                  <img src={blog2} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                <a href="/blog-details/blogid=2">
                    
                    The Best Gadgets tog et in {theYear} for your Store
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                  Every year, online store owners look forward to the holiday season, 
                as it holds potential for profits
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="single-blog">
              <div className="blog-image">
                <a href="/blog-details/blogid=3">
                  <img src={blog3} alt="image" />
                </a>
              </div>

              <div className="blog-content">
                <span>eCommerce</span>
                <h3>
                  <a href="/blog-details/blogid=3">
                    Your Stock Products in the Showroom
                  </a>
                </h3>
                <div className="post-meta">
                  <a href="#">Admin</a> / {theDay} {theMonth} {theYear}
                </div>
                <p>
                In retail stores, customers usually 
                can buy products directly from the shelf and take them home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
