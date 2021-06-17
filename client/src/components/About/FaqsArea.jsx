import React, { useState } from "react";
import { Data } from "./Data";

function FaqsArea() {
  const [clicked, setClicked] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="faqs-area ptb-50">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="tab faqs-list-tab">
          <ul className="tabs">
            <li
              className={toggleState === 1 ? "current" : ""}
              onClick={() => toggleTab(1)}
            >
              <a href="#" onClick={(event) => event.preventDefault()}>
                Shopping basics
              </a>
            </li>

            <li
              className={toggleState === 2 ? "current" : ""}
              onClick={() => toggleTab(2)}
            >
              <a href="#" onClick={(event) => event.preventDefault()}>
                Payments
              </a>
            </li>

            <li
              className={toggleState === 3 ? "current" : ""}
              onClick={() => toggleTab(3)}
            >
              <a href="#" onClick={(event) => event.preventDefault()}>
                Shipping & Returns
              </a>
            </li>
          </ul>

          <div className="tab_content">
            {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    toggleState === 1 ? "show at-item" : "accordion-display"
                  }
                >
                  <div className="faq-accordion">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <div onClick={() => toggle(index)}>
                          <span className="accordion-title">
                            {item.question}
                            <span>
                              {clicked === index ? (
                                <i className="bx bx-minus minus-icon"></i>
                              ) : (
                                <i className="bx bx-plus"></i>
                              )}
                            </span>
                          </span>
                        </div>
                        {clicked === index ? (
                          <p className="accordion-content show">
                            {item.answer}
                          </p>
                        ) : null}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}

            {Data.map((item, index) => {
              return (
                <div
                  className={
                    toggleState === 2 ? "show at-item" : "accordion-display"
                  }
                  key={index}
                >
                  <div className="faq-accordion">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <div onClick={() => toggle(index)}>
                          <span className="accordion-title">
                            {item.question}
                            <span>
                              {clicked === index ? (
                                <i className="bx bx-minus minus-icon"></i>
                              ) : (
                                <i className="bx bx-plus"></i>
                              )}
                            </span>
                          </span>
                        </div>
                        {clicked === index ? (
                          <p className="accordion-content show">
                            {item.answer}
                          </p>
                        ) : null}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}

            {Data.map((item, index) => {
              return (
                <div
                  className={
                    toggleState === 3 ? "show at-item" : "accordion-display"
                  }
                  key={index}
                >
                  <div className="faq-accordion">
                    <ul className="accordion">
                      <li className="accordion-item">
                        <div onClick={() => toggle(index)}>
                          <span className="accordion-title">
                            {item.question}
                            <span>
                              {clicked === index ? (
                                <i className="bx bx-minus minus-icon"></i>
                              ) : (
                                <i className="bx bx-plus"></i>
                              )}
                            </span>
                          </span>
                        </div>
                        {clicked === index ? (
                          <p className="accordion-content show">
                            {item.answer}
                          </p>
                        ) : null}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="faq-contact-form">
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    data-error="Please enter your name"
                    placeholder="Name"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Email"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    required
                    data-error="Please enter your number"
                    className="form-control"
                    placeholder="Phone"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="msg_subject"
                    id="msg_subject"
                    className="form-control"
                    required
                    data-error="Please enter your subject"
                    placeholder="Subject"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    cols="30"
                    rows="6"
                    required
                    data-error="Write your message"
                    placeholder="Your Message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="send-btn">
                  <button type="submit" className="default-btn">
                    Send Message
                    <span></span>
                  </button>
                </div>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FaqsArea;
