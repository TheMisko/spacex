import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LaunchDetailsCard from "../components/launcDetailsCard";
import Nav from "../components/nav";

const AllLaunches = () => {
  const [launches, setLaunches] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(14);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`https://api.spacexdata.com/v3/launches`);
      const data = await response.json();
      setLaunches(data);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
      //   setInfo("INFORAMTION NOT FOUND");
    }
  };
  const change = () => {
    setFirstIndex(0);
    setSecondIndex(14);
  };
  const change2 = () => {
    setFirstIndex(15);
    setSecondIndex(30);
  };
  const change3 = () => {
    setFirstIndex(31);
    setSecondIndex(45);
  };
  const change4 = () => {
    setFirstIndex(46);
    setSecondIndex(61);
  };
  const change5 = () => {
    setFirstIndex(62);
    setSecondIndex(77);
  };
  const change6 = () => {
    setFirstIndex(78);
    setSecondIndex(93);
  };
  const change7 = () => {
    setFirstIndex(94);
    setSecondIndex(103);
  };
  console.log(launches);
  return (
    <>
      <Nav />
      <div className="pagination">
        <a onClick={change} className="button1">
          1
        </a>
        <a onClick={change2} className="button1">
          2
        </a>
        <a onClick={change3} className="button1">
          3
        </a>
        <a onClick={change4} className="button1">
          4
        </a>
        <a onClick={change5} className="button1">
          5
        </a>
        <a onClick={change6} className="button1">
          6
        </a>
        <a onClick={change7} className="button1">
          7
        </a>
      </div>
      <div className="launches-img">
        <img src="https://66.media.tumblr.com/2ad2d3388387535334e629c010d67bbc/tumblr_mjw04sNlr01qg39ewo1_500.gif" />
      </div>
      <div className="all-container">
        {launches ? (
          <div className="launches-flex">
            {launches.slice(firstIndex, secondIndex).map(launch => (
              <Link
                to={`/launch/${launch.flight_number}`}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <div className="details-margin">
                  <LaunchDetailsCard data={launch} />
                </div>
              </Link>
            ))}
          </div>
        ) : ( <div className="loading"><h1>loading</h1></div>
          
        )}
      </div>
    </>
  );
};

export default AllLaunches;
