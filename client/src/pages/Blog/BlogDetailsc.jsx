import PageTitle from "../../components/Common/PageTitle";
import Footer from "../../components/Footer/Footer";
import blogDetails from "../../assets/img/blog-details.jpg";
import team1 from "../../assets/img/team/team-1.jpg";
import team3 from "../../assets/img/team/team-3.jpg";

import Categories from "../../components/Widgets/Categories";
import PopularPosts from "../../components/Widgets/PopularPosts";
import PopularTags from "../../components/Widgets/PopularTags";
import Search from "../../components/Widgets/Search";

import blog12 from "../../assets/img/blog/blog-12.jpg";
import {theYear, theMonth, theDay} from "../../contexts/constants"

function BlogDetailsc() {
  return (
    <div className="blog-details-wrapper">
      <PageTitle title="Blog Details" />
      <section className="blog-details-area ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src={blog12} alt="image" />
              </div>

              <div className="article-content">
                <div className="details-content">
                  <span>eCommerce</span>
                  <h3>
                    <a href="/blog-details">
                    Your Stock Products in the Showroom
                    </a>
                  </h3>
                  <div className="post-meta">
                    <a href="#">Admin</a> / 20 October 2020 / 2 Comments
                  </div>
                  <p>
                  With the holidays now behind us, we're ready to use all those new holiday gift cards and start shopping after-Christmas sales. Though these deals don't get nearly as much buzz as Black Friday and Cyber Monday, the very first and last weeks of the calendar year are typically filled with massive sales as retailers hope to clear out inventory. This year's post-Christmas deals and New Year's sales are no exception. In short, right now is a very good time to stock up on all the things you didn't find under the tree this year.
                  </p>

                  <p>
                  Skip the trip to the mall and check out what's worth buying post-holiday at big online retailers like Amazon, Wayfair and Walmart. This year's post-holiday sales are filled with major deals! We're seeing major price drops on Dyson vacuums and iRobot robot vacuums, as well as savings on some of the Good Housekeeping Institute's best of 2022 picks, so you can shop our favorite tried-and-tested products for less.
                  </p>
                </div>

                <blockquote className="wp-block-quote">
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>

                  <p>
                    We'll be keeping this list up to date through the start of the new year, but for now, we're seeing the best savings from top sites like Amazon, Wayfair and Walmart. We've also compiled a lengthy list of brands and stores where we're seeing sales going on currently above, and anticipate they'll continue through the end of the year.
                  </p>
                </blockquote>

                <p>
                Whether deals are better before or after changes year-to-year. So far, we've been seeing steep price cuts from retailers like Amazon, where deals ran for a longer time in the lead-up to the holiday. In the past, however, it's been deals upon deals in the aftermath of the holiday. Right now, post-holiday sales coupled with New Year sales mean there are savings galore for you to shop.
                </p>

                <ul className="features-list">
                  <li>
                    <i className="bx bx-check"></i>
                    Save up to 63% on Amazon devices.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    Save up to 50% on Beats earbuds.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    Save up to 33% off Shark vacuums.
                  </li>
                  <li>
                    <i className="bx bx-check"></i>
                    Save 27% off Mellanni Hotel Luxury Sheets Set.
                  </li>
                </ul>
              </div>

              <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="bx bxs-bookmark"></i>
                  </span>
                  <a href="#">Electronics</a>,<a href="#">Business</a>,
                  <a href="#">E-commerce</a>
                </div>

                <div className="article-share">
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
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="comments-area">
                <h3 className="comments-title">Comments (02)</h3>

                <ol className="comment-list">
                  <li className="comment">
                    <div className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img src={team3} className="avatar" alt="image" />
                          <b className="fn">Scott Twain</b>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <span>April 02, 2022 at 8:03 pm</span>
                          </a>
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                        Thanks for your inside Ellen McAlpine. She is a commerce editor and writer at Hearst Magazines, covering tech, fitness, lifestyle, and beyond. In her time as a writer, she’s covered everything from top tech items like running watches and ring lights to phone cases and beauty tools
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          <i className="bx bx-reply"></i> Reply
                        </a>
                      </div>
                    </div>

                    <div className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img src={team1} className="avatar" alt="image" />
                          <b className="fn">Eric McMaster</b>
                        </div>
                        <div className="comment-metadata">
                          <a href="#">
                            <span>June 16, 2022 at 1:50 pm</span>
                          </a>
                        </div>
                      </footer>
                      <div className="comment-content">
                        <p>
                        I know Raena Loper, who is the product and reviews updates editor for the Good Housekeeping Institute. She talks interesting things about textiles, home, wellness, tech and more. Prior to starting at GH in 2021, she worked as assistant lifestyle editor at O, The Oprah Magazine, where she covered fashion, food, tech and beauty content.
                        </p>
                      </div>
                      <div className="reply">
                        <a href="#" className="comment-reply-link">
                          <i className="bx bx-reply"></i>Reply
                        </a>
                      </div>
                    </div>
                  </li>
                </ol>

                <div className="comment-respond">
                  <h3 className="comment-reply-title">Leave A Reply</h3>

                  <form className="comment-form">
                    <p className="comment-notes">
                      <span id="email-notes">
                        Your email address will not be published.
                      </span>
                      Required fields are marked
                      <span className="required">*</span>
                    </p>
                    <p className="comment-form-author">
                      <label>Name</label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        required="required"
                      />
                    </p>
                    <p className="comment-form-email">
                      <label>Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                      />
                    </p>
                    <p className="comment-form-url">
                      <label>Website</label>
                      <input type="url" id="url" name="url" />
                    </p>
                    <p className="comment-form-comment">
                      <label>Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        cols="45"
                        rows="5"
                        maxLength="65525"
                        required="required"
                      ></textarea>
                    </p>
                    <p className="comment-form-cookies-consent">
                      <input type="checkbox" value="yes" />
                      <label htmlFor="wp-comment-cookies-consent">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>
                    <p className="form-submit">
                      <input
                        type="submit"
                        name="submit"
                        id="submit"
                        className="submit"
                        value="Post A Comment"
                      />
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <aside className="widget-area">
              <div className="widget widget_search">
                <Search />
              </div>

              <div className="widget widget_categories">
                <Categories />
              </div>

              <div className="widget widget_ejon_posts_thumb">
                <PopularPosts />
              </div>

              <div className="widget widget_tag_cloud">
                <PopularTags />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </div>
  );
}

export default BlogDetailsc;
