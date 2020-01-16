import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import HistoryDetails from "../components/historyDetails";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const History = () => {
  const [history, setHistory] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`https://api.spacexdata.com/v3/history`);
      const data = await response.json();
      setHistory(data);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
      //   setInfo("INFORAMTION NOT FOUND");
    }
  };
  return (
    <>
      <Nav />

      {history ? (
        <div className="history-margin">
          {history.map(data => (
            <div data-aos="fade-right">
              <HistoryDetails history={data} />
            </div>
          ))}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default History;
