import trackOrder from "../../assets/img/track-order.jpg";

function TrackingOrderArea() {
  return (
    <section className="track-order-area ptb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="track-order-image">
              <img src={trackOrder} alt="image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="track-order-content">
              <h2>Order Tracking</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
              </p>

              <form>
                <div className="form-group">
                  <label>Order ID</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Billing Email</label>
                  <input type="email" className="form-control" />
                </div>

                <button type="submit" className="default-btn">
                  Track Order
                  <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackingOrderArea;
