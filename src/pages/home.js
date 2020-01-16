import React, { useState, useEffect } from "react";

import Nav from "../components/nav";
import HomeCard from "../components/homeCard";

const Home = () => {
  const [quote, setQuote] = useState("");
  const [gif, setGif] = useState("");
  const gifs = [
    "https://media0.giphy.com/media/xUA7aZY3XVBuhQ8RdC/source.gif",
    "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/moon_zoom_in_4.gif",
    "https://i.gifer.com/1lM5.gif",
    "https://info.alen.space/hs-fs/hubfs/blog/cubesat-laser-comms.gif?width=1280&name=cubesat-laser-comms.gif",

    "https://thumbs.gfycat.com/FlimsyHeavyAnt-small.gif",

    "https://media.giphy.com/media/B1OuaPp6VEKB2/giphy.gif",

    "https://i.gifer.com/7YVQ.gif"
  ];
  const quotes = [
    {
      quote:
        "I can honestly say - and it's a big surprise to me - that I have never had a dream about being on the moon.",
      author: "Neil Armstrong"
    },
    {
      quote: "All civilizations become either spacefaring or extinct.",
      author: "Carl Sagan"
    },
    {
      quote:
        "The exploration of space will go ahead, whether we join in it or not, and it is one of the great adventures of all time, and no nation which expects to be the leader of other nations can expect to stay behind in the race for space.",
      author: "John F. Kennedy"
    },
    {
      quote:
        "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
      author: "Arthur C. Clarke"
    },
    {
      quote: "It's a fixer-upper of a planet but we could make it work.",
      author: "Elon Musk"
    },
    {
      quote: "Returning to Earth, that was the challenging part.",
      author: "Buzz Aldrin"
    }
  ];
  const rand = () =>
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

  const randGif = () => setGif(gifs[Math.floor(Math.random() * gifs.length)]);

  useEffect(() => {
    rand();
    randGif();
  }, []);
  // const random = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="home-container">
      <div className="home-nav">
        <Nav />
      </div>
      <div className="home-quote-container">
        <div className="quote">
          <h1>"{quote.quote}"</h1>{" "}
          <div className="author">
            <h2>{quote.author}</h2>
          </div>
        </div>
      </div>
      <div className="home-arrow">
        {" "}
        <a data-scroll href="#down">
          <div className="arrow"></div>
        </a>
      </div>

      <div id="up" className="home-img">
        <img src={gif} />
      </div>
      <div className="home-container-2">
        <div id="down" className="home-img">
          <div className="home-2">
            <HomeCard />
            <div className="home-arrow-up">
              {" "}
              <a data-scroll href="#up">
                <div className="arrowUp"></div>
              </a>
            </div>
          </div>

          {/* <img src="https://66.media.tumblr.com/2ad2d3388387535334e629c010d67bbc/tumblr_mjw04sNlr01qg39ewo1_500.gif" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
