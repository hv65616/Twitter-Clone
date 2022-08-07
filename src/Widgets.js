import React from "react";
import "./Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon"></SearchIcon>
        <input placeholder="Search Twitter " type="text"></input>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening?</h2>
        <TwitterTweetEmbed tweetId={"1302230438128226305"}></TwitterTweetEmbed>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="beWho_U_R"
          options={{ height: 400 }}
        ></TwitterTimelineEmbed>
        <TwitterShareButton
          url={"https://www.linkedin.com/in/himanshu-verma-94a1a41b8/"}
        ></TwitterShareButton>
      </div>
    </div>
  );
}

export default Widgets;
