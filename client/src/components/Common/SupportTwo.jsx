function SupportTwo({ paddingClass = "" }) {
  return (
    <section className={"support-area" + paddingClass}>
      <div className="container">
        <div className="support-inner-item">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-support-box">
                <div className="icon">
                  <i className="flaticon-free-shipping"></i>
                </div>

                <div className="support-content">
                  <h3>Shipping Worldwide</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-support-box">
                <div className="icon">
                  <i className="flaticon-return"></i>
                </div>

                <div className="support-content">
                  <h3>30 Days Refund</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-support-box">
                <div className="icon">
                  <i className="flaticon-security"></i>
                </div>

                <div className="support-content">
                  <h3>100% Secure Payment</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-support-box">
                <div className="icon">
                  <i className="flaticon-support"></i>
                </div>

                <div className="support-content">
                  <h3>24/7 Customer Support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportTwo;
