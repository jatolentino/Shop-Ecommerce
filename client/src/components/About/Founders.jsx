import team1 from "../../assets/img/team/team-1.jpg";
import team2 from "../../assets/img/team/team-2.jpg";
import team3 from "../../assets/img/team/team-3.jpg";

function Founders() {
  return (
    <section className="team-area pt-50 pb-20">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Founders</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-team">
              <div className="team-image">
                <img src={team1} alt="image" />

                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="team-content">
                <h3>Scott Morales</h3>
                <span>Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-team">
              <div className="team-image">
                <img src={team2} alt="image" />

                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="team-content">
                <h3>Peter Lescott</h3>
                <span>CEO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-team">
              <div className="team-image">
                <img src={team3} alt="image" />

                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="team-content">
                <h3>Eric Sessions</h3>
                <span>Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;
