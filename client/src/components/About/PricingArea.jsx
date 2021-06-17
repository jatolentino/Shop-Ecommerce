import React, { useState } from "react";

function PricingArea({ paddingClass }) {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={"pricing-area" + paddingClass}>
      <div className="container">
        <div className="tab pricing-list-tab">
          <ul className="tabs">
            <li className={toggleState === 1 ? "current" : ""}
              onClick={() => toggleTab(1)}>
              <a>Monthly</a>
            </li>

            <li className={toggleState === 2 ? "current" : ""}
              onClick={() => toggleTab(2)}>
              <a>Yearly</a>
            </li>
          </ul>
          <div className="tab_content">
            <div className={
                    toggleState === 1 ? "show tabs_item" : "accordion-display"
                  }>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>Standard</h3>
                    </div>

                    <div className="price">$39</div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check"></i>
                        Computers & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Audio & Home Theater
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Laptop
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        TV & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Mobiles & Tablets
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Headphone & Earphone
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Battery & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Watches
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Cameras
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Accessories
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>Premium</h3>
                    </div>

                    <div className="price">$79</div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check"></i>
                        Computers & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Audio & Home Theater
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Laptop
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        TV & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Mobiles & Tablets
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Headphone & Earphone
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Battery & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Watches
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Cameras
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Accessories
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>Advanced</h3>
                    </div>

                    <div className="price">$99</div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check"></i>
                        Computers & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Audio & Home Theater
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Laptop
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        TV & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Mobiles & Tablets
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Headphone & Earphone
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Battery & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Watches
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Cameras
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Accessories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={
                    toggleState === 2 ? "show" : "accordion-display"
                  }>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>Standard</h3>
                    </div>

                    <div className="price">$139</div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check"></i>
                        Computers & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Audio & Home Theater
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Laptop
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        TV & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Mobiles & Tablets
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Headphone & Earphone
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Battery & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Watches
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Cameras
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Accessories
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>Premium</h3>
                    </div>

                    <div className="price">$279</div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check"></i>
                        Computers & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Audio & Home Theater
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Laptop
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        TV & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Mobiles & Tablets
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Headphone & Earphone
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Battery & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Watches
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Cameras
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Accessories
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="single-pricing-table">
                    <div className="pricing-header">
                      <h3>Advanced</h3>
                    </div>

                    <div className="price">$399</div>

                    <ul className="pricing-features">
                      <li>
                        <i className="flaticon-check"></i>
                        Computers & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Audio & Home Theater
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Laptop
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        TV & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Mobiles & Tablets
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Headphone & Earphone
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Battery & Accessories
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Watches
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Cameras
                      </li>

                      <li>
                        <i className="flaticon-check"></i>
                        Accessories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingArea;
