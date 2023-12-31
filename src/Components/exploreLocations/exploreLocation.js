import "./exploreLocation.css";
import karachi from "./karachi.jpg";
import Lahore from "./Lahore.jpg";
import Multan from "./Multan.jpg";
import Islamabad from "./islamabad.jpg";
import Peshawar from "./Pehawar.jpg";
import Gawadar from "./Gwadar.jpg";
import Kashmir from "./Kashmir.jpg";
function ExploreLocations(props) {
  return (
    <>
      <div className="heading">
        <div className="main-Heading">Explore homes on Placio</div>
        <div>
          Take a deep dive and browse homes for sale, original neighborhood
          photos, resident
        </div>
        <div>reviews and local insights to find what is right for you.</div>
      </div>
      <div className="geolocations">
        <ul className="flexContainer">
          <li className="fullHeight-Box">
            <div className="cityname_Heading">
              <h1>Karachi</h1>
            </div>
            <div className="cityimage_pic">
              <a href="/properties" className="locationImage">
                <img src={karachi} alt="karachi" />
              </a>
            </div>
            <div className="cityHouse_View">
              <button>View Homes</button>
            </div>
          </li>
          <li className="halfHeight-Box">
            <div className="halfHeight-Box-Content">
              <div>
                <div className="cityname_Heading">
                  <h1>Multan</h1>
                </div>
                <a href="/" className="locationImage">
                  <img src={Multan} alt="karachi" />
                </a>
                <div className="haf_cityHouse_View">
                  <button>View Homes</button>
                </div>
              </div>
              <div>
                <div className="cityname_Heading">
                  <h1>Peshawar</h1>
                </div>
                <a href="/" className="locationImage">
                  <img src={Peshawar} alt="karachi" />
                </a>
                <div className="haf_cityHouse_View">
                  <button>View Homes</button>
                </div>
              </div>
            </div>
          </li>
          <li className="fullHeight-Box">
            <div className="cityname_Heading">
              <h1>Lahore</h1>
            </div>
            <div className="cityimage_pic">
              <a href="/" className="locationImage">
                <img src={Lahore} alt="karachi" />
              </a>
            </div>
            <div className="cityHouse_View">
              <button>View Homes</button>
            </div>
          </li>
          <li className="halfHeight-Box">
            <div className="halfHeight-Box-Content">
              <div>
                <div className="cityname_Heading">
                  <h1>Kashmir</h1>
                </div>
                <a href="/" className="locationImage">
                  <img src={Kashmir} alt="karachi" />
                </a>
                <div className="haf_cityHouse_View">
                  <button>View Homes</button>
                </div>
              </div>
            </div>
            <div className="halfHeight-Box-Content">
              <div className="cityname_Heading">
                <h1>Gawadar</h1>
              </div>
              <div>
                <a href="/" className="locationImage">
                  <img src={Gawadar} alt="karachi" />
                </a>
                <div className="haf_cityHouse_View">
                  <button>View Homes</button>
                </div>
              </div>
            </div>
          </li>
          <li className="fullHeight-Box">
            <div className="cityname_Heading">
              <h1>Islamabad</h1>
            </div>
            <div className="cityimage_pic">
              <a href="/" className="locationImage">
                <img src={Islamabad} alt="karachi" />
              </a>
            </div>
            <div className="cityHouse_View">
              <button>View Homes</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
export default ExploreLocations;
