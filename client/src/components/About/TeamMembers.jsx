import team1 from "../../assets/img/team/team-1.jpg";
import team2 from "../../assets/img/team/team-2.jpg";
import team3 from "../../assets/img/team/team-3.jpg";
import team4 from "../../assets/img/team/team-4.jpg";
import team5 from "../../assets/img/team/team-5.jpg";
import team6 from "../../assets/img/team/team-6.jpg";

function TeamMembers({ paddingClass = "" }) {
  return (
    <section className={"team-area" + paddingClass}>
      <div className="container">
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
                <img src={team4} alt="image" />

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

          <div className="col-lg-4 col-sm-6">
            <div className="single-team">
              <div className="team-image">
                <img src={team5} alt="image" />

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
                <h3>Sarah Taylor</h3>
                <span>Sales Manager</span>
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
                <h3>Dominick Eakin</h3>
                <span>Image Editor</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-team">
              <div className="team-image">
                <img src={team6} alt="image" />

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
                <h3>James Andy</h3>
                <span>Customer Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
