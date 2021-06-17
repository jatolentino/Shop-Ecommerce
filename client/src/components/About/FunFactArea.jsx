import CountUp from 'react-countup';

function FunFactArea({ paddingClass = "" }) {
  return (
    <section className={"fun-facts-area" + paddingClass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-fun-fact">
              <h3>
                <span className="odometer" data-count="999">
                <CountUp end={999} duration={5} />
                </span>
              </h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-fun-fact">
              <h3>
                <span className="odometer" data-count="363">
                <CountUp end={363} duration={5}/>
                </span>
              </h3>
              <p>Global Customers</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-fun-fact">
              <h3>
                <span className="odometer" data-count="25">
                <CountUp end={25} duration={5}/>
                </span>
              </h3>
              <p>Awards Won</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-fun-fact">
              <h3>
                <span className="odometer" data-count="100">
                <CountUp end={100} duration={5} />
                </span>
                <span className="target">%</span>
              </h3>
              <p>Experts Employee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunFactArea;
