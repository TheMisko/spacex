import React, { useState, useEffect } from "react";

const HomeCard = () => {
  const [data, setData] = useState(null);

  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/latest`
      );
      const data = await response.json();
      setData(data);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
      //   setInfo("INFORAMTION NOT FOUND");
    }
  };
  // {data ? <h1>{data.details}) nesto</h1> : <h1>nesto</h1>}
  return (
    <>
      {data ? (
        <div>
          <div className="home-card-container">
            <h1>LATEST LAUNCH</h1>
          </div>
          <div className="home-card">
            <div className="info">
              <h2>
                {data.mission_name} ({data.rocket.rocket_name})
              </h2>
              <h3>{data.last_date_update.slice(0, 10)}</h3>
              <h3>{data.launch_site.site_name_long}</h3>
              <div className="details">
                <p>{data.details}</p>
              </div>

              <div className="img-container">
                {data.links.flickr_images.slice(0, 4).map(img => (
                  <img src={img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>"loading"</h1>
      )}
    </>
  );
};

export default HomeCard;
