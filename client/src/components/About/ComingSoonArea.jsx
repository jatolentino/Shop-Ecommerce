import React from "react";

const ComingSoonArea = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="coming-soon-area ptb-50">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="coming-soon-content">
              <h2>We Are Launching Soon</h2>
              <div id="timer" className="flex-wrap d-flex justify-content-center">
                <div
                  id="days"
                  className="align-items-center flex-column d-flex justify-content-center"
                >{days}<span>Days</span></div> 
                <div
                  id="hours"
                  className="align-items-center flex-column d-flex justify-content-center"
                >{hours}<span>Hours</span></div>
                <div
                  id="minutes"
                  className="align-items-center flex-column d-flex justify-content-center"
                >{minutes}<span>Minutes</span></div>
                <div
                  id="seconds"
                  className="align-items-center flex-column d-flex justify-content-center"
                >{seconds}<span>Seconds</span></div>
              </div>
              <form className="newsletter-form" data-toggle="validator">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autocomplete="off"
                  />
                </div>
                <button type="submit" className="default-btn">
                  Subscribe
                </button>
                <div id="validator-newsletter" className="form-result"></div>
                <p>
                  If you would like to be notified when your app is live, Please
                  subscribe to our mailing list.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonArea;
