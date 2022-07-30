import { Avatar , Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css"
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          ></Avatar>
          <input placeholder="What's Happening !!!!" type="text"></input>
        </div>
        <input
          placeholder="Enter Image URL"
          type="text"
          className="tweetBox__imageInput"
        ></input>
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox