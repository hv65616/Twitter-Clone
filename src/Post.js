import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";

function Post({ displayName, userName, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Himanshu Verma{" "}
              <span className="post__headerSpecial">@hv65616</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Currently started to build a twitter clone
            </p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/RR32PdmXEwkuzZFKSa/giphy.gif"
          alt=""
        ></img>
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatOutlinedIcon fontSize="small" />
          <FavoriteBorderRoundedIcon fontSize="small" />
          <PublishOutlinedIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
