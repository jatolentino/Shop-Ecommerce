function Footer() {
  return (
    <>
      <section className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Get in Touch</h2>

                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map" style={{fontWeight: "bold"}}></i>
                    <span></span>
                    <a href="#" target="_blank">
                      6605 Lemke Run E DR, New Jacktown, NH 77076
                    </a>
                  </li>
                  <li>
                     <i className="bx bx-phone-call" style={{fontWeight: "bold"}}></i>
                     <span></span>
                    <a href="tel:+12214215363">+1 (221) 421-5363</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope" style={{fontWeight: "bold"}}></i>
                    <span></span>
                    <a href="mailto:contact@shop.com">contact@shop.com</a>
                  </li>
                </ul>
                
                <ul className="footer-social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://instagram.com/" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Policies</h2>

                <ul className="quick-links">
                  <li>
                    <a href="/pricing-plans">Shipping And Delivery</a>
                  </li>
                  <li>
                    <a href="/checkout">Payment Method</a>
                  </li>
                  <li>
                    <a href="/shop">How to Shop</a>
                  </li>
                  <li>
                      <a href="/terms-of-service">Terms And Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/compare">Returns</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Support</h2>

                <ul className="quick-links">
                  <li>
                    <a href="/my-account">My Account</a>
                  </li>
                  <li>
                    <a href="/tracking-order">Order Tracking</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/terms-of-service">Customer Services</a>
                  </li>
                  <li>
                    <a href="/faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="/contact">Help Desk</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h2>Join Our Newsletter</h2>

                <div className="newsletter-item">
                  <div className="newsletter-content">
                    <p>
                      Subscribe to our newsletter for all the latest updates
                    </p>
                  </div>

                  <form className="newsletter-form" data-toggle="validator">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Email address"
                      name="EMAIL"
                      required
                      autoComplete="off"
                    />

                    <button type="submit">Subscribe</button>
                    <div
                      id="validator-newsletter"
                      className="form-result"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
