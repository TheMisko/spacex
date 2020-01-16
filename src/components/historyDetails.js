import React from "react";

const HistoryDetails = ({ history }) => {
  return (
    <div className="history-container">
      <div className="history">
        <div className="title">
          <h2>{history.title}</h2>
          <h4>({history.event_date_utc.slice(0, 10)})</h4>
        </div>

        <h3> {history.details}</h3>
        <div className="links">
          <a href={history.links.article}>article</a>
          <a href={history.links.wikipedia}>wikipedia</a>
        </div>
      </div>
    </div>
  );
};

export default HistoryDetails;
