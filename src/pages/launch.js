import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Launch = ({ match }) => {
  const [launch, setLaunch] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${match.params.mission_name}`
      );
      const data = await response.json();
      setLaunch(data);
    } catch (error) {
      console.log("error:", error);
      //   setInfo("INFORAMTION NOT FOUND");
    }
  };
  console.log(launch);
  // console.log(launch.flight_number);
  return (
    <div>
      <div className="nav-launch">
        <Nav />
      </div>

      <div className="launch-container">
        {launch ? (
          <div className="launch-info">
            <div className="info-flex">
              <h2> Mission name: </h2>
              <h3>{launch.mission_name}</h3>
            </div>
            <div className="info-flex">
              <h2> Launch site: </h2>
              <h3>{launch.launch_site.site_name}</h3>
            </div>
            <div className="info-flex">
              <h2> Launch date: </h2>
              <h2>{launch.launch_date_utc.slice(0, 10)}</h2>
            </div>

            <div className="info-details">
              <p>{launch.details}</p>
            </div>
            <div className="launch-images">
              {" "}
              <div data-aos="zoom-in">
                {launch.links.flickr_images.map(images => (
                  <img src={images} />
                ))}
              </div>
            </div>
            <div className="launch-links">
              <h3> Related links:</h3>
              <div className="links-margin">
                <a href={launch.links.reddit_launch}>
                  <img src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Reddit-512.png" />
                </a>
                <a href={launch.links.article_link}>
                  <img src="https://img.icons8.com/cotton/2x/news.png" />
                </a>
                <a href={launch.links.wikipedia}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tango_style_Wikipedia_Icon.svg/1024px-Tango_style_Wikipedia_Icon.svg.png" />
                </a>
                <a href={launch.links.video_link}>
                  <img src="https://seeklogo.net/wp-content/uploads/2016/06/YouTube-icon.png" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          "LOADING"
        )}
      </div>
    </div>
  );
};

export default Launch;
